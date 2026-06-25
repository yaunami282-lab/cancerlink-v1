import { NEWS_ARTICLES } from "@/data/news";
import NewsCard from "@/components/NewsCard";
import { JsonLd, generateMedicalWebPageSchema } from "@/lib/seo";

export const metadata = {
  title: "醫學前沿資訊 - Cancer Link 癌研連線",
  description:
    "掌握全球腫瘤醫學前沿動態。最新國際癌症治療指南、臨床研究重大突破、FDA/NMPA新藥批准、權威統計數據。",
};

const CATEGORIES = [
  { key: "all", label: "全部", icon: "📋" },
  { key: "targeted", label: "靶向藥物", icon: "💊" },
  { key: "immunotherapy", label: "免疫前沿", icon: "🛡️" },
  { key: "screening", label: "篩查指南", icon: "🔍" },
  { key: "data", label: "權威數據", icon: "📊" },
] as const;

export default function NewsPage() {
  const featured = NEWS_ARTICLES[0];
  const rest = NEWS_ARTICLES.slice(1);

  return (
    <>
      {/* ===== JSON-LD 醫學網頁結構化數據（SEO 核心） ===== */}
      <JsonLd
        data={generateMedicalWebPageSchema({
          title: "醫學前沿資訊 - Cancer Link 癌研連線",
          description:
            "掌握全球腫瘤醫學前沿動態。最新國際癌症治療指南、臨床研究重大突破、FDA/NMPA新藥批准、權威統計數據。",
          url: "/news",
        })}
      />
      {/* 頁面頭部 */}
      <section className="bg-gradient-to-br from-[#5b9e7a] via-[#52b788] to-[#40916c] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            📰 醫學前沿資訊
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            實時追蹤全球頂尖腫瘤醫學進展。每篇文章均由專業醫學編輯團隊撰寫，
            同步提供繁體中文與英文雙語對照。
          </p>
        </div>
      </section>

      {/* 分類標籤 */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  cat.key === "all"
                    ? "bg-[#e8f5e9] text-[#3a7d5a]"
                    : "text-gray-500 hover:bg-[#f6faf7] hover:text-[#3a7d5a]"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 資訊內容：左頭條 + 右列表 */}
      <section className="py-12 bg-[#f7fbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">🔥 頭條關注</h2>
              <NewsCard article={featured} variant="featured" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">📋 最新報道</h2>
              <div className="space-y-3">
                {rest.map((article) => (
                  <NewsCard key={article.slug} article={article} variant="compact" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">📚 更多文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...NEWS_ARTICLES].reverse().map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 訂閱提示 */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="text-xl font-bold text-[#3a7d5a] mb-3">📬 獲取最新醫學資訊</h3>
          <p className="text-gray-500 text-sm mb-6">
            關注我們的 WhatsApp 頻道，第一時間獲取全球腫瘤醫學前沿突破
          </p>
          <a
            href="https://wa.me/85218399216276?text=您好，我想訂閱Cancer Link醫學前沿資訊"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da84e] text-white font-medium px-6 py-3 rounded-xl transition-all duration-200"
          >
            💬 通過 WhatsApp 訂閱
          </a>
        </div>
      </section>
    </>
  );
}
