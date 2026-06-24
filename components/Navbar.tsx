"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Cancer Link"
              width={40}
              height={40}
              className="h-10 w-auto rounded-lg"
            />
            <span className="text-lg font-bold text-[#3a7d5a] tracking-tight hidden sm:block">
              Cancer Link
            </span>
            <span className="hidden lg:inline text-xs text-[#52b788] font-medium bg-[#e8f5e9] px-2 py-0.5 rounded-full">
              癌研連線
            </span>
          </Link>

          {/* PC 端導航 */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#e8f5e9] text-[#2b5e43]"
                      : "text-gray-600 hover:text-[#3a7d5a] hover:bg-[#f0faf5]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 語言切換 + 手機選單 */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-0.5 bg-gray-100 rounded-lg p-0.5">
              <button className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-[#3a7d5a] shadow-sm">
                繁
              </button>
              <button className="px-2.5 py-1 rounded-md text-xs font-medium text-gray-500 hover:text-[#3a7d5a] transition-colors">
                EN
              </button>
            </div>

            {/* 手機漢堡選單 */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="開啟選單"
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

        {/* 手機展開選單 */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-3">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#e8f5e9] text-[#2b5e43]"
                      : "text-gray-600 hover:bg-[#f0faf5] hover:text-[#3a7d5a]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-2 px-4 pt-3">
              <button className="px-3 py-1.5 rounded-md text-xs font-medium bg-[#3a7d5a] text-white">
                繁體中文
              </button>
              <button className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500">
                English
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
