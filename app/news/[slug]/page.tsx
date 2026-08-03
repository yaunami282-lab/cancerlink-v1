import { headers } from "next/headers";
import { NEWS_ARTICLES } from "@/data/news";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, generateMedicalArticleSchema } from "@/lib/seo";
import { getDictionary, hasLocale, defaultLocale, type Locale } from "@/lib/i18n";

const CATEGORY_STYLES: Record<string, string> = {
  targeted: "bg-blue-50 text-blue-600",
  immunotherapy: "bg-green-50 text-green-600",
  screening: "bg-purple-50 text-purple-600",
  data: "bg-orange-50 text-orange-600",
  lifestyle: "bg-orange-50 text-orange-600",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return { title: `${article.title} - Cancer Link`, description: article.summary };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);
  const n = dict.news;

  const relatedArticles = NEWS_ARTICLES.filter(
    (a) => a.slug !== slug && a.categoryKey === article.categoryKey
  ).slice(0, 2);

  const badgeStyle = CATEGORY_STYLES[article.categoryKey] ?? "bg-gray-50 text-gray-600";
  const catLabel = n.categories[article.categoryKey as keyof typeof n.categories] || article.category;

  return (
    <>
      <JsonLd data={generateMedicalArticleSchema(article)} />
      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/news" className="hover:text-white transition-colors">📰 {n.breadcrumbNews}</Link>
            <span>/</span>
            <span className={badgeStyle + " text-xs px-2 py-0.5 rounded-full"}>{catLabel}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">{article.title}</h1>
          <p className="text-white/80 text-sm sm:text-base mb-6">{article.titleEn}</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <span>📅 {article.date}</span>
            <span>📌 {n.sourceLabel}{article.source}</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#52b788]/10">
            <img src={article.imageUrl} alt={article.imageDescription} className="w-full h-auto object-cover" style={{ maxHeight: 400 }} />
          </div>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            {article.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("核心數據要點") || paragraph.startsWith("研究設計")) {
                return <h3 key={idx} className="text-lg font-bold text-[#3a7d5a] mt-8 mb-4">{paragraph}</h3>;
              }
              if (paragraph.includes("•")) {
                return (
                  <ul key={idx} className="list-none space-y-2 my-4">
                    {paragraph.split("\n").filter((line) => line.trim()).map((line, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 leading-relaxed">
                        <span className="text-[#52b788] mt-1">•</span>
                        <span>{line.replace(/^[•]?\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>
        </div>
      </article>

      <article className="py-12 bg-[#f7fbf7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">English Version</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="prose prose-gray max-w-none">
            {article.contentEn.split("\n\n").map((paragraph, idx) => {
              if (paragraph.includes("•")) {
                return (
                  <ul key={idx} className="list-none space-y-2 my-4">
                    {paragraph.split("\n").filter((line) => line.trim()).map((line, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-500 leading-relaxed text-sm">
                        <span className="text-[#52b788] mt-1">•</span>
                        <span>{line.replace(/^[•]?\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx} className="text-gray-500 leading-relaxed mb-4 text-sm">{paragraph}</p>;
            })}
          </div>
        </div>
      </article>

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">📚 {n.referenceLabel}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{article.reference}</p>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="py-12 bg-[#f7fbf7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((a) => (
                <NewsCard key={a.slug} article={a} variant="compact" dict={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-8 text-center bg-white">
        <Link href="/news" className="inline-flex items-center gap-2 text-[#52b788] hover:text-[#3a7d5a] font-medium transition-colors">
          {n.backToList}
        </Link>
      </div>
    </>
  );
}
