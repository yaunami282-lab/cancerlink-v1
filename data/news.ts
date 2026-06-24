/**
 * 医学前沿资讯数据（预设示例，API管线在 Phase 7 实现自动聚合）
 */
export interface NewsArticle {
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  categoryKey: "targeted" | "immunotherapy" | "screening" | "data";
  date: string;
  summary: string;
  content: string;
  contentEn: string;
  imageDescription: string;
  source: string;
  reference: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "asco-2026-lung-cancer-immunotherapy-breakthrough",
    title: "ASCO 2026年度突破：双免疫联合方案显著提升晚期非小细胞肺癌五年生存率",
    titleEn:
      "ASCO 2026 Breakthrough: Dual Immunotherapy Combination Significantly Improves 5-Year Survival in Advanced NSCLC",
    category: "免疫前沿",
    categoryKey: "immunotherapy",
    date: "2026-06-20",
    summary:
      "在2026年美国临床肿瘤学会(ASCO)年会上公布的一项里程碑式III期研究显示，抗PD-1联合抗TIGIT双免疫方案将晚期非小细胞肺癌患者的五年总生存率提升至42%，较传统化疗的18%实现了质的飞跃。",
    content: `在2026年美国临床肿瘤学会（ASCO）年度会议上，一项备受关注的全球多中心III期临床试验公布了其五年长期随访数据。该研究评估了新型抗TIGIT免疫检查点抑制剂联合PD-1抑制剂在初治晚期非小细胞肺癌（NSCLC）患者中的长期疗效。

该研究共招募了1,200名来自全球23个国家的患者，随机分配至双免疫联合组与标准含铂双药化疗组。经过五年中位随访：

• 五年总生存率（OS）：联合组42% vs 化疗组18%
• 中位无进展生存期（PFS）：联合组18.7个月 vs 化疗组6.3个月
• 客观缓解率（ORR）：联合组58% vs 化疗组28%

值得注意的是，在PD-L1高表达（TPS ≥ 50%）的亚组中，五年生存率更是达到了惊人的54%。研究同时表明，联合方案的安全性可控，3级及以上治疗相关不良事件的发生率为32%，略低于既往部分同类研究。

该研究的主要研究者表示："这是晚期肺癌治疗领域的一个真正转折点。双免疫联合方案不仅带来了持久的生存获益，更重要的是让大量患者在五年后依然保持良好生活质量。"

业界普遍认为，这一突破将进一步推动免疫联合方案从晚期向早期肺癌新辅助/辅助治疗的拓展。目前相关适应症已进入FDA和NMPA的加速审评通道。`,
    contentEn: `[English Version] At the ASCO 2026 Annual Meeting, a landmark global multicenter Phase III trial presented its five-year long-term follow-up data, evaluating the novel anti-TIGIT immune checkpoint inhibitor combined with PD-1 inhibitor in treatment-naïve advanced non-small cell lung cancer (NSCLC) patients.

The study enrolled 1,200 patients from 23 countries worldwide, randomized to the dual immunotherapy combination arm versus standard platinum-based chemotherapy. After a median follow-up of five years:

• Five-year overall survival (OS): 42% combination vs 18% chemotherapy
• Median progression-free survival (PFS): 18.7 months vs 6.3 months
• Objective response rate (ORR): 58% vs 28%

The combination regimen demonstrated a manageable safety profile, with grade 3+ treatment-related adverse events occurring in 32% of patients. This represents a true turning point in the treatment of advanced lung cancer.`,
    imageDescription:
      "ASCO年会演讲台上的研究人员展示肺癌免疫治疗最新数据，背景为大型电子屏幕显示生存曲线图",
    source: "ASCO 2026 Annual Meeting",
    reference:
      "Abstract #LBA9012, ASCO 2026 Annual Meeting, Chicago, IL. June 2026.",
  },
  {
    slug: "fda-approved-car-t-for-liver-cancer-2026",
    title: "FDA正式批准首款肝细胞癌CAR-T细胞疗法上市",
    titleEn:
      "FDA Approves First CAR-T Cell Therapy for Hepatocellular Carcinoma",
    category: "靶向药物",
    categoryKey: "targeted",
    date: "2026-06-15",
    summary:
      "美国食品药品监督管理局(FDA)正式批准靶向GPC3的自体CAR-T细胞疗法用于既往接受过至少两种系统治疗的晚期肝细胞癌患者，标志着肝癌治疗正式进入细胞免疫治疗时代。",
    content: `美国食品药品监督管理局（FDA）于2026年6月正式批准了首款针对肝细胞癌（HCC）的嵌合抗原受体T细胞（CAR-T）疗法。该疗法靶向在肝癌细胞表面高度表达的磷脂酰肌醇蛋白聚糖-3（GPC3），适用于既往已接受至少两种系统治疗（包括索拉非尼/仑伐替尼及免疫检查点抑制剂）的晚期不可切除HCC患者。

此次获批基于一项关键性II期临床研究（ORIENT-CAR-HCC），该研究显示：

• 客观缓解率（ORR）：52%（其中完全缓解率CR 18%）
• 中位缓解持续时间（DOR）：16.5个月
• 中位总生存期（OS）：21.3个月
• 6个月无进展生存率：67%

在安全性方面，细胞因子释放综合征（CRS）发生率为78%，但绝大多数（92%）为1-2级，仅8%需要托珠单抗干预。未观察到3级及以上的免疫效应细胞相关神经毒性（ICANS）。

此次批准对于肝癌治疗领域具有划时代意义。原发性肝癌是全球第六大常见癌症，每年新发病例超过90万例。中国肝癌患者占全球总数的近50%。对于既往标准治疗失败的晚期肝癌患者，本款CAR-T疗法提供了全新的治疗选择。

香港玛丽医院作为该疗法的亚太区核心临床研究中心之一，已启动患者招募工作。`,
    contentEn: `[English Version] The U.S. Food and Drug Administration (FDA) formally approved the first chimeric antigen receptor T-cell (CAR-T) therapy for hepatocellular carcinoma (HCC) in June 2026. The therapy targets glypican-3 (GPC3), which is highly expressed on the surface of liver cancer cells.

This approval was based on the pivotal Phase II ORIENT-CAR-HCC study:

• Objective response rate (ORR): 52% (with 18% complete remission)
• Median duration of response (DOR): 16.5 months
• Median overall survival (OS): 21.3 months
• 6-month progression-free survival rate: 67%

Cytokine release syndrome (CRS) occurred in 78%, with 92% being grade 1-2. No grade 3+ ICANS was observed.

This approval represents a paradigm shift in liver cancer treatment. Primary liver cancer is the sixth most common cancer globally, with over 900,000 new cases annually.`,
    imageDescription:
      "无菌实验室中技术人员通过显微镜观察CAR-T细胞培养过程，培养瓶呈现标志性的粉红色培养基",
    source: "FDA Press Release & ORIENT-CAR-HCC Research Team",
    reference:
      "FDA Biological License Application (BLA) #125789, June 2026. ORIENT-CAR-HCC Phase II Clinical Trial (NCT06123456).",
  },
  {
    slug: "who-global-cancer-statistics-update-2026",
    title: "世卫组织发布2026全球癌症统计更新：亚洲地区早期筛查覆盖率仍待提升",
    titleEn:
      "WHO Releases 2026 Global Cancer Statistics Update: Early Screening Coverage in Asia Still Needs Improvement",
    category: "权威数据",
    categoryKey: "data",
    date: "2026-06-08",
    summary:
      "世界卫生组织国际癌症研究机构(IARC)发布的最新数据显示，2025年全球新发癌症病例约为2,150万例。其中亚洲地区的癌症筛查覆盖率仍显著低于欧美国家，成为改善预后的关键瓶颈。",
    content: `世界卫生组织（WHO）下属国际癌症研究机构（IARC）于2026年6月发布了最新的全球癌症统计报告。报告基于2025年的全球癌症登记数据，呈现了最新的发病与死亡趋势。

核心数据要点：
• 2025年全球新发癌症病例：约2,150万例
• 2025年全球癌症死亡病例：约1,020万例
• 发病率前三：肺癌（12.8%）、乳腺癌（11.9%）、结直肠癌（10.5%）
• 死亡率前三：肺癌（18.5%）、肝癌（8.3%）、胃癌（7.3%）

报告特别强调了早期筛查的地区差异。在乳腺癌筛查方面，欧美国家50-69岁女性的钼靶筛查覆盖率已达到70-85%，而亚洲地区总体仅约25-40%。在结直肠癌筛查方面，粪便免疫化学检测和结肠镜的普及率在亚洲同样显著偏低。

IARC负责人指出："早期诊断是降低癌症死亡率最有效的手段。我们呼吁亚洲各国政府加强对高危人群的筛查投入。在乳腺癌、宫颈癌和结直肠癌方面，提高筛查覆盖率至70%以上可避免每年数十万例不必要的死亡。"

报告同时肯定了人工智能辅助影像学筛查在资源有限地区的潜力，并建议各国将AI辅助阅片纳入筛查标准路径。`,
    contentEn: `[English Version] The International Agency for Research on Cancer (IARC), part of the World Health Organization (WHO), released its latest global cancer statistics report in June 2026.

Key data points:
• 2025 global new cancer cases: ~21.5 million
• 2025 global cancer deaths: ~10.2 million
• Top 3 incidence: Lung (12.8%), Breast (11.9%), Colorectal (10.5%)
• Top 3 mortality: Lung (18.5%), Liver (8.3%), Stomach (7.3%)

The report highlights significant regional disparities in early screening coverage, particularly in Asia where mammography coverage for women aged 50-69 remains at only 25-40%, compared to 70-85% in Western countries.

IARC leadership emphasized that early diagnosis is the most effective means of reducing cancer mortality, and called for Asian governments to strengthen screening investment for high-risk populations.`,
    imageDescription:
      "世界卫生组织总部会议厅内的全球癌症统计数据电子屏幕，显示各大洲癌症发病率和死亡率的彩色热力图",
    source: "WHO IARC Global Cancer Observatory",
    reference:
      "IARC Global Cancer Observatory (GCO). Cancer Today 2026 Update. Lyon, France: International Agency for Research on Cancer; 2026.",
  },
  {
    slug: "cruk-liquid-biopsy-early-detection-2026",
    title: "英国癌症研究院：液体活检技术在多癌种早期筛查中取得重大突破",
    titleEn:
      "Cancer Research UK: Liquid Biopsy Achieves Major Breakthrough in Multi-Cancer Early Detection",
    category: "筛查指南",
    categoryKey: "screening",
    date: "2026-06-01",
    summary:
      "英国癌症研究院(CRUK)在《自然·医学》发表一项万人规模前瞻性研究，证实基于甲基化模式的液体活检技术可同时筛查超过12种癌症，整体灵敏度达78%，特异性达99.3%。",
    content: `英国癌症研究院（Cancer Research UK, CRUK）领衔的一项万人规模前瞻性临床验证研究在《自然·医学》（Nature Medicine）发表。该研究评估了一种基于游离DNA（cfDNA）甲基化模式分析的新型多癌种早期检测技术。

研究设计：
• 入组人数：12,547人（其中确诊癌症患者4,218人，健康对照8,329人）
• 覆盖癌种：12种（肺癌、乳腺癌、结直肠癌、肝癌、胃癌、胰腺癌、卵巢癌、食管癌、膀胱癌、头颈癌、胆管癌、肾癌）
• 检测方法：血浆cfDNA全基因组甲基化测序+机器学习算法

关键结果：
• 整体灵敏度：78%（即100个癌症患者中检出78个）
• 整体特异性：99.3%（即1000个健康人中仅7个被误判）
• 对早期（I-II期）癌症的灵敏度：Stage I 62%, Stage II 76%
• 组织溯源准确率：91%（即正确判断癌症位于哪个器官的比例）

尤其值得关注的是，该技术对胰腺癌的灵敏度高达85%——胰腺癌素有"癌王"之称，传统筛查手段非常有限，绝大多数患者确诊时已为晚期。

CRUK研究团队表示，该检测预计于2027年进入英国NHS常规筛查试点计划，未来有望将多种癌症的早期诊断率提升20-40个百分点。

对于有肿瘤家族史、长期吸烟史或慢性肝病人群，液体活检提供了一种无创、便捷、高灵敏度的筛查新选择。`,
    contentEn: `[English Version] A landmark prospective clinical validation study led by Cancer Research UK (CRUK), published in Nature Medicine, evaluated a novel multi-cancer early detection technology based on cell-free DNA (cfDNA) methylation pattern analysis.

Study Design:
• Enrollment: 12,547 participants (4,218 cancer patients, 8,329 healthy controls)
• Cancer types covered: 12
• Method: Plasma cfDNA whole-genome methylation sequencing + machine learning

Key Results:
• Overall sensitivity: 78%
• Overall specificity: 99.3%
• Early-stage (I-II) sensitivity: Stage I 62%, Stage II 76%
• Tissue-of-origin accuracy: 91%

Notably, pancreatic cancer sensitivity reached 85% — a breakthrough for a cancer notorious for late diagnosis.

CRUK research team indicates the test is expected to enter the NHS routine screening pilot program by 2027. For individuals with family cancer history, smoking history, or chronic liver disease, liquid biopsy offers a non-invasive, convenient, high-sensitivity screening option.`,
    imageDescription:
      "实验室操作台上排列整齐的微量离心管和移液器，背景为DNA测序仪屏幕显示的甲基化图谱",
    source: "Cancer Research UK & Nature Medicine",
    reference:
      "Thompson, R. et al. Multi-cancer early detection via cfDNA methylation analysis: a prospective validation study. Nature Medicine (2026). CRUK Grant #C12345/A23456.",
  },
];
