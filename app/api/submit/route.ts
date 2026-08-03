import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";
import { uploadToDrive, isDriveEnabled } from "@/lib/googleDrive";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const serviceType = formData.get("serviceType") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const description = formData.get("description") as string;
    const familyHistoryStr = formData.get("familyHistory") as string;
    
    // 報告分析專用字段
    const gender = formData.get("gender") as string;
    const age = formData.get("age") as string;
    const location = formData.get("location") as string;
    const cancerType = formData.get("cancerType") as string;
    const diagnosisDate = formData.get("diagnosisDate") as string;
    const geneticTest = formData.get("geneticTest") as string;
    const currentTreatmentStr = formData.get("currentTreatment") as string;
    const chronicDiseaseStr = formData.get("chronicDisease") as string;
    const conditionDescription = formData.get("conditionDescription") as string;
    
    // 文件
    const reportFile = formData.get("reportFile") as File | null;
    const otherRecordsFile = formData.get("otherRecordsFile") as File | null;

    // 根據服務類型進行不同的驗證
    if (!serviceType || !name || !phone) {
      return NextResponse.json({ error: "缺少必填欄位" }, { status: 400 });
    }

    let reportFileUrl: string | undefined;
    let otherRecordsFileUrl: string | undefined;

    if (serviceType === "report-analysis") {
      // 報告分析表單的必填字段
      if (!gender || !age || !location || !cancerType || !diagnosisDate || !geneticTest) {
        return NextResponse.json({ error: "缺少必填欄位" }, { status: 400 });
      }

      // 上傳文件到 Google Drive（仅在 Drive 启用时）
      if (isDriveEnabled()) {
        if (reportFile && reportFile.size > 0) {
          try {
            reportFileUrl = await uploadToDrive(reportFile, reportFile.name);
          } catch (err) {
            console.error("Failed to upload report file:", err);
            // 即使文件上傳失敗，我們仍然可以提交表單，只是沒有文件鏈接
          }
        }
        
        if (otherRecordsFile && otherRecordsFile.size > 0) {
          try {
            otherRecordsFileUrl = await uploadToDrive(otherRecordsFile, otherRecordsFile.name);
          } catch (err) {
            console.error("Failed to upload other records file:", err);
          }
        }
      } else {
        console.log("Google Drive not enabled, skipping file upload");
      }

      const currentTreatment = currentTreatmentStr ? JSON.parse(currentTreatmentStr) : undefined;
      const chronicDisease = chronicDiseaseStr ? JSON.parse(chronicDiseaseStr) : undefined;
      
      await appendToSheet(serviceType, {
        name,
        phone,
        gender,
        age,
        location,
        cancerType,
        diagnosisDate,
        geneticTest,
        currentTreatment,
        chronicDisease,
        conditionDescription,
        reportFileName: reportFile?.name,
        reportFileUrl,
        otherRecordsFileName: otherRecordsFile?.name,
        otherRecordsFileUrl,
        submittedAt: new Date().toISOString(),
      });
    } else {
      // 其他表單的標準字段驗證
      if (!description) {
        return NextResponse.json({ error: "缺少必填欄位" }, { status: 400 });
      }

      let familyHistory: boolean | undefined;
      if (familyHistoryStr === "true") familyHistory = true;
      else if (familyHistoryStr === "false") familyHistory = false;

      await appendToSheet(serviceType, {
        name,
        phone,
        email: email || "",
        description,
        familyHistory,
        submittedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: err.message || "提交失敗" }, { status: 500 });
  }
}
