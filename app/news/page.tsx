import { headers } from "next/headers";
import { NEWS_ARTICLES } from "@/data/news";
import NewsCard from "@/components/NewsCard";
import { JsonLd, generateMedicalWebPageSchema } from "@/lib/seo";
import { getDictionary, hasLocale, defaultLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata() {
  try {
    const h = await headers();
    const raw = h.get("x-locale") || defaultLocale;
    const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
    const dict = await getDictionary(locale);
    return { title: dict.news.pageTitle, description: dict.news.pageDesc };
  } catch { return { title: "News", description: "" }; }
}

const CAT_KEYS = ["all", "immunotherapy", "targetedTherapy", "screening", "lifestyle"] as const;
const CAT_ICONS: Record<string, string> = { all: "📋", immunotherapy: "🛡️", targetedTherapy: "💊", screening: "🔍", lifestyle: "🌿" };

export default async function NewsPage() {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);
  const n = dict.news;

  const featured = NEWS_ARTICLES[0];
  const latestThree = NEWS_ARTICLES.slice(1, 4);
  const moreArticles = NEWS_ARTICLES.slice(4);

  return (
    <>
      <JsonLd data={generateMedicalWebPageSchema({ title: n.pageTitle, description: n.pageDesc, url: "/news" })} />

      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{n.heroHeading}</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">{n.heroSubtitle}</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {CAT_KEYS.map((key) => {
              const label = key === "all" ? n.categoryAll : n.categories[key];
              const icon = CAT_ICONS[key] || "📄";
              return (
                <button key={key} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${key === "all" ? "bg-[#e8f5e9] text-[#3a7d5a]" : "text-gray-500 hover:bg-[#f6faf7] hover:text-[#3a7d5a]"}`}>
                  {icon} {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#f7fbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">🔥 {n.headline}</h2>
              <NewsCard article={featured} variant="featured" dict={n} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">📋 {n.latest}</h2>
              <div className="space-y-3">
                {latestThree.map((article) => (
                  <NewsCard key={article.slug} article={article} variant="compact" dict={n} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreArticles.map((article) => (
                <NewsCard key={article.slug} article={article} dict={n} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
