import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { LocaleProvider } from "@/components/LocaleProvider";
import {
  JsonLd,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo";
import { getDictionary, hasLocale, defaultLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const h = await headers();
    const raw = h.get("x-locale") || defaultLocale;
    const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
    const dict = await getDictionary(locale);

    return {
      title: {
        default: dict.seo.siteTitle,
        template: `%s - Cancer Link`,
      },
      description: dict.seo.siteDescription,
      keywords: dict.seo.keywords.split(","),
      authors: [{ name: "Cancer Link" }],
      metadataBase: new URL("https://www.cancerlink.co"),
      alternates: { canonical: "/" },
      openGraph: {
        title: dict.seo.ogTitle,
        description: dict.seo.ogDescription,
        type: "website",
        locale: locale === "zh-CN" ? "zh_CN" : locale === "en" ? "en_US" : "zh_HK",
        siteName: dict.config.siteName,
      },
      twitter: {
        card: "summary_large_image" as const,
        title: dict.seo.ogTitle,
        description: dict.seo.ogDescription,
      },
      robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large" as const,
        "max-video-preview": -1,
      },
    };
  } catch {
    return {
      title: { default: "Cancer Link", template: "%s - Cancer Link" },
      description: "",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const h = await headers();
  const raw = h.get("x-locale") || defaultLocale;
  const locale: Locale = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);

  const htmlLang = locale === "zh-HK" ? "zh-HK" : locale === "zh-CN" ? "zh-CN" : "en";

  return (
    <html lang={htmlLang} className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f7fbf7] text-gray-900 antialiased">
        <LocaleProvider initialLocale={locale}>
          <Navbar dict={dict.nav} />
          <main className="flex-1">{children}</main>
          <Footer dict={dict.footer} />
          <WhatsAppWidget dict={dict.whatsapp} config={dict.config} />
          <JsonLd data={generateOrganizationSchema()} />
          <JsonLd data={generateWebSiteSchema()} />
        </LocaleProvider>
      </body>
    </html>
  );
}
