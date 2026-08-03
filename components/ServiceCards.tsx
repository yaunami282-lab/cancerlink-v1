import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import {
  ReportAnalysisIllustration,
  CancerCompanionIllustration,
  GeneticTestingIllustration,
} from "@/components/ServiceIllustrations";

const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  "report-analysis": <ReportAnalysisIllustration />,
  "cancer-companion": <CancerCompanionIllustration />,
  "genetic-testing": <GeneticTestingIllustration />,
};

const SERVICE_KEYS = ["reportAnalysis", "cancerCompanion", "geneticTesting"] as const;
const SERVICE_HREFS: Record<string, string> = {
  reportAnalysis: "/services/report-analysis",
  cancerCompanion: "/services/cancer-companion",
  geneticTesting: "/services/genetic-testing",
};
const SERVICE_IDS: Record<string, string> = {
  reportAnalysis: "report-analysis",
  cancerCompanion: "cancer-companion",
  geneticTesting: "genetic-testing",
};

export default function ServiceCards({ dict }: { dict: Dictionary }) {
  const h = dict.home;
  const servicesDict = dict.services;

  return (
    <section className="py-20 sm:py-28 bg-[#f7fbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a] mb-4">
            {h.servicesHeading}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {h.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_KEYS.map((key) => {
            const data = servicesDict[key];
            const href = SERVICE_HREFS[key];
            const id = SERVICE_IDS[key];
            return (
              <Link
                key={key}
                href={href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#52b788]/30 flex flex-col"
              >
                <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                  {ILLUSTRATIONS[id]}
                </div>
                <h3 className="text-xl font-bold text-[#3a7d5a] mb-3 group-hover:text-[#2b5e43] transition-colors">
                  {data.title}
                </h3>
                <p className="text-gray-500 leading-relaxed flex-1 mb-6">
                  {data.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#52b788] font-semibold text-sm group-hover:gap-2 transition-all">
                  {h.learnMore}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
