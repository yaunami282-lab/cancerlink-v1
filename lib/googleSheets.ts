/**
 * Google Sheets API 封裝 — 使用 Service Account 認證
 *
 * 環境變數：
 *   GOOGLE_SERVICE_ACCOUNT_JSON — Service Account 的 JSON 憑證（整段 JSON 字串）
 *   GOOGLE_SHEET_ID             — Google Sheet 的 ID（從網址擷取）
 */

import { getAccessToken } from "./googleAuth";

const SHEET_ID = process.env.GOOGLE_SHEET_ID || "";

export interface FormSubmission {
  name: string;
  phone: string;
  email?: string;
  description?: string;
  familyHistory?: boolean;
  // 報告分析專用字段
  gender?: string;
  age?: string;
  location?: string;
  cancerType?: string;
  diagnosisDate?: string;
  geneticTest?: string;
  currentTreatment?: string[];
  chronicDisease?: string[];
  conditionDescription?: string;
  // 文件相關字段
  reportFileName?: string;
  reportFileUrl?: string;
  otherRecordsFileName?: string;
  otherRecordsFileUrl?: string;
  submittedAt: string;
}

/**
 * 將表單數據寫入 Google Sheet（附加到末尾）
 * @param serviceType - 對應 sheet 分頁名稱
 */
export async function appendToSheet(
  serviceType: string,
  data: FormSubmission
): Promise<void> {
  if (!SHEET_ID) {
    throw new Error("Missing GOOGLE_SHEET_ID environment variable");
  }

  const token = await getAccessToken(["https://www.googleapis.com/auth/spreadsheets"]);
  
  let row: string[];
  
  if (serviceType === "report-analysis") {
    // 報告分析表單的完整字段
    row = [
      data.submittedAt,
      data.name,
      data.gender || "",
      data.age || "",
      data.location || "",
      data.phone,
      data.cancerType || "",
      data.diagnosisDate || "",
      data.geneticTest || "",
      data.currentTreatment ? data.currentTreatment.join(", ") : "",
      data.chronicDisease ? data.chronicDisease.join(", ") : "",
      data.conditionDescription || "",
      data.reportFileName || "",
      data.reportFileUrl || "",
      data.otherRecordsFileName || "",
      data.otherRecordsFileUrl || "",
    ];
  } else {
    // 其他表單的標準字段
    row = [
      data.submittedAt,
      data.name,
      data.phone,
      data.email || "",
      data.description || "",
      data.familyHistory !== undefined ? (data.familyHistory ? "是" : "否") : "",
    ];
  }

  const range = serviceType === "report-analysis" ? "A:P" : "A:F";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(serviceType)}!${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [row] }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Google Sheets API error: ${res.status} ${err}`);
  }
}

/**
 * 讀取指定分頁的所有數據
 */
export async function readSheet(serviceType: string): Promise<FormSubmission[]> {
  if (!SHEET_ID) {
    return [];
  }

  const token = await getAccessToken(["https://www.googleapis.com/auth/spreadsheets"]);
  const range = serviceType === "report-analysis" ? "A:P" : "A:F";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(serviceType)}!${range}`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) return [];
  const data = await res.json();
  const rows: string[][] = data.values || [];

  // 第一行是標題，跳過
  return rows.slice(1).map((row) => ({
    submittedAt: row[0] || "",
    name: row[1] || "",
    phone: row[2] || "",
    email: row[3] || "",
    description: row[4] || "",
    familyHistory: row[5] === "是" ? true : row[5] === "否" ? false : undefined,
    // 報告分析專用字段（僅 report-analysis sheet 有此列）
    gender: row[6] || undefined,
    age: row[7] || undefined,
    location: row[8] || undefined,
    cancerType: row[9] || undefined,
    diagnosisDate: row[10] || undefined,
    geneticTest: row[11] || undefined,
    currentTreatment: row[12] ? row[12].split(", ") : undefined,
    chronicDisease: row[13] ? row[13].split(", ") : undefined,
    conditionDescription: row[14] || undefined,
    reportFileName: row[15] || undefined,
    reportFileUrl: row[16] || undefined,
    otherRecordsFileName: row[17] || undefined,
    otherRecordsFileUrl: row[18] || undefined,
  }));
}
