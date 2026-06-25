import { TRIALS } from "@/data/trials";
import TrialCard from "@/components/TrialCard";
import JotformEmbed from "@/components/JotformEmbed";

export const metadata = {
  title: "報告分析與研究配對 - Cancer Link 癌研連線",
  description: "上傳您的醫學檢查報告，AI + 專家團隊為您精準配對全球正在招募的臨床試驗。",
};

export default function ReportAnalysisPage() {
  return (
    <>
      {/* 頁面頭部 — 清新綠色 */}
      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            📊 報告分析與研究配對
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            上傳您的醫學檢查報告，我們的醫學專家團隊將為您進行深度解讀，
            並從全球正在招募的臨床試驗中精準配對最適合您的治療方案。
          </p>
        </div>
      </section>

      {/* 服務流程 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-12">服務流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "📤", title: "上傳報告", desc: "上傳您的病理報告、影像報告和基因檢測結果" },
              { step: "2", icon: "🔍", title: "專家解讀", desc: "腫瘤專家團隊深度分析您的報告" },
              { step: "3", icon: "🎯", title: "精準配對", desc: "從全球臨床試驗庫中配對最佳方案" },
              { step: "4", icon: "🤝", title: "協助入組", desc: "全程協助與試驗中心對接、入組" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="w-8 h-8 rounded-full bg-[#52b788] text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jotform 表單 */}
      <section className="py-16 bg-[#f7fbf7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#3a7d5a] mb-3">開始免費配對評估</h2>
            <p className="text-gray-500">填寫以下資訊並上傳您的檢查報告，我們將在24小時內與您聯絡</p>
          </div>
          <JotformEmbed formId="report-analysis" title="報告分析申請表" description="請提供您的基本資訊和檢查報告" formUrl="https://form.jotform.com/261743634109053" />
        </div>
      </section>

      {/* 臨床試驗展示區 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#3a7d5a] mb-3">正在招募的臨床試驗</h2>
            <p className="text-gray-500">以下為目前正在招募中的癌症臨床試驗，資料定期從 ClinicalTrials.gov 同步更新</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRIALS.map((trial) => (
              <TrialCard key={trial.id} trial={trial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
