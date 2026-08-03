import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, hasLocale } from "./lib/i18n";

export function proxy(request: NextRequest) {
  const cookie = request.cookies.get("locale")?.value;
  const locale = cookie && hasLocale(cookie) ? cookie : null;

  const response = NextResponse.next();

  if (locale) {
    response.headers.set("x-locale", locale);
  } else {
    // Detect from Accept-Language
    const acceptLang = request.headers.get("accept-language") || "";
    let detected: string | null = null;

    if (acceptLang.includes("zh-HK") || acceptLang.includes("zh-hk")) {
      detected = "zh-HK";
    } else if (acceptLang.includes("zh-CN") || acceptLang.includes("zh-cn") || acceptLang.includes("zh-SG") || acceptLang.includes("zh-sg")) {
      detected = "zh-CN";
    } else if (acceptLang.includes("zh")) {
      detected = "zh-HK"; // fallback for generic zh
    } else if (acceptLang.includes("en")) {
      detected = "en";
    }

    const final = detected && hasLocale(detected) ? detected : defaultLocale;
    response.headers.set("x-locale", final);
    response.cookies.set("locale", final, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|.*\\.svg|.*\\.png).*)"],
};
