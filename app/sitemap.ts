import { MetadataRoute } from "next";

/**
 * Next.js 自動生成 Sitemap
 * 網址: https://www.cancerlink.co/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cancerlink.co";
  const lastModified = new Date();

  const routes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    {
      url: `${baseUrl}/services/report-analysis`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/services/cancer-companion`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/services/genetic-testing`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/news`,
      priority: 0.8,
      changeFrequency: "daily" as const,
    },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}
