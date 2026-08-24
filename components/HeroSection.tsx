import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

export default function HeroSection({ dict }: { dict: Dictionary["home"] }) {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px] max-h-[700px] overflow-hidden">
      <Image
        src="/images/cover.jpg"
        alt="Cancer Link"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* 更豐富的徑向漸層覆蓋 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.15) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 z-10 pb-16 sm:pb-20">
        <div className="text-center px-4 max-w-2xl mx-auto">
          <p className="text-white/60 text-xs sm:text-sm tracking-[0.28em] uppercase mb-5 font-medium">
            {dict.heroSubtitleEn}
          </p>
          <h1 className="mb-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
            <span className="block">{dict.heroTitle}</span>
            <span className="block mt-1">{dict.heroSubtitle}</span>
          </h1>

          {/* 裝飾分隔線 */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 bg-white/25" />
            <span className="block h-1 w-1 rounded-full bg-white/50" />
            <span className="block h-px w-10 bg-white/25" />
          </div>

          {/* CTA 亮點徽章 — 毛玻璃 + 呼吸光暈 */}
          <div
            className="inline-block bg-white/12 backdrop-blur-xl border border-white/20 text-white px-5 py-3 rounded-2xl mb-6"
            style={{ animation: "badge-glow 3s ease-in-out infinite" }}
          >
            <p className="text-sm sm:text-base font-semibold flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.4 7.2L22 9l-5.6 4.4 1.8 7.6L12 17l-6.2 4 1.8-7.6L2 9l7.6.2z" fill="currentColor" />
              </svg>
              {dict.ctaHighlight}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/services/report-analysis"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#3a7d5a] font-bold text-base px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>{dict.ctaButton}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
