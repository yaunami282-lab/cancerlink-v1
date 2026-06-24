import Image from "next/image";
import Link from "next/link";
import { CONFIG } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px] max-h-[700px] overflow-hidden">
      {/* 封面圖背景 */}
      <Image
        src="/images/cover.jpg"
        alt="Cancer Link 臨床連線"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* 柔焦遮罩：上方暗、中間透、下方漸暗 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/50" />

      {/* 文字在下半部，避開人物面部 */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-16 sm:pb-20">
        <div className="text-center px-4 max-w-2xl mx-auto">
          {/* 英文標語 */}
          <p className="text-white/55 text-xs sm:text-sm tracking-[0.25em] uppercase mb-5 font-medium">
            {CONFIG.sloganEn}
          </p>

          {/* 中文標語：拆兩行 */}
          <h1 className="mb-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-snug tracking-[0.04em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            <span className="block">癌研連線</span>
            <span className="block">讓患者連結希望</span>
          </h1>

          {/* 黃金廣告位 */}
          <div className="inline-block bg-white/15 backdrop-blur-md border border-white/25 text-white px-5 py-3 rounded-2xl mb-6">
            <p className="text-sm sm:text-base font-semibold">
              ✨ {CONFIG.ctaHighlight}
            </p>
          </div>

          {/* CTA 按鈕 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/services/report-analysis"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#3a7d5a] font-bold text-base px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>📋</span>
              <span>{CONFIG.ctaButton}</span>
            </Link>
            <Link
              href="/services/consultation"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/25 text-white font-semibold text-base px-7 py-3.5 rounded-2xl transition-all duration-300"
            >
              <span>👨‍⚕️</span>
              <span>預約醫生諮詢</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
