/**
 * 肿瘤医生数据
 */
export interface Doctor {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  photo: string;
  hospital: string;
  experience: string;
  specialties: string[];
  education: string;
  languages: string[];
  whatsappMessage: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-chen",
    name: "陈志明 教授",
    nameEn: "Prof. CHAN Chi-Ming",
    title: "肿瘤内科主任医师 · 临床研究首席专家",
    photo: "/images/doctor-1.jpg",
    hospital: "香港大学玛丽医院 · 肿瘤中心",
    experience: "25年临床执业经验",
    specialties: ["肺癌靶向治疗", "免疫检查点抑制剂", "胸部肿瘤综合治疗"],
    education:
      "香港大学内外全科医学士 (MBBS) · 英国皇家内科医学院院士 (MRCP) · 哈佛医学院 Dana-Farber 癌症研究所访问学者",
    languages: ["粤语", "普通话", "English"],
    whatsappMessage:
      "您好，我想预约陈志明教授进行免费问诊评估",
  },
  {
    id: "dr-li",
    name: "李慧敏 医生",
    nameEn: "Dr. LI Wai-Man",
    title: "肿瘤遗传学专家 · 基因检测顾问",
    photo: "/images/doctor-2.jpg",
    hospital: "香港中文大学医学院 · 肿瘤学系",
    experience: "18年临床执业经验",
    specialties: ["肿瘤遗传咨询", "BRCA基因检测", "遗传性癌症综合征"],
    education:
      "香港中文大学医学博士 (MD) · 美国医学遗传学与基因组学委员会认证 (ABMGG) · 史丹福大学基因组学博士后",
    languages: ["粤语", "普通话", "English"],
    whatsappMessage:
      "您好，我想预约李慧敏医生进行肿瘤基因检测咨询",
  },
  {
    id: "dr-wong",
    name: "王家豪 医生",
    nameEn: "Dr. WONG Ka-Ho",
    title: "肿瘤外科主任 · 乳腺外科专家",
    photo: "/images/doctor-3.jpg",
    hospital: "香港养和医院 · 外科部",
    experience: "20年临床执业经验",
    specialties: ["乳腺癌综合治疗", "微创肿瘤手术", "术后康复管理"],
    education:
      "香港大学医学博士 (MD) · 英国爱丁堡皇家外科医学院院士 (FRCSEd) · 纪念斯隆凯特琳癌症中心 (MSKCC) 进修",
    languages: ["粤语", "普通话", "English"],
    whatsappMessage:
      "您好，我想预约王家豪医生进行乳腺癌治疗咨询",
  },
];
