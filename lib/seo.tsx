/**
 * SEO 工具函数 — Medical Schema.org JSON-LD 结构化数据生成器
 *
 * 用途：为 Google 和其他搜索引擎提供结构化数据标记
 * YMYL 医疗网站必须包含这些标签以获得权威排名
 *
 * Schema.org 参考：
 * - Physician: https://schema.org/Physician
 * - MedicalWebPage: https://schema.org/MedicalWebPage
 * - MedicalScholarlyArticle: https://schema.org/MedicalScholarlyArticle
 * - Organization: https://schema.org/Organization
 */

import { CONFIG } from "@/lib/constants";
import { Doctor, DOCTORS } from "@/data/doctors";
import { NewsArticle } from "@/data/news";

// ============================================================
// 网站基础信息
// ============================================================
const SITE_URL = "https://www.cancerlink.co";

/**
 * Organization Schema — 全站级别的组织信息
 * 在 app/layout.tsx 中全局注入
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: CONFIG.siteName,
    alternateName: "Cancer Link",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: CONFIG.slogan,
    email: CONFIG.contactEmail,
    telephone: `+${CONFIG.whatsappNumber}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Hong Kong",
      addressCountry: "HK",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 22.3193,
        longitude: 114.1694,
      },
      geoRadius: "1000000",
    },
    medicalSpecialty: [
      "Oncology",
      "MedicalOncology",
      "SurgicalOncology",
      "RadiationOncology",
    ],
    knowsAbout: [
      "Cancer Clinical Trials",
      "Tumor Genetic Testing",
      "Oncology Consultation",
      "Cancer Screening",
    ],
    sameAs: [
      // 社交账号链接（后续替换为真实链接）
    ],
  };
}

/**
 * Physician Schema — 医生个人页面结构化数据
 * Google 会以此识别并展示医生信息在搜索结果中
 */
export function generatePhysicianSchema(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: `${doctor.title}，${doctor.experience}，擅长${doctor.specialties.join("、")}`,
    image: `${SITE_URL}${doctor.photo}`,
    medicalSpecialty: "Oncology",
    hospitalAffiliation: {
      "@type": "Hospital",
      name: doctor.hospital,
    },
    knowsAbout: doctor.specialties,
    availableLanguage: doctor.languages,
    areaServed: {
      "@type": "City",
      name: "Hong Kong",
    },
  };
}

/**
 * MedicalWebPage Schema — 医学资讯列表页
 * 标记页面的医学属性，提升 YMYL 权重
 */
export function generateMedicalWebPageSchema({
  title,
  description,
  url,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description: description,
    url: `${SITE_URL}${url}`,
    ...(datePublished && { datePublished }),
    publisher: {
      "@type": "MedicalOrganization",
      name: CONFIG.siteName,
    },
    about: {
      "@type": "MedicalCondition",
      name: "Cancer",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Cancer patients, family members, and caregivers",
    },
    lastReviewed: new Date().toISOString().split("T")[0],
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Oncology professionals and patients",
    },
  };
}

/**
 * MedicalScholarlyArticle Schema — 单篇医学资讯
 * 标记学术权威性，标注参考文献来源
 */
export function generateMedicalArticleSchema(article: NewsArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    headline: article.title,
    description: article.summary,
    image: `${SITE_URL}/images/news/${article.slug}.svg`,
    datePublished: article.date,
    author: {
      "@type": "MedicalOrganization",
      name: CONFIG.siteName,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: CONFIG.siteName,
    },
    about: {
      "@type": "MedicalCondition",
      name: "Cancer",
    },
    citation: [
      {
        "@type": "ScholarlyArticle",
        name: article.reference,
      },
    ],
    sourceOrganization: {
      "@type": "Organization",
      name: article.source,
    },
    inLanguage: ["zh-HK", "en"],
    articleSection: article.category,
  };
}

/**
 * BreadcrumbList Schema — 面包屑导航
 * 帮助搜索引擎理解页面层级关系
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * FAQ Schema — 问答结构化数据
 * 用于 FAQ 页面，可让问题答案直接显示在搜索结果中
 */
export function generateFAQSchema(
  faqItems: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * WebSite + SearchAction Schema — 全站搜索配置
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: CONFIG.siteName,
    url: SITE_URL,
    description: CONFIG.slogan,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * 渲染 JSON-LD script 标签的 React 组件
 * 用法：<JsonLd data={generateOrganizationSchema()} />
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

/**
 * 生成标准 meta 标签对象的辅助函数
 */
export function generatePageMetadata({
  title,
  description,
  url,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
}) {
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${url}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${url}`,
      siteName: CONFIG.siteName,
      ...(image && { images: [{ url: `${SITE_URL}${image}` }] }),
      locale: "zh_HK",
      type,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      ...(image && { images: [`${SITE_URL}${image}`] }),
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
    },
  };
}
