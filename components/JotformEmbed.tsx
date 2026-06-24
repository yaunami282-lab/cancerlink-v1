/**
 * Jotform 表單嵌入元件（佔位版本）
 *
 * 使用說明：
 * 1. 在 Jotform 官網創建表單後，獲取 iframe 嵌入代碼
 * 2. 替換下方 placeholder 部分的 iframe src 連結
 * 3. 真實表單連結格式類似：https://form.jotform.com/XXXXXXXXXXXX
 */

interface JotformEmbedProps {
  formId: string;
  title: string;
  description: string;
  extraFields?: React.ReactNode;
}

export default function JotformEmbed({
  formId,
  title,
  description,
  extraFields,
}: JotformEmbedProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* 表單頭部 */}
      <div className="bg-[#3a7d5a] text-white px-6 py-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-green-100 mt-1">{description}</p>
      </div>

      {/* 額外欄位 */}
      {extraFields && <div className="px-6 pt-4">{extraFields}</div>}

      {/* 表單佔位區 */}
      <div className="p-6">
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50">
          <div className="text-4xl mb-3">📋</div>
          <p className="text-gray-500 text-sm mb-2">Jotform 表單將在此處嵌入</p>
          <p className="text-xs text-gray-400">表單ID: {formId}</p>

          {/* 模擬表單界面 */}
          <div className="mt-6 space-y-4 max-w-md mx-auto text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
              <input type="text" disabled placeholder="請輸入您的姓名" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">聯絡電話 *</label>
              <input type="tel" disabled placeholder="請輸入您的聯絡電話" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">電子郵箱</label>
              <input type="email" disabled placeholder="請輸入您的電子郵箱" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">病情簡述</label>
              <textarea disabled rows={3} placeholder="請簡要描述您或家人的病情..." className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 text-sm resize-none" />
            </div>
            <div className="pt-2">
              <button disabled className="w-full bg-gray-300 text-white font-medium py-2.5 rounded-lg cursor-not-allowed">
                提交申請
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 表單底部說明 */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          🔒 您的資訊受到嚴格保密，僅用於醫療諮詢用途。提交後我們將在24-48小時內與您聯絡。
        </p>
      </div>
    </div>
  );
}
