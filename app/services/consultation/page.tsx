import { DOCTORS } from "@/data/doctors";
import JotformEmbed from "@/components/JotformEmbed";
import { CONFIG } from "@/lib/constants";

export const metadata = {
  title: "預約諮詢腫瘤醫生 - Cancer Link 臨床連線",
  description: "匯聚頂尖三甲醫院腫瘤專家，提供免費初步問診評估。讓專業醫生為您的治療路徑把關。",
};

export default function ConsultationPage() {
  return (
    <>
      {/* 頁面頭部 */}
      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            👨‍⚕️ 預約諮詢腫瘤醫生
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            匯聚香港頂尖三甲醫院腫瘤專家，提供免費初步問診評估。
            我們的醫生團隊覆蓋肺癌、乳腺癌、肝癌、胃腸腫瘤等多個專業領域。
          </p>
        </div>
      </section>

      {/* 醫生列表 */}
      <section className="py-16 bg-[#f7fbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-4">我們的專家團隊</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            每位醫生均經過嚴格篩選，具備三甲醫院執業背景與豐富的國際臨床研究經驗
          </p>

          <div className="space-y-8">
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-[#52b788] to-[#3a7d5a] flex items-center justify-center text-white text-6xl mx-auto sm:mx-0">
                      👨‍⚕️
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#3a7d5a]">{doctor.name}</h3>
                        <p className="text-sm text-gray-400">{doctor.nameEn}</p>
                      </div>
                      <span className="bg-[#e8f5e9] text-[#3a7d5a] text-xs font-medium px-3 py-1 rounded-full border border-[#52b788]/30">
                        {doctor.title}
                      </span>
                    </div>
                    <div className="mb-3 space-y-1">
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">🏥 執業機構：</span>{doctor.hospital}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">📅 執業經驗：</span>{doctor.experience}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">🎓 教育背景：</span>{doctor.education}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {doctor.specialties.map((spec) => (
                        <span key={spec} className="bg-[#e8f5e9] text-[#3a7d5a] text-xs font-medium px-3 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-gray-400">語言：</span>
                      {doctor.languages.map((lang) => (
                        <span key={lang} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{lang}</span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(doctor.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da84e] text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg"
                    >
                      💬 預約 {doctor.name.split(" ")[0]} 免費問診
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 問診申請表單 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#3a7d5a] mb-3">提交免費問診申請</h2>
            <p className="text-gray-500">填寫以下資訊，我們會根據您的病情配對最合適的專家，並在1-2個工作日內安排問診</p>
          </div>
          <JotformEmbed formId="consultation" title="免費問診申請表" description="請提供您當前的病歷核心摘要" />
        </div>
      </section>
    </>
  );
}
