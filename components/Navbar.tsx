"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import type { Dictionary } from "@/lib/i18n";

const NAV_KEYS = ["home", "trialMatching", "geneticTesting", "news"] as const;
const NAV_HREFS: Record<string, string> = {
  home: "/",
  trialMatching: "/services/report-analysis",
  geneticTesting: "/services/genetic-testing",
  news: "/news",
};

export default function Navbar({
  dict,
}: {
  dict: Dictionary["nav"];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();

  const LANG_OPTIONS = [
    { key: "zh-HK" as const, label: "繁", full: "繁體中文" },
    { key: "zh-CN" as const, label: "简", full: "简体中文" },
    { key: "en" as const, label: "EN", full: "English" },
  ];

  const isActive = (key: string) => {
    const href = NAV_HREFS[key];
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl shadow-card border-b border-gray-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Cancer Link"
              width={40}
              height={40}
              className="h-10 w-auto rounded-lg ring-1 ring-black/5"
            />
            <span className="text-lg font-bold text-[#3a7d5a] tracking-tight hidden sm:block">
              Cancer Link
            </span>
            <span className="hidden lg:inline text-xs text-[#52b788] font-medium bg-[#e8f5e9] px-2 py-0.5 rounded-full">
              {dict.brandSubtitle}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_KEYS.map((key) => {
              const href = NAV_HREFS[key];
              const active = isActive(key);
              return (
                <Link
                  key={key}
                  href={href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#52b788]/50 focus-visible:ring-offset-2 ${
                    active
                      ? "bg-[#e8f5e9] text-[#2b5e43] shadow-sm"
                      : "text-gray-600 hover:text-[#3a7d5a] hover:bg-[#f0faf5]"
                  }`}
                >
                  {dict[key as keyof typeof dict] as string}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-0.5 bg-gray-100/80 rounded-lg p-0.5 ring-1 ring-black/3">
              {LANG_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => opt.key !== locale && setLocale(opt.key)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#52b788]/50 ${
                    opt.key === locale
                      ? "bg-white text-[#3a7d5a] shadow-sm ring-1 ring-black/5"
                      : "text-gray-500 hover:text-[#3a7d5a]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#52b788]/50"
              aria-label={dict.menuOpen}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-3">
            {NAV_KEYS.map((key) => {
              const href = NAV_HREFS[key];
              const active = isActive(key);
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-[#e8f5e9] text-[#2b5e43]"
                      : "text-gray-600 hover:bg-[#f0faf5] hover:text-[#3a7d5a]"
                  }`}
                >
                  {dict[key as keyof typeof dict] as string}
                </Link>
              );
            })}
            <div className="flex items-center gap-2 px-4 pt-3">
              {LANG_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => opt.key !== locale && setLocale(opt.key)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    opt.key === locale
                      ? "bg-[#3a7d5a] text-white"
                      : "text-gray-500 hover:text-[#3a7d5a]"
                  }`}
                >
                  {opt.full}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
