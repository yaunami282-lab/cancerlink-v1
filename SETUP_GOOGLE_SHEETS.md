# Google Sheets 數據存儲設定教程

本教程將帶你逐步完成 Google Sheets 作為 Cancer Link 表單數據庫的配置。

---

## 總覽

```
用戶提交表單 → Next.js API → Google Sheets API → 你的 Google Sheet
                                   ↑
                          Service Account 認證
```

你需要完成三個部分：

| 步驟 | 內容 | 預計時間 |
|------|------|---------|
| Part A | 建立 Google Sheet 並設定分頁 | 3 分鐘 |
| Part B | 建立 Google Cloud Service Account | 8 分鐘 |
| Part C | 設定專案環境變數 | 2 分鐘 |

---

## Part A：建立 Google Sheet

### A1. 建立 Sheet

1. 打開 [Google Sheets](https://sheets.google.com)
2. 點擊「**空白**」建立一個新的試算表
3. 將文件名稱改為 `Cancer Link 表單數據`

### A2. 建立三個分頁

在底部點擊「＋」建立三個分頁，雙擊分頁名稱改名：

| 分頁名稱（必須精確） | 對應服務 |
|---------------------|---------|
| `report-analysis` | 報告分析與研究配對 |
| `genetic-testing` | 腫瘤基因檢測 |
| `cancer-companion` | 腫瘤陪跑服務 |

刪除預設的「工作表1」。

### A3. 設定標題行

**注意：不同分頁有不同的標題行，請根據服務類型設置：**

#### report-analysis（報告分析與研究配對）分頁：

在第 1 行填入以下標題（共 16 列）：

```
A1: 提交時間
B1: 姓名
C1: 性別
D1: 年齡
E1: 所在地區
F1: 電話
G1: 癌症類型
H1: 確診日期
I1: 基因檢測
J1: 當前治療
K1: 慢性疾病
L1: 病情描述
M1: 上傳報告文件名
N1: 上傳報告鏈接
O1: 其他病歷文件名
P1: 其他病歷鏈接
```

#### 其他分頁（genetic-testing、cancer-companion）：

在第 1 行填入以下標題（共 6 列）：

```
A1: 時間
B1: 姓名
C1: 電話
D1: 郵箱
E1: 需求描述
F1: 家族史
```

### 數據格式說明

#### report-analysis 分頁的數據格式：
- **性別 (C)**: "男" 或 "女"
- **年齡 (D)**: 數字
- **癌症類型 (G)**: "breast"（乳腺癌）、"lung"（肺癌）、"liver"（肝癌）、"gi"（胃腸道腫瘤）、"leukemia"（白血病）、"lymphoma"（淋巴瘤）或 "other"（其他）
- **基因檢測 (I)**: "yes"（是）、"no"（否）或 "notSure"（不確定）
- **當前治療 (J)**: 多選值，用逗號分隔，例如 "surgery, chemotherapy"
- **慢性疾病 (K)**: 多選值，用逗號分隔，例如 "hypertension, diabetes"
- **病情描述 (L)**: 自由文本

---

## Part D: 設置 Google Drive 文件存儲（可選）

如果你想要存儲患者上傳的文件，你可以設置 Google Drive 集成：

### D1. 創建文件夾

1. 打開 [Google Drive](https://drive.google.com)
2. 創建一個新文件夾，例如 "Cancer Link 患者文件"
3. 進入文件夾，複製瀏覽器地址欄中的文件夾 ID
   - 地址格式為：`https://drive.google.com/drive/u/0/folders/文件夾ID`
   - 只需要複製 `文件夾ID` 部分

### D2. 共享文件夾給 Service Account

1. 在文件夾上右鍵，選擇「共享」
2. 輸入你在 Part B 中創建的 Service Account 的電子郵件地址（類似：`xxxx@xxxx.iam.gserviceaccount.com`）
3. 權限設置為「編輯者」
4. 取消勾選「通知人員」，然後點擊「發送」或「共享」

### D3. 設置環境變數

在 `.env.local` 文件中添加：

```
GOOGLE_DRIVE_FOLDER_ID=你的文件夾ID
```

現在，當患者提交表單時，上傳的文件會自動保存到這個 Google Drive 文件夾中，並且 Google Sheet 中會保存文件的鏈接。

如下圖所示：

| 時間 | 姓名 | 電話 | 郵箱 | 需求描述 | 家族史 |
|------|------|------|------|---------|--------|
| | | | | | |

### A4. 獲取 Sheet ID

1. 查看瀏覽器網址列，格式為：
   ```
   https://docs.google.com/spreadsheets/d/XXXXXXXXXXXXXXXXXXXXX/edit
   ```
2. 複製 `d/` 和 `/edit` 之間的那一串字元（`XXXXX...`）
3. **保存好這個 ID**，稍後會用到

---

## Part B：建立 Google Cloud Service Account

### B1. 建立專案

1. 打開 [Google Cloud Console](https://console.cloud.google.com)
2. 在頂部點擊「**選取專案**」→「**新增專案**」
3. 專案名稱輸入 `cancerlink-forms` → 點擊「**建立**」
4. 等待幾秒，確認頂部已切換到新專案

### B2. 啟用 Google Sheets API

1. 左側選單 →「**API 和服務**」→「**啟用 API 和服務**」
2. 搜尋「**Google Sheets API**」
3. 點擊搜尋結果中的「Google Sheets API」
4. 點擊「**啟用**」

### B3. 建立 Service Account

1. 左側選單 →「**API 和服務**」→「**憑證**」
2. 點擊頂部的「**＋建立憑證**」→ 選擇「**服務帳戶**」
3. 填寫：
   - **服務帳戶名稱**：`cancerlink-sheets`
   - **服務帳戶 ID**：保持預設
   - **服務帳戶說明**：`Write form submissions to Google Sheets`
4. 點擊「**建立並繼續**」
5. 角色選擇：不用選，直接點擊「**繼續**」
6. 點擊「**完成**」

### B4. 建立並下載 JSON 憑證金鑰

1. 在憑證列表中找到剛建立的 service account，點擊它的 **email 連結**
2. 切換到「**金鑰**」分頁
3. 點擊「**新增金鑰**」→「**建立新的金鑰**」
4. 選擇「**JSON**」→ 點擊「**建立**」
5. 瀏覽器會自動下載一個 `.json` 檔案
6. **保存好這個檔案**，裡面有私鑰，不要分享給任何人

### B5. 授權 Service Account 訪問你的 Sheet

1. 回到 Part A 建立的 Google Sheet
2. 點擊右上角的「**共用**」
3. 在「新增使用者」框中，貼上 **service account 的 email**
   - email 格式類似：`cancerlink-sheets@cancerlink-forms.iam.gserviceaccount.com`
   - 可以在下載的 JSON 檔案中找到 `"client_email"` 欄位
4. 權限選擇「**編輯者**」
5. 取消勾選「通知使用者」（service account 不是真人，無法收郵件）
6. 點擊「**共用**」

> ⚠️ 如果忘記這一步，API 請求會回傳 403 錯誤！

---

## Part C：設定專案環境變數

### C1. 建立 `.env.local`

在專案根目錄（`/Users/mm/Projects/cancerlink_v1/`）建立 `.env.local` 檔案：

```bash
# Google Sheet ID（從 Part A Step 4 取得）
GOOGLE_SHEET_ID=1aBcDeFgHiJkLmNoPqRsTuVwXyZ

# Service Account JSON（從 Part B Step 4 下載的 JSON 檔案，將整段內容壓成一行貼上）
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account","project_id":"cancerlink-forms","private_key_id":"abc123","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEv...\n-----END PRIVATE KEY-----\n","client_email":"cancerlink-sheets@cancerlink-forms.iam.gserviceaccount.com","client_id":"123456","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/cancerlink-sheets%40cancerlink-forms.iam.gserviceaccount.com"}

# 後台管理密碼（自行設定）
NEXT_PUBLIC_ADMIN_PASSWORD=mypassword123
```

### C2. 驗證設定

重啟 dev server：

```bash
npm run dev
```

1. 訪問 `http://localhost:3000/services/report-analysis`
2. 填寫表單並提交
3. 打開你的 Google Sheet → 檢查 `report-analysis` 分頁是否有新增一行數據

---

## 常見問題

### Q: 提交表單後回傳 500 錯誤

檢查終端機或 `.next/dev/logs/next-development.log` 的錯誤訊息：
- `Missing GOOGLE_SHEET_ID or GOOGLE_SERVICE_ACCOUNT_JSON` → `.env.local` 未設定或格式錯誤
- `403` → 檢查 Part B Step 5，service account 是否已被加到 Sheet 的編輯者

### Q: 找不到 `.env.local` 檔案

如果你用的是 macOS Finder，以 `.` 開頭的檔案預設隱藏。用編輯器（VS Code）可以直接看到和編輯。

### Q: Service Account JSON 太長貼不上

JSON 可以保留換行符號，關鍵是 `private_key` 欄位中的 `\n` 不能遺漏。建議直接從下載的 JSON 檔案複製全部內容。

### Q: `NEXT_PUBLIC_ADMIN_PASSWORD` 沒有生效

以 `NEXT_PUBLIC_` 開頭的變數需要重啟 dev server 才能生效。終端機 `Ctrl+C` 關掉再 `npm run dev`。

### Q: 想用現有的 Sheet 而非新建

可以！確保現有 Sheet 中有三個分頁名稱完全匹配（`report-analysis`、`cancer-companion`、`genetic-testing`），且第一行為標題列。

---

## 安全提醒

- `.env.local` 檔案 **不要提交到 Git**（已在 `.gitignore` 中）
- Service Account JSON 包含私鑰，**不要上傳到任何公開位置**
- 部署到生產環境時，將環境變數設定到你的託管平台（Vercel / Cloudflare 等）
