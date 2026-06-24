/**
 * 临床试验数据（预设示例数据，API管线在 Phase 7 实现实时同步）
 */
export interface ClinicalTrial {
  id: string;
  nctId: string;
  title: string;
  titleEn: string;
  cancerType: string;
  cancerTypeKey: "breast" | "lung" | "liver" | "gi" | "other";
  phase: string;
  status: string;
  location: string;
  description: string;
  eligibility: string;
  sponsor: string;
  lastUpdated: string;
}

export const TRIALS: ClinicalTrial[] = [
  {
    id: "1",
    nctId: "NCT06123456",
    title: "PD-1抑制剂联合化疗在晚期三阴性乳腺癌中的II期临床研究",
    titleEn:
      "Phase II Study of PD-1 Inhibitor Combined with Chemotherapy in Advanced Triple-Negative Breast Cancer",
    cancerType: "乳腺癌",
    cancerTypeKey: "breast",
    phase: "Phase II",
    status: "招募中 (Recruiting)",
    location: "香港 · 玛丽医院",
    description:
      "本研究旨在评估新型PD-1免疫检查点抑制剂联合标准化疗方案在晚期三阴性乳腺癌患者中的安全性和初步疗效。符合条件的受试者将免费接受治疗及全面随访检查。",
    eligibility:
      "经病理学确认的晚期三阴性乳腺癌患者；年龄18-75岁；ECOG评分0-2；既往未接受过免疫治疗。",
    sponsor: "香港大学临床试验中心",
    lastUpdated: "2026-06-15",
  },
  {
    id: "2",
    nctId: "NCT06234567",
    title: "第三代EGFR-TKI靶向药在EGFR突变非小细胞肺癌中的III期研究",
    titleEn:
      "Phase III Trial of Third-Generation EGFR-TKI in EGFR-Mutant Non-Small Cell Lung Cancer",
    cancerType: "肺癌",
    cancerTypeKey: "lung",
    phase: "Phase III",
    status: "招募中 (Recruiting)",
    location: "香港 · 威尔斯亲王医院",
    description:
      "比较第三代EGFR-TKI与标准一代/二代EGFR-TKI在初治EGFR突变晚期非小细胞肺癌患者中的疗效和安全性。",
    eligibility:
      "经基因检测确认EGFR敏感突变（Ex19del或L858R）的非小细胞肺癌患者；未接受过系统治疗；ECOG 0-1。",
    sponsor: "香港中文大学医学院",
    lastUpdated: "2026-06-10",
  },
  {
    id: "3",
    nctId: "NCT06345678",
    title: "CAR-T细胞疗法在复发/难治性肝细胞癌中的I/II期探索性研究",
    titleEn:
      "Phase I/II Exploratory Study of CAR-T Cell Therapy in Relapsed/Refractory Hepatocellular Carcinoma",
    cancerType: "肝癌",
    cancerTypeKey: "liver",
    phase: "Phase I/II",
    status: "招募中 (Recruiting)",
    location: "香港 · 养和医院",
    description:
      "评估靶向GPC3的新型CAR-T细胞在标准治疗失败的晚期肝细胞癌患者中的安全性、耐受性及初步抗肿瘤活性。",
    eligibility:
      "经病理学或影像学确诊的晚期肝细胞癌；Child-Pugh A或B级；既往至少接受过一线系统治疗。",
    sponsor: "养和医院临床研究中心",
    lastUpdated: "2026-06-05",
  },
  {
    id: "4",
    nctId: "NCT06456789",
    title: "HER2双特异性抗体联合化疗在HER2阳性胃癌中的II期研究",
    titleEn:
      "Phase II Study of HER2 Bispecific Antibody with Chemotherapy in HER2-Positive Gastric Cancer",
    cancerType: "胃肠肿瘤",
    cancerTypeKey: "gi",
    phase: "Phase II",
    status: "招募中 (Recruiting)",
    location: "香港 · 伊利沙伯医院",
    description:
      "探索新型HER2双特异性抗体ZW25联合标准化疗在HER2过表达晚期胃癌或胃食管结合部腺癌中的抗肿瘤活性与安全性。",
    eligibility:
      "经IHC或FISH确认HER2过表达/扩增的胃/胃食管结合部腺癌；既往未接受过HER2靶向治疗；可测量病灶。",
    sponsor: "伊利沙伯医院肿瘤科",
    lastUpdated: "2026-06-01",
  },
  {
    id: "5",
    nctId: "NCT06567890",
    title: "PARP抑制剂联合免疫治疗在BRCA突变卵巢癌维持治疗中的III期研究",
    titleEn:
      "Phase III Study of PARP Inhibitor + Immunotherapy in BRCA-Mutant Ovarian Cancer Maintenance",
    cancerType: "其他肿瘤",
    cancerTypeKey: "other",
    phase: "Phase III",
    status: "招募中 (Recruiting)",
    location: "香港 · 香港大学临床研究中心",
    description:
      "评估PARP抑制剂联合PD-L1免疫检查点抑制剂作为BRCA突变晚期卵巢癌一线维持治疗的疗效。",
    eligibility:
      "BRCA1/2胚系或体细胞突变的晚期卵巢癌、输卵管癌或原发性腹膜癌；完成一线含铂化疗且无进展。",
    sponsor: "香港大学临床试验中心",
    lastUpdated: "2026-05-28",
  },
  {
    id: "6",
    nctId: "NCT06678901",
    title: "双免疫联合方案在MSI-H转移性结直肠癌中的II期研究",
    titleEn:
      "Phase II Trial of Dual Immune Checkpoint Blockade in MSI-H Metastatic Colorectal Cancer",
    cancerType: "胃肠肿瘤",
    cancerTypeKey: "gi",
    phase: "Phase II",
    status: "招募中 (Recruiting)",
    location: "香港 · 威尔斯亲王医院",
    description:
      "评估抗PD-1联合抗CTLA-4双免疫联合方案在MSI-H/dMMR转移性结直肠癌一线治疗中的完全缓解率和安全性。",
    eligibility:
      "MSI-H或dMMR确认的转移性结直肠腺癌；既往未接受过转移性疾病的系统治疗；ECOG 0-1。",
    sponsor: "香港中文大学医学院",
    lastUpdated: "2026-05-20",
  },
];
