/**
 * Google Drive API 封裝 — 使用 Service Account 認證
 *
 * 環境變數：
 *   GOOGLE_SERVICE_ACCOUNT_JSON — Service Account 的 JSON 憑證（整段 JSON 字串）
 *   GOOGLE_DRIVE_FOLDER_ID      — 用於存儲文件的 Google Drive 文件夾 ID
 */

import { getAccessToken } from "./googleAuth";

const DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || "";

/**
 * 檢查 Google Drive 是否配置並可用
 */
export function isDriveEnabled(): boolean {
  return !!DRIVE_FOLDER_ID;
}

/**
 * 上傳文件到 Google Drive
 * @param file 文件對象
 * @param fileName 文件名稱
 * @returns 文件的 Google Drive 連結
 */
export async function uploadToDrive(
  file: File,
  fileName: string
): Promise<string> {
  if (!DRIVE_FOLDER_ID) {
    throw new Error("Missing GOOGLE_DRIVE_FOLDER_ID environment variable");
  }

  const token = await getAccessToken([
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive",
  ]);
  
  // 第一步：創建文件元數據
  const metadata = {
    name: fileName,
    parents: [DRIVE_FOLDER_ID],
  };

  // 上傳文件
  const formData = new FormData();
  formData.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" })
  );
  
  // 將文件轉換為 ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  formData.append("file", new Blob([arrayBuffer]), fileName);

  const res = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true&fields=id,webViewLink",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Google Drive API error: ${res.status} ${err}`);
  }

  const data = await res.json();
  return data.webViewLink;
}

export { getAccessToken };
