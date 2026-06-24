import Link from "next/link";
import { NewsArticle } from "@/data/news";

const CATEGORY_STYLES: Record<string, string> = {
  targeted: "bg-blue-50 text-blue-600",
  immunotherapy: "bg-green-50 text-green-600",
  screening: "bg-purple-50 text-purple-600",
  data: "bg-orange-50 text-orange-600",
};

const CATEGORY_ICONS: Record<string, string> = {
  targeted: "💊",
  immunotherapy: "🛡️",
  screening: "🔍",
  data: "📊",
};

export default function NewsCard({
  article,
  variant = "default",
}: {
  article: NewsArticle;
  variant?: "default" | "featured" | "compact";
}) {
  const badgeStyle = CATEGORY_STYLES[article.categoryKey] ?? "bg-gray-50 text-gray-600";
  const icon = CATEGORY_ICONS[article.categoryKey] ?? "📄";

  if (variant === "featured") {
    return (
      <Link
        href={`/news/${article.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="bg-gradient-to-br from-[#5b9e7a] to-[#52b788] h-52 flex items-center justify-center relative overflow-hidden">
          <span className="text-6xl opacity-30">🔬</span>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
            <span className={`${badgeStyle} text-xs font-semibold px-2.5 py-1 rounded-full`}>
              {icon} {article.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#3a7d5a] transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{article.summary}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{article.date}</span>
            <span className="text-xs text-[#52b788] font-medium">來源: {article.source}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/news/${article.slug}`}
        className="group flex gap-4 p-4 bg-white rounded-xl hover:bg-[#f6faf7] transition-colors border border-gray-50"
      >
        <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-[#e8f5e9] to-[#f0faf5] flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <span className={`${badgeStyle} text-xs font-medium px-2 py-0.5 rounded-full inline-block mb-1`}>
            {article.category}
          </span>
          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#3a7d5a] transition-colors line-clamp-2">
            {article.title}
          </h4>
          <p className="text-xs text-gray-400 mt-1">{article.date}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="bg-gradient-to-br from-[#e8f5e9] to-[#f0faf5] h-40 flex items-center justify-center">
        <span className="text-5xl opacity-40">{icon}</span>
      </div>
      <div className="p-5">
        <span className={`${badgeStyle} text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-3`}>
          {icon} {article.category}
        </span>
        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#3a7d5a] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{article.summary}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{article.date}</span>
          <span className="text-xs text-[#52b788] group-hover:translate-x-1 transition-transform">
            閱讀全文 →
          </span>
        </div>
      </div>
    </Link>
  );
}
