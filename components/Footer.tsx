import Link from "next/link";
import { CONFIG, SERVICES } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#40916c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 品牌資訊 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Cancer Link"
                width={36}
                height={36}
                className="h-9 w-auto rounded-md"
              />
              <span className="text-lg font-bold tracking-tight">
                Cancer Link
              </span>
              <span className="text-xs text-green-300 bg-white/10 px-2 py-0.5 rounded-full">
                癌研連線
              </span>
            </div>
            <p className="text-sm text-green-200 leading-relaxed mb-4">
              {CONFIG.slogan}
            </p>
            <p className="text-xs text-green-300/60">
              {CONFIG.copyright}
            </p>
          </div>

          {/* 服務連結 */}
          <div>
            <h3 className="text-sm font-semibold text-green-200 uppercase tracking-wider mb-4">
              核心服務
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-green-200/80 hover:text-white transition-colors"
                  >
                    {service.icon} {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡方式 */}
          <div>
            <h3 className="text-sm font-semibold text-green-200 uppercase tracking-wider mb-4">
              聯絡我們
            </h3>
            <ul className="space-y-3 text-sm text-green-200/80">
              <li className="flex items-center gap-2">
                <span>💬</span>
                <span>WhatsApp: +{CONFIG.whatsappNumber}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href={`mailto:${CONFIG.contactEmail}`} className="hover:text-white transition-colors">
                  {CONFIG.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>香港 · 瑪麗醫院臨床研究中心</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-green-300/50">
            本網站內容僅供資訊參考，不構成醫療建議。請諮詢專業醫生獲取個人化診療方案。
          </p>
          <div className="flex items-center gap-4 text-xs text-green-300/50">
            <Link href="/" className="hover:text-white transition-colors">私隱政策</Link>
            <Link href="/" className="hover:text-white transition-colors">使用條款</Link>
            <Link href="/" className="hover:text-white transition-colors">免責聲明</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
