import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import {
  ReportAnalysisIllustration,
  GeneticTestingIllustration,
} from "@/components/ServiceIllustrations";

const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  "report-analysis": <ReportAnalysisIllustration />,
  "genetic-testing": <GeneticTestingIllustration />,
};

const SERVICE_KEYS = ["reportAnalysis", "geneticTesting"] as const;
const SERVICE_HREFS: Record<string, string> = {
  reportAnalysis: "/services/report-analysis",
  geneticTesting: "/services/genetic-testing",
};
const SERVICE_IDS: Record<string, string> = {
  reportAnalysis: "report-analysis",
  geneticTesting: "genetic-testing",
};

/* ===== SVG 箭頭圖標 ===== */
function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function ServiceCards({ dict }: { dict: Dictionary }) {
  const h = dict.home;
  const servicesDict = dict.services;

  return (
    <section className="py-20 sm:py-28 bg-[#f7fbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#52b788] font-semibold mb-3">
            Core Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a] tracking-tight mb-4">
            {h.servicesHeading}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {h.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SERVICE_KEYS.map((key) => {
            const data = servicesDict[key];
            const href = SERVICE_HREFS[key];
            const id = SERVICE_IDS[key];
            return (
              <Link
                key={key}
                href={href}
                className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover glow-border border border-gray-100 transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
              >
                {/* 插圖容器 — 加上柔光背景 */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#e8f5e9]/60 blur-2xl group-hover:bg-[#d4ede0]/80 transition-colors duration-500" />
                  </div>
                  <div className="relative group-hover:scale-105 transition-transform duration-400">
                    {ILLUSTRATIONS[id]}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#3a7d5a] tracking-tight mb-3 group-hover:text-[#2b5e43] transition-colors">
                  {data.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                  {data.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#52b788] font-semibold text-sm group-hover:gap-2.5 transition-all">
                  {h.learnMore}
                  <ArrowIcon />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
