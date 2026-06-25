import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import FAQSection from "@/components/FAQSection";
import { FAQ_DATA } from "@/data/faq";
import { JsonLd, generateFAQSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      {/* ===== JSON-LD FAQ 結構化數據（SEO 核心） ===== */}
      <JsonLd data={generateFAQSchema(FAQ_DATA)} />
      <HeroSection />
      <ServiceCards />
      <FAQSection />
    </>
  );
}
