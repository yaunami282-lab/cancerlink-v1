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
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/50" />
      <div className="absolute inset-x-0 bottom-0 z-10 pb-16 sm:pb-20">
        <div className="text-center px-4 max-w-2xl mx-auto">
          <p className="text-white/55 text-xs sm:text-sm tracking-[0.25em] uppercase mb-5 font-medium">
            {dict.heroSubtitleEn}
          </p>
          <h1 className="mb-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-snug tracking-[0.04em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            <span className="block">{dict.heroTitle}</span>
            <span className="block">{dict.heroSubtitle}</span>
          </h1>
          <div className="inline-block bg-white/15 backdrop-blur-md border border-white/25 text-white px-5 py-3 rounded-2xl mb-6">
            <p className="text-sm sm:text-base font-semibold">
              ✨ {dict.ctaHighlight}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/services/report-analysis"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#3a7d5a] font-bold text-base px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>📋</span>
              <span>{dict.ctaButton}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
