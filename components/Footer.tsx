import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

/* ===== SVG 圖標 ===== */
function IconTrial() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
function IconDNA() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6c0 2.5 4 3.5 8 3.5s8-1 8-3.5" />
      <path d="M4 12c0 2.5 4 3.5 8 3.5s8-1 8-3.5" />
      <path d="M4 18c0 2.5 4 3.5 8 3.5s8-1 8-3.5" />
      <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const SERVICE_LINKS = [
  { key: "trialMatching", href: "/services/report-analysis", Icon: IconTrial },
  { key: "geneticTesting", href: "/services/genetic-testing", Icon: IconDNA },
] as const;

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="bg-[#2b5e43] text-white bg-footer-pattern">
      {/* 頂部細微裝飾線 */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 品牌欄 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Cancer Link"
                width={36}
                height={36}
                className="h-9 w-auto rounded-md ring-1 ring-white/15"
              />
              <span className="text-lg font-bold tracking-tight">Cancer Link</span>
              <span className="text-xs text-green-200 bg-white/10 px-2 py-0.5 rounded-full">
                {dict.brandSubtitle}
              </span>
            </div>
            <p className="text-sm text-green-200/80 leading-relaxed mb-4">{dict.slogan}</p>
            <p className="text-xs text-green-300/50">{dict.copyright}</p>
          </div>

          {/* 服務欄 */}
          <div>
            <h3 className="text-sm font-semibold text-green-200 uppercase tracking-wider mb-4">
              {dict.servicesHeading}
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map(({ key, href, Icon }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2.5 text-sm text-green-200/80 hover:text-white transition-colors link-underline"
                  >
                    <Icon />
                    <span>{dict[key as keyof typeof dict] as string}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡欄 */}
          <div>
            <h3 className="text-sm font-semibold text-green-200 uppercase tracking-wider mb-4">
              {dict.contactHeading}
            </h3>
            <ul className="space-y-3 text-sm text-green-200/80">
              <li className="flex items-center gap-2.5">
                <IconMail />
                <a href="mailto:info@cancerlink.co" className="hover:text-white transition-colors link-underline">
                  info@cancerlink.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-green-300/40">{dict.disclaimer}</p>
          <div className="flex items-center gap-4 text-xs text-green-300/40">
            <Link href="/privacy" className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{dict.terms}</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">{dict.disclaimerLink}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
