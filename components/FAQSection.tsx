"use client";

import { useState } from "react";
import { FAQ_DATA } from "@/data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 區域標題 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a] mb-3">
            常見疑問解答
          </h2>
          <p className="text-gray-500">
            點擊問題，查看專業解答
          </p>
        </div>

        {/* 對話式 FAQ */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                {/* 提問（可點擊折疊） */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start gap-3 group text-left"
                >
                  {/* 卡通小女孩頭像 */}
                  <div className="w-10 h-10 rounded-full bg-pink-100 border-2 border-pink-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <span className="text-xl">👧🏻</span>
                  </div>
                  {/* 問題文字 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-[#3a7d5a] transition-colors">
                        {item.emoji} {item.question}
                      </p>
                      <span
                        className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>
                  </div>
                </button>

                {/* 回答（折疊展開） */}
                {isOpen && (
                  <div className="flex items-start gap-3 mt-3 pl-2 animate-in slide-in-from-top-2 duration-200">
                    {/* 醫生頭像 */}
                    <div className="w-10 h-10 rounded-full bg-[#e8f5e9] border-2 border-[#52b788]/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <span className="text-xl">👨🏻‍⚕️</span>
                    </div>
                    {/* 回答內容 */}
                    <div className="flex-1 bg-[#f6faf7] border border-[#52b788]/15 rounded-2xl rounded-tl-sm px-5 py-4">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 底部 CTA */}
        <div className="text-center mt-14 p-8 bg-[#f6faf7] rounded-2xl border border-[#52b788]/15">
          <p className="text-lg font-semibold text-[#3a7d5a] mb-2">
            還有更多疑問？
          </p>
          <p className="text-gray-500 mb-5 text-sm">
            我們的醫學顧問團隊樂意為您提供一對一免費諮詢
          </p>
          <a
            href="https://wa.me/85218399216276?text=您好，我有關於Cancer Link服務的疑問想諮詢"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da84e] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            💬 立即在線諮詢
          </a>
        </div>
      </div>
    </section>
  );
}
