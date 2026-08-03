import { headers } from "next/headers";
import ServiceForm from "@/components/ServiceForm";
import { getDictionary, hasLocale, defaultLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata() {
  try {
    const h = await headers();
    const raw = h.get("x-locale") || defaultLocale;
    const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
    const dict = await getDictionary(locale);
    const s = dict.services.geneticTesting;
    return { title: s.pageTitle, description: s.pageDesc };
  } catch { return { title: "Genetic Testing", description: "" }; }
}

export default async function GeneticTestingPage() {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);
  const s = dict.services.geneticTesting;

  return (
    <>
      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{s.heroHeading}</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">{s.heroSubtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#e8f5e9] to-[#f0faf5] rounded-3xl p-8 sm:p-12 text-center border border-[#52b788]/20">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a7d5a] mb-4">{s.coreValueHeading}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{s.coreValueDesc}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7fbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-12">{s.whoHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.whoItems.map((item: { icon: string; title: string; desc: string }) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#3a7d5a] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#3a7d5a] text-center mb-12">{s.processHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {s.processSteps.map((item: { icon: string; title: string; desc: string }) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-[#f6faf7] border border-[#52b788]/10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#3a7d5a] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
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
          <ServiceForm
            serviceType="genetic-testing"
            title={s.formTitle}
            description={s.formDesc}
            dict={dict.form}
          />
        </div>
      </section>
    </>
  );
}
