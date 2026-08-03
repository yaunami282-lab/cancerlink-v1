"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

const LOCALE_COOKIE = "locale";

function getCookieLocale(): Locale {
  if (typeof document === "undefined") return "zh-HK";
  const match = document.cookie.match(/(?:^|;\s*)locale=([^;]*)/);
  return (match?.[1] as Locale) || "zh-HK";
}

function setCookieLocale(locale: Locale) {
  document.cookie = `locale=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "zh-HK",
  setLocale: () => {},
});

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const cookie = getCookieLocale();
    if (cookie && cookie !== locale) {
      setLocaleState(cookie);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setCookieLocale(newLocale);
    // Reload to apply translations server-side
    window.location.reload();
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
