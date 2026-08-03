import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

const SERVICE_LINKS = [
  { key: "trialMatching", href: "/services/report-analysis", icon: "📊" },
  { key: "cancerCompanion", href: "/services/cancer-companion", icon: "🤝" },
  { key: "geneticTesting", href: "/services/genetic-testing", icon: "🧬" },
] as const;

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="bg-[#40916c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Cancer Link"
                width={36}
                height={36}
                className="h-9 w-auto rounded-md"
              />
              <span className="text-lg font-bold tracking-tight">Cancer Link</span>
              <span className="text-xs text-green-300 bg-white/10 px-2 py-0.5 rounded-full">
                {dict.brandSubtitle}
              </span>
            </div>
            <p className="text-sm text-green-200 leading-relaxed mb-4">{dict.slogan}</p>
            <p className="text-xs text-green-300/60">{dict.copyright}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-green-200 uppercase tracking-wider mb-4">
              {dict.servicesHeading}
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map(({ key, href, icon }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-green-200/80 hover:text-white transition-colors"
                  >
                    {icon} {dict[key as keyof typeof dict] as string}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-green-200 uppercase tracking-wider mb-4">
              {dict.contactHeading}
            </h3>
            <ul className="space-y-3 text-sm text-green-200/80">
              <li className="flex items-center gap-2">
                <span>💬</span>
                <span>{dict.whatsappLabel}85218399216276</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@cancerlink.co" className="hover:text-white transition-colors">
                  info@cancerlink.co
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>{dict.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-green-300/50">{dict.disclaimer}</p>
          <div className="flex items-center gap-4 text-xs text-green-300/50">
            <Link href="/privacy" className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{dict.terms}</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">{dict.disclaimerLink}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
