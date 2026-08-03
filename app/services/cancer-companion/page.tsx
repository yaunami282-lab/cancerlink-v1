import { headers } from "next/headers";
import ServiceForm from "@/components/ServiceForm";
import { getDictionary, hasLocale, defaultLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata() {
  try {
    const h = await headers();
    const raw = h.get("x-locale") || defaultLocale;
    const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
    const dict = await getDictionary(locale);
    const s = dict.services.cancerCompanion;
    return { title: s.pageTitle, description: s.pageDesc };
  } catch { return { title: "Cancer Companion", description: "" }; }
}

export default async function CancerCompanionPage() {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);
  const s = dict.services.cancerCompanion;

  return (
    <>
      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{s.heroHeading}</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">{s.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f7fbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-4">{s.pillarsHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {s.pillars.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#3a7d5a] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-4">{s.teamHeading}</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">{s.teamSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {s.teamMembers.map((item) => (
              <div key={item.title} className="bg-[#f6faf7] rounded-2xl p-8 text-center border border-[#52b788]/10 hover:shadow-md transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#3a7d5a] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7fbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-4">{s.journeyHeading}</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">{s.journeySubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {s.journeyStages.map((item, i) => (
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-4">{s.suitabilityHeading}</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">{s.suitabilitySubtitle}</p>
          <div className="space-y-3">
            {s.suitabilityItems.map((text, i) => (
              <div key={i} className="bg-[#f6faf7] rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all duration-200">
                <div className="w-6 h-6 rounded-full bg-[#52b788] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                <p className="text-gray-700 leading-relaxed">{text}</p>
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
          <ServiceForm serviceType="cancer-companion" title={s.formTitle} description={s.formDesc} dict={dict.form} />
        </div>
      </section>
    </>
  );
}
