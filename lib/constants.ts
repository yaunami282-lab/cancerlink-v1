/**
 * Cancer Link 全域配置檔
 * 修改這裡的值，全站自動更新
 */

export const CONFIG = {
  /** 網站名稱 */
  siteName: "Cancer Link 癌研連線",

  /** 核心宣傳語 */
  slogan: "癌研連線，讓患者連結希望",

  /** 英文標語 */
  sloganEn: "connect patient to hope.",

  /** WhatsApp 客服號碼 */
  whatsappNumber: "85218399216276",

  /** WhatsApp 預設訊息 */
  whatsappDefaultMessage:
    "您好，我想了解Cancer Link臨床研究配對／基因檢測服務",

  /** WhatsApp 彈窗顯示文案 */
  whatsappPopupTitle: "線上醫學顧問",
  whatsappPopupSubtitle: "🟢 在線 · 即時連線",
  whatsappPopupDescription:
    "我們的醫學顧問團隊隨時為您解答臨床試驗、醫生預約和基因檢測相關問題。",
  whatsappBubbleText: "💬 線上醫學顧問 - 點擊即時連線",

  /** 黃金廣告位文案 */
  ctaHighlight: "一旦患者成功配對入組，所有試驗相關治療費用全免！",
  ctaButton: "開始免費配對評估",

  /** 聯絡電郵 */
  contactEmail: "info@cancerlink.co",

  /** 版權資訊 */
  copyright: "© 2026 Cancer Link 癌研連線. All rights reserved.",
};

/** 導航選單 */
export const NAV_ITEMS = [
  { label: "首頁", href: "/" },
  { label: "報告分析", href: "/services/report-analysis" },
  { label: "預約醫生", href: "/services/consultation" },
  { label: "基因檢測", href: "/services/genetic-testing" },
  { label: "前沿資訊", href: "/news" },
];

/** 三大核心服務 */
export const SERVICES = [
  {
    id: "report-analysis",
    icon: "📊",
    title: "報告分析與研究配對",
    description:
      "上傳您的醫學檢查報告，AI + 專家團隊為您精準配對全球正在招募的臨床試驗，抓住每一個治療新希望。",
    href: "/services/report-analysis",
    color: "bg-[#f0f7f4] border-l-4 border-[#40916c]",
  },
  {
    id: "consultation",
    icon: "👨‍⚕️",
    title: "預約諮詢腫瘤醫生",
    description:
      "匯聚頂尖三甲醫院腫瘤專家，提供免費初步問診評估，讓專業醫生為您的治療路徑把關。",
    href: "/services/consultation",
    color: "bg-[#f0f4f7] border-l-4 border-[#2d6a4f]",
  },
  {
    id: "genetic-testing",
    icon: "🧬",
    title: "腫瘤基因檢測",
    description:
      "為患者及家屬提供遺傳風險評估與精準基因檢測諮詢，提早發現潛在風險，守護全家人的健康。",
    href: "/services/genetic-testing",
    color: "bg-[#f5f0f7] border-l-4 border-[#52b788]",
  },
];
