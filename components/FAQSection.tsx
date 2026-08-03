"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

export default function FAQSection({ dict: fullDict }: { dict: Dictionary }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const h = fullDict.home;
  const faqData = fullDict.faq.questions;

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a] mb-3">
            {h.faqHeading}
          </h2>
          <p className="text-gray-500">{h.faqSubtitle}</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item: { q: string; a: string }, idx: number) => {
            const isOpen = openId === idx;
            return (
              <div key={idx}>
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start gap-3 group text-left"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-[#3a7d5a] transition-colors">
                        {item.q}
                      </p>
                      <span className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}>▼</span>
                    </div>
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-3 pl-2">
                    <div className="bg-[#f6faf7] border border-[#52b788]/15 rounded-2xl px-5 py-4">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14 p-8 bg-[#f6faf7] rounded-2xl border border-[#52b788]/15">
          <p className="text-lg font-semibold text-[#3a7d5a] mb-2">{h.faqCtaHeading}</p>
          <p className="text-gray-500 mb-5 text-sm">{h.faqCtaDesc}</p>
          <a
            href="https://wa.me/85218399216276?text=您好，我有關於Cancer Link服務的疑問想諮詢"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da84e] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            💬 {h.faqCtaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
