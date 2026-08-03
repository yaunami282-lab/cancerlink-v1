import { headers } from "next/headers";
import { TRIALS } from "@/data/trials";
import TrialCard from "@/components/TrialCard";
import ReportAnalysisForm from "@/components/ReportAnalysisForm";
import { getDictionary, hasLocale, defaultLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata() {
  try {
    const h = await headers();
    const raw = h.get("x-locale") || defaultLocale;
    const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
    const dict = await getDictionary(locale);
    const s = dict.services.reportAnalysis;
    return { title: s.pageTitle, description: s.pageDesc };
  } catch { return { title: "Report Analysis", description: "" }; }
}

export default async function ReportAnalysisPage() {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);
  const s = dict.services.reportAnalysis;

  return (
    <>
      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{s.heroHeading}</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">{s.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-12">{s.processHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {s.processSteps.map((item: { icon: string; title: string; desc: string }, i: number) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="w-8 h-8 rounded-full bg-[#52b788] text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">{i + 1}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7fbf7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#3a7d5a] mb-3">{s.formHeading}</h2>
            <p className="text-gray-500">{s.formSubtitle}</p>
          </div>
          <ReportAnalysisForm title={s.formTitle} description={s.formDesc} dict={dict.form} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#3a7d5a] mb-3">{s.trialsHeading}</h2>
            <p className="text-gray-500">{s.trialsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRIALS.map((trial) => (
              <TrialCard key={trial.id} trial={trial} dict={dict.trials} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
