import { headers } from "next/headers";
import { getDictionary, hasLocale, defaultLocale } from "@/lib/i18n";

export async function generateMetadata() {
  try {
    const h = await headers();
    const raw = h.get("x-locale") || defaultLocale;
    const dict = await getDictionary(hasLocale(raw) ? raw : defaultLocale);
    return { title: dict.disclaimer.pageTitle, description: dict.disclaimer.pageDesc };
  } catch { return { title: "Disclaimer", description: "" }; }
}

export default async function DisclaimerPage() {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const dict = await getDictionary(hasLocale(raw) ? raw : defaultLocale);
  const p = dict.disclaimer;
  const s = p.sections;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a]">{p.heading}</h1>
        </div>
        <div className="prose prose-green max-w-none">
          <Sec title={s.medical.title}>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <p className="text-red-800 font-semibold mb-3">{s.medical.warning}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{s.medical.content1}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{s.medical.content2}</p>
              <p className="text-gray-700 leading-relaxed font-semibold">{s.medical.content3}</p>
            </div>
          </Sec>
          <Sec title={s.trial.title}>
            <p>{s.trial.content1}</p>
            <p>{s.trial.content2}</p>
          </Sec>
          <Sec title={s.info.title}>
            <p>{s.info.content1}</p>
            <p>{s.info.content2}</p>
          </Sec>
          <Sec title={s.thirdParty.title}>
            <p>{s.thirdParty.content1}</p>
            <p>{s.thirdParty.content2}</p>
          </Sec>
          <Sec title={s.liability.title}>
            <p>{s.liability.intro}</p>
            <ul>{s.liability.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </Sec>
          <Sec title={s.advice.title}>
            <p>{s.advice.content1}</p>
            <ul>{s.advice.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <p>{s.advice.content2}</p>
          </Sec>
          <Sec title={s.intellectual.title}>
            <p>{s.intellectual.content1}</p>
            <p>{s.intellectual.content2}</p>
          </Sec>
          <Sec title={s.update.title}><p>{s.update.content}</p></Sec>
        </div>
      </div>
    </section>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
