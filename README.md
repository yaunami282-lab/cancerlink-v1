# Cancer Link 临床连线 🧬

**AI驱动的肿瘤临床试验精准配对与患者综合支持平台**

帮助每一位患者连接到希望。

---

## 项目概述

Cancer Link 是一个由人工智能技术深度驱动的现代化肿瘤临床试验精准配对与患者综合支持平台，为癌症患者及其家属提供：

- 📊 **报告分析与研究配对** — 上传医学报告，AI+专家团队精准匹配全球临床试验
- 👨‍⚕️ **预约咨询肿瘤医生** — 汇聚顶尖三甲医院肿瘤专家，免费初步问诊
- 🧬 **肿瘤基因检测** — 遗传风险评估与精准检测咨询
- 📰 **医学前沿资讯** — 全球肿瘤医学进展自动聚合（中英双语）

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **部署**: Vercel（零成本自动部署）
- **API**: ClinicalTrials.gov API, Claude API (Anthropic)
- **表单**: Jotform（可替换）
- **客服**: WhatsApp Business API

## 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 复制环境变量配置文件（按需填写）
cp .env.example .env.local

# 3. 启动开发服务器
npm run dev

# 4. 浏览器打开
open http://localhost:3000
```

## 页面路由

| 路径 | 页面 |
|------|------|
| `/` | 首页（Hero + 服务卡片 + FAQ） |
| `/services/report-analysis` | 报告分析与研究配对 |
| `/services/consultation` | 预约咨询肿瘤医生 |
| `/services/genetic-testing` | 肿瘤基因检测 |
| `/news` | 医学前沿资讯列表 |
| `/news/[slug]` | 资讯详情页（中英双语） |
| `/api/trials` | ClinicalTrials.gov 数据同步接口 |
| `/api/news-sync` | 医学新闻聚合 + AI 翻译管线 |

## 部署到 Vercel

1. 将项目推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 导入该仓库
3. 在 Settings > Environment Variables 中设置 `ANTHROPIC_API_KEY`
4. 部署完成后绑定自定义域名
5. 在 Google Search Console 提交 sitemap

## 环境变量

| 变量名 | 说明 | 是否必需 |
|--------|------|----------|
| `ANTHROPIC_API_KEY` | Claude API Key（新闻翻译管线） | 可选（不设置则只抓取原文） |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp 客服号码 | 否（已硬编码默认值） |
| `NEXT_PUBLIC_JOTFORM_*` | Jotform 表单链接 | 否（占位表单已就绪） |

## 自动化管线

- **ClinicalTrials.gov 同步**: 每周日凌晨 Vercel Cron 自动运行
- **医学新闻聚合**: 建议每日早上8点运行（需配置 cron）
- **AI 翻译**: 调用 Claude API，生成繁中/英文双语版本

## 设计规范

- **主色调**: 深森林绿 `#1b4332`
- **辅助色**: 科技绿 `#40916c` / `#2d6a4f`
- **强调色**: WhatsApp 绿 `#25D366`
- **背景色**: 柔和护眼浅绿 `#f7fbf7`

## 合规说明

⚠️ 本网站遵循 Google YMYL (Your Money or Your Life) 医疗网站最高标准：
- 全站注入 Medical Schema.org JSON-LD 结构化数据
- 所有医学内容标注参考来源
- 严格的 E-E-A-T 原则（Experience, Expertise, Authoritativeness, Trustworthiness）
- 杜绝任何 "AI 生成" 等字样

---

**© 2026 Cancer Link 临床连线. All rights reserved.**
