"use client";

import { useState, useRef, useEffect } from "react";
import type { Dictionary } from "@/lib/i18n";

/* ===== SVG 箭頭 ===== */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-gray-400 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180 text-[#52b788]" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FAQSection({ dict: fullDict }: { dict: Dictionary }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const h = fullDict.home;
  const faqData = fullDict.faq.questions;

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#52b788] font-semibold mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a] tracking-tight mb-3">
            {h.faqHeading}
          </h2>
          <p className="text-gray-500">{h.faqSubtitle}</p>
        </div>

        <div className="space-y-3">
          {faqData.map((item: { q: string; a: string }, idx: number) => {
            const isOpen = openId === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center gap-3 text-left px-5 py-4 sm:px-6 sm:py-5 group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className={`text-sm sm:text-base font-medium transition-colors duration-300 ${isOpen ? "text-[#3a7d5a]" : "text-gray-800 group-hover:text-[#3a7d5a]"}`}>
                        {item.q}
                      </span>
                    </div>
                  </div>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className={`faq-answer-enter ${isOpen ? "faq-answer-open" : ""}`}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                    <div className="bg-[#f6faf7] border border-[#52b788]/12 rounded-xl px-5 py-4">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
