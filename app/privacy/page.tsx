import { headers } from "next/headers";
import { getDictionary, hasLocale, defaultLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata() {
  try {
    const h = await headers();
    const raw = h.get("x-locale") || defaultLocale;
    const dict = await getDictionary(hasLocale(raw) ? raw : defaultLocale);
    return { title: dict.privacy.pageTitle, description: dict.privacy.pageDesc };
  } catch { return { title: "Privacy Policy", description: "" }; }
}

export default async function PrivacyPage() {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const dict = await getDictionary(hasLocale(raw) ? raw : defaultLocale);
  const p = dict.privacy;
  const s = p.sections;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3a7d5a]">{p.heading}</h1>
          <p className="text-sm text-gray-400 mt-3">{p.lastUpdated}</p>
        </div>
        <div className="prose prose-green max-w-none">
          <p className="text-gray-600 leading-relaxed mb-8">{p.intro}</p>

          <Section title={s.collection.title}>
            <p>{s.collection.intro}</p>
            <ul>{s.collection.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <p className="font-semibold mt-4">{s.collection.dataTypesTitle}</p>
            <ul>{s.collection.dataTypes.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </Section>

          <Section title={s.usage.title}>
            <p>{s.usage.intro}</p>
            <ul>{s.usage.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </Section>

          <Section title={s.sharing.title}>
            <p>{s.sharing.intro}</p>
            <ul>{s.sharing.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </Section>

          <Section title={s.security.title}>
            <p>{s.security.intro}</p>
            <ul>{s.security.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <p className="text-sm text-gray-500 italic">{s.security.disclaimer}</p>
          </Section>

          <Section title={s.retention.title}><p>{s.retention.content}</p></Section>

          <Section title={s.rights.title}>
            <p>{s.rights.intro}</p>
            <ul>{s.rights.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </Section>

          <Section title={s.cookies.title}>
            <p>{s.cookies.intro}</p>
            <p>{s.cookies.types.essential}</p>
            <p>{s.cookies.types.analytics}</p>
            <p>{s.cookies.types.preferences}</p>
            <p>{s.cookies.types.control}</p>
          </Section>

          <Section title={s.children.title}><p>{s.children.content}</p></Section>
          <Section title={s.thirdParty.title}><p>{s.thirdParty.content}</p></Section>
          <Section title={s.updates.title}><p>{s.updates.content}</p></Section>

          <Section title={s.contact.title}>
            <p>{s.contact.content}</p>
            <p className="font-semibold mt-3">{s.contact.emailLabel} <a href="mailto:info@cancerlink.co" className="text-[#3a7d5a]">info@cancerlink.co</a></p>
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
