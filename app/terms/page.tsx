import { headers } from "next/headers";
import { getDictionary, hasLocale, defaultLocale } from "@/lib/i18n";

export async function generateMetadata() {
  try {
    const h = await headers();
    const raw = h.get("x-locale") || defaultLocale;
    const dict = await getDictionary(hasLocale(raw) ? raw : defaultLocale);
    return { title: dict.terms.pageTitle, description: dict.terms.pageDesc };
  } catch { return { title: "Terms", description: "" }; }
}

export default async function TermsPage() {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const dict = await getDictionary(hasLocale(raw) ? raw : defaultLocale);
  const p = dict.terms;
  const s = p.sections;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a]">{p.heading}</h1>
        </div>
        <div className="prose prose-green max-w-none">
          <Sec title={s.service.title}>
            <p>{s.service.intro}</p>
            <ul>{s.service.items.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul>
          </Sec>
          <Sec title={s.user.title}>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{s.user.qualificationTitle}</h3>
            <ul>{s.user.qualificationItems.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">{s.user.obligationTitle}</h3>
            <ul>{s.user.obligationItems.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul>
          </Sec>
          <Sec title={s.trial.title}>
            <div className="bg-[#f6faf7] border border-[#52b788]/30 rounded-xl p-6 mb-6">
              <p className="text-[#3a7d5a] font-semibold mb-3">{s.trial.importantTitle}</p>
              <ul>{s.trial.importantItems.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul>
            </div>
            <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl p-6">
              <p className="text-[#d97706] font-semibold mb-3">{s.trial.costTitle}</p>
              <p className="text-gray-700 leading-relaxed">{s.trial.costContent}</p>
            </div>
          </Sec>
          <Sec title={s.medical.title}>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <p className="text-red-800 font-semibold mb-3">{s.medical.warningTitle}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{s.medical.warningContent1}</p>
              <p className="text-gray-700 leading-relaxed">{s.medical.warningContent2}</p>
            </div>
          </Sec>
          <Sec title={s.ip.title}><p>{s.ip.content}</p></Sec>
          <Sec title={s.changes.title}><p>{s.changes.content}</p></Sec>
          <Sec title={s.liability.title}>
            <p>{s.liability.intro}</p>
            <ul>{s.liability.items.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul>
          </Sec>
          <Sec title={s.indemnity.title}><p>{s.indemnity.content}</p></Sec>
          <Sec title={s.disputes.title}><p>{s.disputes.content}</p></Sec>
          <Sec title={s.updates.title}><p>{s.updates.content}</p></Sec>
          <Sec title={s.contact.title}>
            <div className="bg-[#f6faf7] border border-[#52b788]/30 rounded-xl p-6">
              <p className="text-[#3a7d5a] font-semibold mb-2">{s.contact.emailLabel}</p>
              <a href="mailto:info@cancerlink.co" className="text-gray-600 hover:text-[#3a7d5a]">info@cancerlink.co</a>
            </div>
          </Sec>
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
