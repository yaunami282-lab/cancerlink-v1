import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import {
  ReportAnalysisIllustration,
  DoctorIllustration,
  GeneticTestingIllustration,
} from "@/components/ServiceIllustrations";

const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  "report-analysis": <ReportAnalysisIllustration />,
  consultation: <DoctorIllustration />,
  "genetic-testing": <GeneticTestingIllustration />,
};

export default function ServiceCards() {
  return (
    <section className="py-20 sm:py-28 bg-[#f7fbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a] mb-4">
            我們的核心服務
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            三大服務模組，覆蓋從臨床試驗配對到基因檢測的全方位腫瘤支援
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#52b788]/30 flex flex-col"
            >
              <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                {ILLUSTRATIONS[service.id]}
              </div>
              <h3 className="text-xl font-bold text-[#3a7d5a] mb-3 group-hover:text-[#2b5e43] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed flex-1 mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-[#52b788] font-semibold text-sm group-hover:gap-2 transition-all">
                了解更多
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
