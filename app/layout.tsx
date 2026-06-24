import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import {
  JsonLd,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Cancer Link 臨床連線 - 腫瘤臨床研究配對與患者支援平台",
    template: "%s - Cancer Link 臨床連線",
  },
  description:
    "AI驅動的腫瘤臨床試驗精準配對平台，連結每一位癌症患者奔赴希望。免費臨床試驗配對、腫瘤醫生預約、基因檢測諮詢。一旦患者成功配對入組，所有試驗相關治療費用全免！",
  keywords: [
    "腫瘤臨床試驗",
    "癌症臨床研究",
    "臨床試驗配對",
    "腫瘤醫生預約",
    "基因檢測",
    "癌症治療",
    "Cancer Link",
    "臨床連線",
  ],
  authors: [{ name: "Cancer Link 臨床連線" }],
  metadataBase: new URL("https://www.cancerlink.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cancer Link 臨床連線 - 連結患者，奔赴希望",
    description:
      "AI驅動的腫瘤臨床試驗配對與患者綜合支援平台。一旦患者成功配對入組，所有試驗相關治療費用全免！",
    type: "website",
    locale: "zh_HK",
    siteName: "Cancer Link 臨床連線",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancer Link 臨床連線 - 連結患者，奔赴希望",
    description:
      "AI驅動的腫瘤臨床試驗配對與患者綜合支援平台。一旦患者成功配對入組，所有試驗相關治療費用全免！",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className="h-full scroll-smooth">
      <head>
        {/* 预连接 Google Fonts 以加快字体加载 */}
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />

        {/* ===== JSON-LD 结构化数据（SEO 核心） ===== */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
      </body>
    </html>
  );
}
