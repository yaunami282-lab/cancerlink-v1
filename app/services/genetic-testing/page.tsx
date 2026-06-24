import JotformEmbed from "@/components/JotformEmbed";

export const metadata = {
  title: "腫瘤基因檢測 - Cancer Link 臨床連線",
  description:
    "為患者及家屬提供遺傳風險評估與精準基因檢測諮詢。了解您的基因，守護全家人的健康未來。",
};

export default function GeneticTestingPage() {
  return (
    <>
      {/* 頁面頭部 */}
      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            🧬 腫瘤基因檢測
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            為患者及家屬提供遺傳風險評估與精準基因檢測諮詢。
            了解您的基因，守護全家人的健康未來。
          </p>
        </div>
      </section>

      {/* 核心價值 —— 溫暖、人文關懷 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#e8f5e9] to-[#f0faf5] rounded-3xl p-8 sm:p-12 text-center border border-[#52b788]/20">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a7d5a] mb-4">
              了解基因，是給家人最溫暖的守護
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              腫瘤基因檢測不僅是為了患者。由於直系親屬具有相似的遺傳背景，
              家屬同樣可能是致病基因的潛在攜帶者。一次檢測，讓全家人更安心 ——
              提早發現潛在風險、制定個人化預防方案，在疾病到來之前做好準備。
            </p>
          </div>
        </div>
      </section>

      {/* 誰適合檢測 */}
      <section className="py-16 bg-[#f7fbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-12">
            哪些人建議考慮腫瘤基因檢測？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👨‍👩‍👧‍👦",
                title: "腫瘤患者家屬",
                desc: "直系親屬中有人確診癌症，尤其發病年齡低於50歲",
              },
              {
                icon: "🔬",
                title: "多發癌家族",
                desc: "家族中多人罹患同種或相關癌症",
              },
              {
                icon: "👶",
                title: "年輕發病者",
                desc: "個人於較年輕年齡確診癌症（例如低於45歲乳腺癌）",
              },
              {
                icon: "🍃",
                title: "關注健康者",
                desc: "希望主動了解自身遺傳風險，為未來的健康做好規劃",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#3a7d5a] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 檢測流程 —— 溫暖說明 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-12">
            檢測流程簡單無負擔
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💉",
                title: "簡單採樣",
                desc: "只需抽取少量外周血或提供口腔拭子，全程無創、快捷。部分檢測更支援居家採樣盒郵寄完成。",
              },
              {
                icon: "🔬",
                title: "精準分析",
                desc: "由認證基因檢測實驗室進行次世代定序（NGS）分析，全面篩查遺傳性癌症易感基因。",
              },
              {
                icon: "📋",
                title: "專業解讀",
                desc: "遺傳諮詢師一對一為您解讀報告，用您能聽懂的語言說明結果，並提供個人化的跟進建議。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-[#f6faf7] border border-[#52b788]/10"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#3a7d5a] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服務申請表單 */}
      <section className="py-16 bg-[#f7fbf7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#3a7d5a] mb-3">
              申請腫瘤基因檢測諮詢
            </h2>
            <p className="text-gray-500">
              填寫以下資訊，遺傳諮詢師將在48小時內與您聯絡，
              詳細解答您的疑問並推薦合適的檢測方案
            </p>
          </div>
          <JotformEmbed
            formId="genetic-testing"
            title="基因檢測諮詢申請表"
            description="支援家屬一鍵勾選「家族腫瘤史評估」"
            formUrl="https://form.jotform.com/261743236291053"
            extraFields={
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 w-4 h-4 text-[#3a7d5a] rounded border-gray-300 focus:ring-[#52b788]"
                  />
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">
                      🏥 我需要「家族腫瘤史評估」
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      勾選此項後，遺傳諮詢師將重點分析您的家族腫瘤聚集情況，
                      並推薦針對性的基因檢測組合
                    </p>
                  </div>
                </label>
              </div>
            }
          />
        </div>
      </section>
    </>
  );
}
