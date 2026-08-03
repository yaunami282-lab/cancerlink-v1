/**
 * 三大核心服務的 SVG 向量插畫
 * 替代 Emoji，更專業、可無限縮放
 */

export function ReportAnalysisIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[180px] mx-auto"
    >
      {/* 文件/報告 */}
      <rect
        x="55"
        y="30"
        width="90"
        height="120"
        rx="8"
        fill="white"
        stroke="#3a7d5a"
        strokeWidth="2.5"
      />
      {/* 文件折角 */}
      <path d="M145 30L145 50Q145 50 155 50L145 50V30Z" fill="#e8f5e9" />
      <path
        d="M145 30L145 50Q145 50 155 50"
        stroke="#3a7d5a"
        strokeWidth="2.5"
        fill="none"
      />
      {/* 線條 — 模擬文字 */}
      <rect x="68" y="65" width="50" height="5" rx="2.5" fill="#52b788" />
      <rect x="68" y="78" width="64" height="5" rx="2.5" fill="#d4ece0" />
      <rect x="68" y="91" width="40" height="5" rx="2.5" fill="#d4ece0" />
      <rect x="68" y="104" width="55" height="5" rx="2.5" fill="#d4ece0" />
      {/* 圖表條 */}
      <rect x="68" y="120" width="14" height="18" rx="3" fill="#52b788" />
      <rect x="86" y="110" width="14" height="28" rx="3" fill="#3a7d5a" />
      <rect x="104" y="125" width="14" height="13" rx="3" fill="#74c99a" />
      {/* 放大鏡 */}
      <circle
        cx="160"
        cy="145"
        r="20"
        stroke="#3a7d5a"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M173 158L190 175"
        stroke="#3a7d5a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* 十字標記（醫療） */}
      <path
        d="M155 145H165M160 140V150"
        stroke="#e74c3c"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoctorIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[180px] mx-auto"
    >
      {/* 白大褂身體 */}
      <path
        d="M80 175V130Q80 125 82 122L100 100L118 122Q120 125 120 130V175"
        fill="white"
        stroke="#3a7d5a"
        strokeWidth="2.5"
      />
      {/* V領 */}
      <path
        d="M85 130L100 115L115 130"
        stroke="#3a7d5a"
        strokeWidth="2"
        fill="none"
      />
      {/* 聽診器管子 */}
      <path
        d="M90 145Q80 145 78 135Q76 125 85 120Q95 115 100 125Q105 135 110 140"
        stroke="#3aa0a0"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* 聽診器頭 */}
      <circle cx="110" cy="140" r="6" fill="#3a7d5a" />
      {/* 頭部 */}
      <circle cx="100" cy="78" r="24" fill="#f5e6d3" stroke="#3a7d5a" strokeWidth="2.5" />
      {/* 頭髮 */}
      <path
        d="M76 75Q76 54 100 54Q124 54 124 75"
        fill="#4a3728"
        stroke="#4a3728"
        strokeWidth="2"
      />
      {/* 眼睛 */}
      <circle cx="93" cy="76" r="2.5" fill="#333" />
      <circle cx="107" cy="76" r="2.5" fill="#333" />
      {/* 微笑 */}
      <path
        d="M93 86Q100 92 107 86"
        stroke="#333"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* 口袋 */}
      <rect x="87" y="150" width="16" height="14" rx="3" fill="#e8f5e9" stroke="#52b788" strokeWidth="1" />
      {/* 筆 */}
      <rect x="93" y="147" width="2.5" height="8" rx="1" fill="#e74c3c" />
      {/* 十字標記 */}
      <circle cx="135" cy="85" r="14" fill="#e74c3c" opacity="0.85" />
      <path d="M131 85H139M135 81V89" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function GeneticTestingIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[180px] mx-auto"
    >
      {/* DNA 雙螺旋結構 */}
      {/* 左鏈 */}
      <path
        d="M75 40Q95 60 75 80Q95 100 75 120Q95 140 75 160"
        stroke="#3a7d5a"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* 右鏈 */}
      <path
        d="M125 40Q105 60 125 80Q105 100 125 120Q105 140 125 160"
        stroke="#52b788"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* 橫向連接線 */}
      <line x1="82" y1="55" x2="118" y2="55" stroke="#74c99a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="90" y1="70" x2="110" y2="70" stroke="#74c99a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="82" y1="85" x2="118" y2="85" stroke="#74c99a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="90" y1="100" x2="110" y2="100" stroke="#74c99a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="82" y1="115" x2="118" y2="115" stroke="#74c99a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="90" y1="130" x2="110" y2="130" stroke="#74c99a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="82" y1="145" x2="118" y2="145" stroke="#74c99a" strokeWidth="2.5" strokeLinecap="round" />

      {/* 染色體節點 */}
      <circle cx="100" cy="92" r="5" fill="#3a7d5a" />
      <circle cx="100" cy="108" r="5" fill="#52b788" />

      {/* 底部保護手 */}
      <path
        d="M60 175Q70 165 85 170Q100 175 120 170Q135 165 145 175"
        stroke="#3a7d5a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M75 175Q80 178 85 175"
        stroke="#3a7d5a"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function CancerCompanionIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[180px] mx-auto"
    >
      {/* 彎曲路徑 — 象徵抗癌旅程 */}
      <path
        d="M20 170 Q60 140 100 145 Q140 150 180 135"
        stroke="#52b788"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />
      {/* 路上的小點點 */}
      <circle cx="60" cy="152" r="2.5" fill="#74c99a" />
      <circle cx="100" cy="147" r="2.5" fill="#74c99a" />
      <circle cx="140" cy="149" r="2.5" fill="#74c99a" />

      {/* 左側人物（患者） */}
      <g transform="translate(75, 62)">
        <circle cx="0" cy="0" r="14" fill="#f5e6d3" stroke="#3a7d5a" strokeWidth="2.5" />
        <path d="M-14 0Q-14 -14 0 -14Q14 -14 14 0" fill="#5a4a3a" />
        <circle cx="-5" cy="0" r="2" fill="#333" />
        <circle cx="5" cy="0" r="2" fill="#333" />
        <path d="M-4 5Q0 9 4 5" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M-10 14L-14 55L14 55L10 14" fill="#e8f5e9" stroke="#3a7d5a" strokeWidth="2.5" />
        <path d="M10 25Q25 30 35 35" stroke="#3a7d5a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* 右側人物（陪跑員） */}
      <g transform="translate(125, 58)">
        <circle cx="0" cy="0" r="14" fill="#f5e6d3" stroke="#3a7d5a" strokeWidth="2.5" />
        <path d="M-14 -2Q-14 -16 0 -17Q14 -16 14 -2" fill="#3a7d5a" />
        <circle cx="-5" cy="0" r="2" fill="#333" />
        <circle cx="5" cy="0" r="2" fill="#333" />
        <path d="M-4 5Q0 9 4 5" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M-10 14L-14 55L14 55L10 14" fill="white" stroke="#3a7d5a" strokeWidth="2.5" />
        <path d="M-4 18L0 25L4 18" stroke="#3a7d5a" strokeWidth="1.5" fill="none" />
        <path d="M-10 25Q-20 30 -25 35" stroke="#3a7d5a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="-6" y="38" width="12" height="10" rx="2" fill="#e8f5e9" stroke="#52b788" strokeWidth="1" />
        <path d="M5 25Q12 22 12 28Q12 34 8 36" stroke="#e74c3c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* 心形 */}
      <g transform="translate(100, 105)">
        <path
          d="M0 -6Q-4 -14 -10 -10Q-16 -6 -10 4L0 15L10 4Q16 -6 10 -10Q4 -14 0 -6Z"
          fill="#e74c3c"
          opacity="0.8"
        />
      </g>

      {/* 盾牌 */}
      <g transform="translate(100, 185)" opacity="0.5">
        <path
          d="M-15 -10L0 -22L15 -10L12 10Q0 15 -12 10Z"
          fill="none"
          stroke="#52b788"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M-5 -2L0 2L5 -2" stroke="#52b788" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}
