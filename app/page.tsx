import { headers } from "next/headers";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import FAQSection from "@/components/FAQSection";
import { JsonLd, generateFAQSchema } from "@/lib/seo";
import { getDictionary, hasLocale, defaultLocale, type Locale } from "@/lib/i18n";

export default async function Home() {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <JsonLd data={generateFAQSchema(dict.faq.questions)} />
      <HeroSection dict={dict.home} />
      <ServiceCards dict={dict} />
      <FAQSection dict={dict} />
    </>
  );
}
