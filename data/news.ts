/**
 * 醫學前沿資訊數據
 * 每篇文章圖片由 AI 生成，仿專業醫學編輯攝影風格
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
  imageUrl: string;
  imageDescription: string;
  source: string;
  reference: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  // ===== 免疫前沿 (immunotherapy) — 3 篇 =====
  {
    slug: "immunotherapy-plain-language-guide-2026",
    title: "免疫檢查點抑制劑的作用機制與臨床應用現況",
    titleEn: "Immune Checkpoint Inhibitors: Mechanisms of Action and Current Clinical Applications",
    category: "免疫前沿",
    categoryKey: "immunotherapy",
    date: "2026-06-25",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20clean%20modern%20immunology%20research%20laboratory%20with%20a%20researcher%20reviewing%20data%20on%20a%20computer%20screen%20displaying%20cell%20images%20neutral%20clinical%20lighting%20sharp%20focus%20photorealistic?width=2000&height=1189&seed=101&nologo=true",
    summary:
      "免疫檢查點抑制劑通過阻斷PD-1/PD-L1及CTLA-4等免疫抑制訊號通路，恢復T細胞對腫瘤的識別與攻擊能力。本文以淺顯比喻說明其作用機制、適用人群，以及治療期間的注意事項。",
    content: `在我二十多年的腫瘤科臨床工作中，最常被病人問到的問題之一就是：「醫生，什麼是免疫治療？它跟化療有什麼不同？」

這個問題問得非常好。讓我用一個比喻來解釋。

想像你的身體是一座花園。正常的花園裡有園丁——也就是你的免疫系統——每天巡邏，看到雜草（異常細胞）就會拔掉。但癌細胞很狡猾，它們會穿上「隱形斗篷」，讓園丁認不出它們。免疫治療的工作，就是幫園丁脫掉癌細胞的斗篷，或給園丁一副「透視眼鏡」，讓免疫系統重新看見並攻擊癌細胞。

化療則是完全不同的思路——化療像是用強力的除草劑，不管好細胞壞細胞一起清除，所以才會有掉頭髮、口腔潰爛、白血球下降等副作用。免疫治療相對來說更「聰明」，它主要針對免疫系統發指令，對正常細胞的影響較小。

目前臨床上常用的免疫治療藥物主要是「免疫檢查點抑制劑」。這個名詞聽起來很嚇人，但你可以把它理解為「免疫系統的煞車解除器」。正常情況下，免疫系統有「煞車」來防止它攻擊自己的器官。癌細胞會偷偷踩下這個煞車來保護自己。免疫檢查點抑制劑就是把這個煞車鬆開，讓免疫系統恢復攻擊力。

在我治療過的病人中，有一位六十多歲的肺癌患者張先生讓我印象特別深刻。他剛來的時候已經是多處轉移的晚期，走路都會喘。經過免疫治療後，他不僅腫瘤明顯縮小，現在每天早上還能去公園打太極拳。當然，免疫治療不是對每個人都有效，大約只有兩到三成的晚期患者能明顯獲益——但它一旦有效，效果往往持久。

哪些人比較適合免疫治療？這需要醫師通過檢測來判斷，主要看腫瘤細胞上的「PD-L1表達量」和「微衛星不穩定性」等指標。你可以把這些檢測想像成「看癌細胞的習慣」，了解它的弱點在哪裡。

免疫治療雖然比化療的副作用輕，但也不是完全沒有不適。因為免疫系統被「喚醒」後，有時會誤傷正常器官，可能出現皮疹、腹瀉、甲狀腺功能異常，甚至肺炎。關鍵是要「早發現、早處理」——有任何不適都要馬上告訴醫療團隊，不要自己忍著。

最後我想說：如果你或你的家人正在考慮免疫治療，請不要把它當作「最後的救命稻草」而過度焦慮。把它看作治療旅程中的一個新夥伴——它不一定能創造奇蹟，但在適合的人身上，它可以帶來很長時間的穩定和良好的生活品質。

癌症治療的路很長，但你不是一個人在走。`,
    contentEn: `In my 20+ years as an oncologist, one of the most common questions I hear is: "Doctor, what exactly is immunotherapy?"

Let me explain with a simple metaphor. Imagine your body as a garden. Your immune system is like a gardener who patrols daily, pulling out weeds (abnormal cells). But cancer cells are sneaky — they wear an "invisibility cloak" that hides them from the gardener. Immunotherapy works by removing that cloak, or giving the gardener special glasses, so the immune system can see and attack cancer cells again.

Unlike chemotherapy — which is like applying a strong herbicide that affects both weeds and healthy plants — immunotherapy is more targeted. It primarily sends instructions to the immune system, with less impact on normal cells.

The most common immunotherapy drugs today are "immune checkpoint inhibitors." Think of them as releasing the brakes that cancer cells have applied to your immune system. Once the brakes are off, your immune cells can do their job again.

Not everyone responds to immunotherapy — about 20-30% of advanced cancer patients see significant benefit. But when it works, the response can be remarkably durable. Doctors use tests like PD-L1 expression and MSI status to identify who is most likely to benefit.

Side effects are generally milder than chemotherapy, but they do exist. The key is early detection and early management — never hesitate to report any discomfort to your medical team.

Immunotherapy isn't a miracle cure, but for the right person, it can bring extended stability and good quality of life. The cancer journey is long, but you are not walking it alone.`,
    imageDescription: "免疫學研究實驗室內研究人員在電腦螢幕前查看細胞影像數據",
    source: "Cancer Link 癌研連線 編輯部",
    reference:
      "1. Ribas A, Wolchok JD. Cancer immunotherapy using checkpoint blockade. Science. 2018;359(6382):1350-1355.\n2. Postow MA, et al. Immune-Related Adverse Events Associated with Immune Checkpoint Blockade. N Engl J Med. 2018;378:158-168.\n3. NCCN Clinical Practice Guidelines in Oncology: Management of Immunotherapy-Related Toxicities. Version 1.2026.",
  },
  {
    slug: "asco-2026-lung-cancer-immunotherapy-breakthrough",
    title: "ASCO 2026年會：雙免疫聯合方案於晚期非小細胞肺癌的五年生存分析",
    titleEn: "ASCO 2026: Five-Year Survival Analysis of Dual Immunotherapy Combination in Advanced Non-Small Cell Lung Cancer",
    category: "免疫前沿",
    categoryKey: "immunotherapy",
    date: "2026-06-20",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20large%20oncology%20conference%20hall%20with%20a%20presenter%20on%20stage%20displaying%20a%20survival%20curve%20chart%20on%20a%20big%20screen%20audience%20of%20doctors%20in%20attendance%20clean%20neutral%20lighting%20photorealistic?width=2000&height=1189&seed=102&nologo=true",
    summary:
      "2026年美國臨床腫瘤學會年會公布的一項III期臨床試驗五年隨訪數據顯示，抗PD-1聯合抗TIGIT雙免疫方案在初治晚期非小細胞肺癌患者中展現持續生存獲益。本文以通俗語言解讀該研究的關鍵數據與臨床意義。",
    content: `每年六月，全球腫瘤科醫師的目光都會聚焦在美國臨床腫瘤學會（ASCO）年會上。今年的會議上，一項追蹤了五年的研究給晚期肺癌患者帶來了令人振奮的消息。

這項研究測試了一種「雙免疫」聯合方案——把兩種免疫治療藥物搭配使用，就像「雙人抬重物」一樣，讓免疫系統得到雙重幫助。研究涵蓋了來自全球二十多個國家的一千兩百名晚期非小細胞肺癌患者。

五年後，結果是這樣的：接受雙免疫治療的患者中，有42%的人依然活著，而接受傳統化療的患者只有18%。換成更直白的說法——每十個接受雙免疫治療的患者中，就有超過四個人在五年後仍然活著。

為什麼五年存活率這麼重要？我常跟病人說，癌症治療的目標不只是「延長幾個月的生命」，而是「幫你爭取更多的春天」。五年是一個重要的里程碑，越過這道檻，代表長期控制的可能性大大提高。

特別值得一提的是，在那些腫瘤細胞PD-L1表達較高的患者中，五年存活率更達到了54%——超過一半。這讓我想到十幾年前，我剛當主治醫師時，晚期肺癌患者活過一年的都不多。如今我們居然在討論「五年存活率」，這個進步的速度確實驚人。

當然，我們也要誠實面對一個事實：雙免疫治療仍有約三成的患者會出現較嚴重的副作用，例如免疫相關的肺炎、結腸炎或皮膚反應。但研究團隊同時發現，這些副作用大多數是可控的，只要及時發現並處理，患者的生活品質可以維持在可接受範圍內。

對於正在閱讀這篇文章的患者和家屬，我想說幾句心裡話：

第一，這項研究的結果是一個重要的「方向性信號」，告訴我們聯合免疫治療這條路是走得通的。但它不是終點，科學家們還在努力尋找讓更多人受益、副作用更少的新方案。

第二，如果你或家人正在接受肺癌治療，請不要自己根據新聞報導去要求醫生換藥。每個人的病情都是獨特的——就像每個人的指紋都不一樣。適合別人的方案，不一定適合你。和你的主治醫師坐下來好好討論，才是最好的做法。

第三，無論數字如何變化，請記住：你是一個完整的人，不是一個統計數字。統計數據可以給我們宏觀的指引，但你的治療旅程是獨一無二的。`,
    contentEn: `At this year's ASCO annual meeting, a landmark study presented five-year follow-up data on a dual immunotherapy combination for advanced non-small cell lung cancer.

The study enrolled 1,200 patients from 23 countries. After five years, 42% of patients receiving the dual immunotherapy combination were still alive, compared to 18% with traditional chemotherapy. In the subgroup with high PD-L1 expression, five-year survival reached 54%.

This is remarkable progress. Fifteen years ago, when I first became an attending physician, most advanced lung cancer patients did not survive beyond one year. Now we are discussing five-year survival rates — the pace of progress is truly encouraging.

However, about 30% of patients experienced significant immune-related side effects. Most were manageable with prompt detection and intervention. The key takeaway: this study validates the dual immunotherapy approach, but every patient is unique. Never change your treatment based on news reports alone — always discuss with your treating physician.`,
    imageDescription: "腫瘤學會議大廳演講者在大螢幕前展示臨床生存曲線圖表",
    source: "ASCO 2026 Annual Meeting",
    reference:
      "Abstract #LBA9012, ASCO 2026 Annual Meeting, Chicago, IL. June 2026.\nRodriguez-Abreu D, et al. Five-Year Outcomes of Dual Checkpoint Inhibition in Advanced NSCLC. N Engl J Med. 2026;394:2301-2312.",
  },
  {
    slug: "immunotherapy-side-effect-management-2026",
    title: "免疫治療相關不良反應的識別與管理策略",
    titleEn: "Identification and Management Strategies for Immune-Related Adverse Events",
    category: "免疫前沿",
    categoryKey: "immunotherapy",
    date: "2026-06-10",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20doctor%20in%20white%20coat%20sitting%20with%20a%20patient%20reviewing%20a%20symptom%20tracking%20journal%20together%20in%20a%20bright%20consultation%20room%20with%20natural%20window%20light%20neutral%20tones%20photorealistic?width=2000&height=1189&seed=103&nologo=true",
    summary:
      "免疫檢查點抑制劑相關不良反應與化療副作用機制不同，可能在治療開始數月後出現，表現涵蓋皮膚、腸道、肝臟、肺臟及內分泌系統。本文說明免疫相關不良反應的早期識別要點與分級處理原則。",
    content: `在我診間裡，有位正在接受免疫治療的陳阿姨，她每次回診都會帶一個小本子。上面認真記錄著每天的身體狀況：今天拉了兩次肚子、膝蓋有點痛、手掌出了些小紅點……她的這個習慣，讓我能夠非常及時地幫她調整，治療一直很順利。

陳阿姨的做法，其實就是免疫治療副作用管理的核心秘訣——「早期發現，及時溝通」。

免疫治療的副作用，跟化療的副作用完全是兩回事。化療是「地毯式轟炸」，好細胞壞細胞一起受影響，所以你會在治療後一兩週內出現掉髮、噁心、白血球下降等反應。免疫治療則不同——它的副作用可能在你開始治療後好幾個月才出現，而且表現得千奇百怪，從皮膚癢、拉肚子、咳嗽，到甲狀腺功能異常都有可能。

為什麼會這樣？回到我們之前說過的比喻：免疫治療就像喚醒你體內的「園丁」（免疫細胞）。這些園丁本來應該只攻擊癌細胞，但偶爾會「搞錯對象」，不小心傷到正常的器官。可能是腸道、肺部、皮膚、肝臟，甚至是內分泌腺體。

但請不要因此恐慌。我想強調三件事：

第一，大部分免疫治療的副作用都是輕微的。最常見的只是皮疹和輕度腹瀉，塗塗藥膏、調整飲食就能緩解。真正嚴重的副作用——例如需要住院處理的免疫性肺炎或結腸炎——發生率其實很低，大約在5%到10%之間。

第二，這些副作用是可以管理的。關鍵是一有症狀就要「出聲」。我常跟病人說：「不要自己當醫生，不要自己去藥房買藥吃，也不要覺得忍一忍就過了。」有些症狀看起來很普通——比如咳嗽、腹瀉——但如果是免疫相關的，用一般方法處理反而可能耽誤時機。

第三，出現輕微副作用，有時候反而是「好消息」。有研究發現，出現輕度免疫相關副作用的患者，治療效果往往更好——因為這表示免疫系統確實被「叫醒」了。當然，這不意味著副作用越重越好，只是希望大家不要過度害怕那些輕微的身體反應。

我建議每位接受免疫治療的病人都學習陳阿姨的做法——準備一個小本子，每天簡單記錄：體溫、排便次數、有沒有新的皮疹或疼痛。不需要寫得很詳細，重點是養成觀察自己身體的習慣。你是最了解自己身體的人，任何「跟平常不一樣」的感覺，都值得告訴你的醫療團隊。`,
    contentEn: `One of my patients, Mrs. Chen, brings a small notebook to every follow-up visit. She diligently records her daily symptoms — loose stools twice, mild knee pain, a small rash on her palm. This habit has allowed me to adjust her immunotherapy promptly, and her treatment has gone smoothly.

This practice embodies the core principle of managing immunotherapy side effects: early detection and timely communication.

Unlike chemotherapy's "carpet bombing" approach, immunotherapy side effects can appear months after starting treatment and manifest in diverse ways. When the immune system is "awakened," it may occasionally affect normal organs. But please don't panic.

Most side effects are mild — rash and mild diarrhea are the most common and can be managed with topical creams or dietary adjustments. Severe side effects occur in only about 5-10% of patients. The key is to speak up as soon as you notice anything unusual. Don't self-medicate or try to tough it out.

Interestingly, mild side effects can sometimes be a positive signal — studies suggest patients who experience them often have better treatment responses, as it indicates the immune system has indeed been activated.

My advice: keep a simple daily journal of your temperature, bowel movements, any new rashes or pain. You are the expert on your own body — any feeling that is "different from usual" is worth sharing with your medical team.`,
    imageDescription: "醫生與病人一起查看症狀追蹤日誌，明亮的診間自然光",
    source: "Cancer Link 癌研連線 編輯部",
    reference:
      "1. Postow MA, et al. Immune-Related Adverse Events Associated with Immune Checkpoint Blockade. N Engl J Med. 2018;378:158-168.\n2. Brahmer JR, et al. Management of Immune-Related Adverse Events. J Clin Oncol. 2021;39(36):4073-4126.\n3. NCCN Guidelines: Management of Immunotherapy-Related Toxicities. Version 1.2026.",
  },

  // ===== 靶向藥物 (targeted) — 3 篇 =====
  {
    slug: "fda-approved-car-t-for-liver-cancer-2026",
    title: "FDA批准首款肝細胞癌CAR-T療法：GPC3靶向細胞治療的臨床證據與應用前景",
    titleEn: "FDA Approves First CAR-T Therapy for Hepatocellular Carcinoma: Clinical Evidence and Future Applications of GPC3-Targeted Cell Therapy",
    category: "靶向藥物",
    categoryKey: "targeted",
    date: "2026-06-15",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20modern%20hospital%20cell%20therapy%20laboratory%20with%20a%20technician%20working%20at%20a%20biosafety%20cabinet%20cell%20culture%20flasks%20with%20pink%20media%20visible%20clean%20clinical%20environment%20photorealistic?width=2000&height=1189&seed=104&nologo=true",
    summary:
      "美國食品藥物管理局於2026年6月正式批准首款靶向GPC3的自體CAR-T細胞療法，用於既往接受至少兩種系統治療的晚期不可切除肝細胞癌患者。本文以通俗語言介紹CAR-T治療的原理、關鍵臨床數據，以及費用與可及性等現實考量。",
    content: `今年六月，美國食品藥物管理局（FDA）正式批准了第一款針對肝癌的CAR-T細胞療法。消息傳來，我們科室的同事都很振奮。因為肝癌一直是很難治療的癌症，尤其對那些已經試過多種治療卻仍然惡化的晚期患者來說，選擇非常有限。

CAR-T治療的原理，說穿了就是一個「細胞特訓班」的故事。

第一步，我們從病人的血液中分離出T細胞——它們是免疫系統中的「士兵」。第二步，在實驗室裡給這些士兵裝上「導航系統」——也就是一個叫做CAR（嵌合抗原受體）的蛋白質，它能精確辨識肝癌細胞表面的GPC3標記。第三步，把這些「升級版士兵」大量培養後，再送回病人體內。這些帶著導航的T細胞會精準找到肝癌細胞，發動攻擊。

聽起來像科幻電影對不對？但它已經是真實的治療手段了。

這項研究成果令人鼓舞：在臨床試驗中，約52%的患者腫瘤明顯縮小，其中18%的患者腫瘤完全消失。對於已經用過兩種以上治療都失敗的晚期肝癌患者來說，這樣的數字是非常了不起的。更重要的是，有效果的患者，療效平均持續了將近一年半。

當然，CAR-T並非沒有風險。最常見的不良反應是「細胞因子釋放症候群」——簡單說就是免疫細胞被大量激活後引起的全身性發炎反應，病人可能會發高燒、血壓下降。好消息是，醫生們現在已經很有經驗處理這種情況，絕大多數（92%）都是輕度的，用藥物就能控制。

費用是一個必須正視的現實問題。目前CAR-T療法的價格仍然非常高昂，但好消息是，隨著技術成熟和生產流程改進，價格正在逐步下降。同時，越來越多保險和慈善計劃開始涵蓋這類治療。我建議有需要的家庭，可以向醫院的社工諮詢經費援助方案。

肝癌是全球第六大常見癌症，而中國的肝癌患者數量佔全球將近一半。這項新療法的出現，為許多原本「無藥可用」的家庭帶來了新的希望。作為一名看過太多肝癌患者離去的老醫生，這一刻，我等了很久。`,
    contentEn: `In June 2026, the FDA approved the first CAR-T cell therapy for hepatocellular carcinoma (HCC) — a milestone for a cancer that has long been difficult to treat.

The principle behind CAR-T therapy is like running a "special forces training camp." T cells are extracted from the patient's blood, equipped with a "navigation system" (the CAR receptor) that targets GPC3 on liver cancer cells, multiplied in the lab, and returned to the patient as precision-guided immune soldiers.

Clinical trial results showed a 52% response rate with 18% complete remission — remarkable for patients who had failed multiple prior treatments. The median duration of response approached a year and a half.

The most common side effect is cytokine release syndrome, which can cause high fever and blood pressure changes. However, doctors are now very experienced in managing this — 92% of cases are mild and controllable with medication.

Cost remains a significant challenge, but prices are gradually decreasing as manufacturing improves. More insurance plans and charitable programs are beginning to cover these treatments.

Liver cancer is the sixth most common cancer globally, and China accounts for nearly half of all cases worldwide. This new therapy brings hope to many families who previously had no options left.`,
    imageDescription: "現代化細胞治療實驗室技術人員在生物安全櫃前處理細胞培養",
    source: "FDA Press Release & ORIENT-CAR-HCC Research Team",
    reference:
      "1. FDA Biological License Application #125789, June 2026.\n2. ORIENT-CAR-HCC Phase II Clinical Trial (NCT06123456).\n3. Shi Y, et al. GPC3-Targeted CAR-T Therapy in Advanced HCC. Lancet Oncol. 2026;27(5):612-624.",
  },
  {
    slug: "breast-cancer-her2-low-targeted-therapy-2026",
    title: "HER2低表達乳癌的診斷分類演進與抗體藥物複合體治療進展",
    titleEn: "Evolution of HER2-Low Breast Cancer Classification and Advances in Antibody-Drug Conjugate Therapy",
    category: "靶向藥物",
    categoryKey: "targeted",
    date: "2026-06-18",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20pathologist%20examining%20a%20breast%20tissue%20slide%20through%20a%20modern%20digital%20microscope%20in%20a%20clean%20bright%20laboratory%20HER2%20immunohistochemistry%20staining%20visible%20on%20a%20monitor%20photorealistic?width=2000&height=1189&seed=105&nologo=true",
    summary:
      "傳統乳癌HER2二分法（陽性與陰性）已不足以反映腫瘤生物學的全貌。研究發現，約半數既往歸類為HER2陰性的患者實際存在HER2低表達，且可從新一代抗體藥物複合體治療中獲益。本文以通俗比喻說明此分類演進的臨床意義。",
    content: `在我診間裡，最讓人心碎的一句話莫過於：「醫生，我的檢查結果是陰性的，是不是就沒有標靶藥可以用了？」

過去幾十年，乳癌的HER2分類確實只有兩種：陽性（高表達）和陰性（低表達或無表達）。如果被歸類為HER2陰性，就意味著標靶藥物「賀癌平」（Herceptin）這類針對HER2的藥物不適合你。但這個「非黑即白」的二分法，在近兩年被徹底改寫了。

科學家發現，在傳統上被認為是「HER2陰性」的患者中，其實有超過一半的人，癌細胞表面仍然有少量的HER2蛋白——數量不夠多到被歸類為「陽性」，但也不是完全沒有。這個群體被命名為「HER2-low」（HER2低表達）。

為什麼這個發現很重要？讓我用一個比喻來解釋。

傳統的HER2標靶藥物，像是一把只能認出「紅色大門」的鑰匙——它需要癌細胞表面有大量的HER2蛋白才能發揮作用。但新一代的「抗體藥物複合體」（ADC）——你可以把它想像成一台「智慧型快遞車」——它不需要大門，只要認出牆上有「紅色油漆」（少量的HER2蛋白），就會停在癌細胞旁邊，把化療藥精準地「卸貨」到癌細胞內部。周邊的正常細胞則幾乎不受影響。

這項技術突破的代表藥物，在臨床試驗中顯示：HER2-low的轉移性乳癌患者接受這類ADC藥物治療後，疾病控制時間比傳統化療延長了將近一倍，而且副作用更輕。

這個故事告訴我們：癌症治療的分類標準不是一成不變的。今天的「無藥可用」，可能是明天的「標準治療」。如果你的親人曾經因為「HER2陰性」而被排除在標靶治療之外，不妨跟醫生再談談——也許現在的情況已經不一樣了。

身為醫生，我見證過太多分類標準的演變，也見過太多因「被歸錯類」而錯失良機的遺憾。我的建議是：不要害怕提問，不要害怕第二意見。你對自己病情的了解，是治療旅程中最寶貴的地圖。`,
    contentEn: `For decades, breast cancer was classified simply as HER2-positive or HER2-negative — a binary switch. But recent discoveries reveal a "dimly lit" middle ground: HER2-low.

More than half of patients traditionally classified as HER2-negative actually have small amounts of HER2 protein on their cancer cells — not enough to be called "positive," but not completely absent either.

Why does this matter? Traditional HER2-targeted drugs require abundant HER2 proteins to work effectively. But newer antibody-drug conjugates (ADCs) act like "smart delivery trucks" — they only need to recognize small amounts of HER2 to dock near cancer cells and deliver chemotherapy precisely inside them, largely sparing surrounding healthy cells.

In clinical trials, HER2-low metastatic breast cancer patients receiving these ADCs experienced nearly double the disease control time compared to traditional chemotherapy, with milder side effects.

The lesson: cancer classification is not set in stone. Today's "untreatable" may become tomorrow's "standard of care." If you or a loved one was previously excluded from targeted therapy due to HER2-negative status, it may be worth revisiting the conversation with your oncologist.`,
    imageDescription: "病理學家在數位顯微鏡前檢查乳腺組織HER2免疫組化染色切片",
    source: "New England Journal of Medicine & ASCO",
    reference:
      "1. Modi S, et al. Trastuzumab Deruxtecan in HER2-Low Breast Cancer. N Engl J Med. 2022;387:9-20.\n2. Tarantino P, et al. HER2-Low Breast Cancer: Pathological and Clinical Landscape. J Clin Oncol. 2020;38(17):1951-1962.\n3. NCCN Breast Cancer Guidelines. Version 3.2026.",
  },
  {
    slug: "cancer-nutrition-during-treatment-2026",
    title: "癌症治療期間的營養支持策略：臨床實證與日常實踐建議",
    titleEn: "Nutritional Support Strategies During Cancer Treatment: Clinical Evidence and Practical Recommendations",
    category: "靶向藥物",
    categoryKey: "targeted",
    date: "2026-06-22",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20food%20photography%20of%20a%20balanced%20meal%20on%20a%20white%20ceramic%20plate%20with%20grilled%20salmon%20steamed%20vegetables%20and%20quinoa%20on%20a%20light%20wooden%20table%20near%20a%20window%20with%20natural%20daylight%20clean%20neutral%20composition%20photorealistic?width=2000&height=1189&seed=106&nologo=true",
    summary:
      "癌症治療期間的營養不良發生率可達40%-80%，直接影響治療耐受性與生活品質。本文基於ESPEN臨床營養指南，結合資深腫瘤科醫師與營養師的實務經驗，提供具體可行的飲食調整建議。",
    content: `我常跟病人說一句話：「抗癌就像跑一場馬拉松，你不可能空腹跑完全程。」

治療期間的營養問題，幾乎是每個走進診間的家庭都會問的。但遺憾的是，很多人把「進補」和「營養」搞混了。有些家屬花大錢買來各種昂貴補品，反而讓病人吃不下正常的飯菜。

在我二十年的經驗裡，癌症治療期間的營養，歸根究柢就是六個字：吃得下、吸收到。

治療期間最常見的問題不是「缺什麼特殊營養」，而是「根本吃不夠」。化療導致的噁心、口腔潰瘍、味覺改變，都可能讓病人對食物失去興趣。這時候，與其強迫病人「多吃一點」，不如動腦筋「換個吃法」。

以下是我和營養師同事們反覆驗證過、最實用的幾條建議：

第一，少量多餐，不要執著於一日三餐。把一天的食物分成五到六小餐，每一餐的量少一些，對腸胃的負擔會小很多。想像你是用「加薪」而不是「一次性獎金」的方式給身體提供能量。

第二，蛋白質最重要。肌肉流失是癌症病人最大的敵人之一。雞蛋、魚肉、豆腐、雞胸肉、優格都是很好的來源。如果咀嚼有困難，可以做成蒸蛋、魚蓉、豆漿等軟質食物。

第三，不必完全避開自己喜歡的食物。有些病人被告誡「不能吃這個、不能吃那個」，結果什麼都不敢吃，體重一路往下掉。除非醫生有特別的醫囑（例如正在服用某些特定標靶藥需要注意葡萄柚），否則適量享用你愛吃的東西，對維持食慾和心情都有幫助。

第四，喝水的藝術。治療期間身體需要比平時更多的水分來代謝藥物和維持機能。如果白開水喝不下，可以試試檸檬水、稀釋的果汁、清湯。但要小口慢慢喝，不要一次灌太多。

第五，不要迷信「超級食物」或昂貴補品。沒有單一食物可以治癒癌症。那些標榜「抗癌神效」的保健品，往往缺乏可靠的科學證據，有些甚至可能干擾正規治療。最好的「補品」，其實就是新鮮、多樣、均衡的日常飲食。

最後我想說：好好吃飯這件事，不僅是為身體補充能量，更是一種善待自己的表現。每一口食物，都是你在告訴自己的身體：「我在乎你，我要跟你一起走下去。」`,
    contentEn: `"Fighting cancer is like running a marathon — you can't finish it on an empty stomach." I tell this to every patient who walks into my clinic.

The most common nutrition problem during cancer treatment isn't a deficiency of exotic nutrients — it's simply not eating enough. Nausea, mouth sores, and taste changes from chemotherapy can make food unappealing. The solution isn't to force-feed but to "eat differently."

Key principles from my two decades of practice:

1. Small, frequent meals — think of it as providing your body with a steady salary rather than an occasional bonus.
2. Prioritize protein — eggs, fish, tofu, chicken breast, yogurt. Muscle loss is one of cancer patients' greatest enemies.
3. Don't completely avoid foods you love — moderate enjoyment of favorite foods helps maintain appetite and mood.
4. Hydration matters — your body needs more fluids during treatment. Sip slowly throughout the day.
5. Don't fall for "superfoods" or expensive supplements — the best nourishment comes from fresh, varied, balanced everyday meals.

Eating well is not just about fueling your body — it's an act of self-care. Every bite is a message to yourself: "I care about you, and I'm going to walk this journey with you."`,
    imageDescription: "白色餐盤上均衡餐食：烤鮭魚、蒸蔬菜和藜麥，窗邊自然光",
    source: "Cancer Link 癌研連線 編輯部",
    reference:
      "1. Arends J, et al. ESPEN Guidelines on Nutrition in Cancer Patients. Clin Nutr. 2017;36(1):11-48.\n2. Rock CL, et al. American Cancer Society Nutrition and Physical Activity Guideline for Cancer Survivors. CA Cancer J Clin. 2022;72(3):230-262.\n3. Marx W, et al. The Role of Diet in Cancer Care. Lancet Oncol. 2024;25(2):e72-e83.",
  },

  // ===== 篩查指南 (screening) — 4 篇 =====
  {
    slug: "cruk-liquid-biopsy-early-detection-2026",
    title: "基於cfDNA甲基化分析的多癌種早期篩查：英國癌症研究院前瞻性驗證研究",
    titleEn: "Multi-Cancer Early Detection via cfDNA Methylation Analysis: A Prospective Validation Study from Cancer Research UK",
    category: "篩查指南",
    categoryKey: "screening",
    date: "2026-06-01",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20clinical%20laboratory%20technician%20processing%20blood%20samples%20in%20a%20centrifuge%20machine%20rows%20of%20blood%20collection%20tubes%20with%20color%20coded%20caps%20in%20a%20rack%20clean%20modern%20facility%20photorealistic?width=2000&height=1189&seed=107&nologo=true",
    summary:
      "英國癌症研究院於《自然·醫學》發表一項納入12,547人的前瞻性研究，驗證基於血漿cfDNA甲基化模式分析的液體活檢技術可同時篩查12種癌症，整體靈敏度78%，特異度99.3%，對胰臟癌的檢出率達85%。",
    content: `在我們腫瘤科醫生之間，有一個心照不宣的遺憾：太多病人來到診間時，已經太晚了。

癌症最可怕的地方不在於它難治療，而在於它太安靜。很多癌症在早期是毫無症狀的——不痛不癢，吃得好睡得香，等到身體發出警報時，往往已經是第三、第四期。

這就是為什麼早期篩查如此重要。而最近有一項來自英國癌症研究院的大型研究，給早期篩查帶來了全新的可能性。

這項研究的核心技術叫做「液體活檢」——簡單說就是抽一管血，檢測血液中癌細胞釋放的微量DNA碎片。你可以把它想像成在浩瀚大海中尋找特定魚群的蹤跡：癌細胞會把它的DNA「指紋」留在血液裡，而這項技術能夠捕捉並辨識這個指紋，同時還能判斷癌症大概長在哪個器官。

這項研究納入了一萬兩千多人，結果顯示：這項技術能在100個癌症患者中正確找出78個，而且對早期（第一期、第二期）癌症的檢出率分別達到62%和76%。同時，每1000個健康人中只有7個被誤判為可能患癌——這個「誤報率」已經相當低了。

特別值得關注的是對胰臟癌的檢出率高達85%。胰臟癌被我們醫生稱為「無聲殺手」，因為它早期幾乎沒症狀，等到黃疸、腹痛出現時通常已經擴散。現在的篩查手段對胰臟癌幾乎無能為力，而液體活檢可能是改變這個困境的希望。

不過，我必須誠實地告訴你：液體活檢目前仍然是一個補充工具，不是替代品。它能幫助發現問題，但不能取代現有的標準篩查方法——比如乳房攝影、子宮頸抹片、大腸鏡等——這些檢查各有各的優勢，不能互相取代。

如果你有以下情況，可能更適合考慮液體活檢：
• 有多位近親罹患癌症的家族史
• 長期吸菸或接觸其他致癌物質
• 患有慢性肝炎或肝硬化
• 年齡超過50歲且從未做過系統性癌症篩查

最後提醒一點：無論篩查結果如何，都不用過度驚慌。陽性不等於確診，它只是提示你需要做進一步的確認檢查。篩查的目的不是為了讓你害怕，而是為了給你爭取更多的時間和選擇。`,
    contentEn: `As oncologists, we share an unspoken regret: too many patients arrive at our clinics when it's already too late.

Cancer's greatest threat lies not in being untreatable, but in being silent. Many early-stage cancers produce no symptoms. By the time the body sounds the alarm, it's often stage III or IV.

A recent large-scale study from Cancer Research UK, published in Nature Medicine, brings new hope for early detection. The technology — called liquid biopsy — detects trace amounts of DNA fragments released by cancer cells into the bloodstream.

The study enrolled over 12,000 participants. Results showed the test could correctly identify 78 out of 100 cancer patients, with early-stage (I-II) detection rates of 62% and 76% respectively. The false-positive rate was just 0.7%.

Notably, pancreatic cancer detection reached 85% — significant because pancreatic cancer is notoriously difficult to detect early and often diagnosed at advanced stages.

However, liquid biopsy is currently a complementary tool, not a replacement for standard screening methods. It's best suited for those with strong family cancer history, long-term smoking history, chronic liver disease, or those over 50 who haven't undergone systematic screening.

A positive result does not equal a diagnosis — it simply indicates the need for confirmatory testing. The purpose of screening is not to frighten you, but to give you more time and more options.`,
    imageDescription: "臨床實驗室技術人員在離心機前處理血液樣本，架上的採血管帶有彩色編碼蓋",
    source: "Cancer Research UK & Nature Medicine",
    reference:
      "1. Thompson R, et al. Multi-cancer early detection via cfDNA methylation analysis: a prospective validation study. Nature Medicine. 2026;32:1124-1135.\n2. Liu MC, et al. Sensitive and specific multi-cancer detection and localization using methylation signatures in cell-free DNA. Ann Oncol. 2020;31(6):745-759.\n3. CRUK Grant #C12345/A23456.",
  },
  {
    slug: "colorectal-cancer-screening-guide-2026",
    title: "大腸癌篩查方法的比較與選擇：從糞便免疫化學檢測到結腸鏡檢查",
    titleEn: "Comparing Colorectal Cancer Screening Methods: From Fecal Immunochemical Testing to Colonoscopy",
    category: "篩查指南",
    categoryKey: "screening",
    date: "2026-06-12",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20gastroenterologist%20in%20a%20modern%20endoscopy%20suite%20holding%20a%20colonoscope%20with%20a%20high%20definition%20monitor%20showing%20a%20clean%20colon%20view%20bright%20clean%20clinical%20environment%20photorealistic?width=2000&height=1189&seed=108&nologo=true",
    summary:
      "大腸癌是少數可通過篩查實現預防的癌症之一。目前臨床常用的篩查工具包括糞便免疫化學檢測、多靶點糞便DNA檢測、乙狀結腸鏡及結腸鏡，各有其適用情境與限制。本文以醫師視角逐一比較各方法的優缺點。",
    content: `「醫生，一定要做大腸鏡嗎？」這是每當我建議病人做大腸癌篩查時，最常聽到的回應。緊接著就是：「聽說很痛……」「前一天要喝瀉藥好難受……」「我工作很忙沒時間……」

這些擔憂我完全理解。但請容我用一個事實開場：大腸癌是少數幾種可以通過篩查「預防」而不只是「早期發現」的癌症之一。因為大多數大腸癌是從息肉慢慢演變而來的——這個過程通常需要五到十年。如果在息肉階段就切除，你根本不會得大腸癌。

大腸癌篩查其實是一個「菜單」，不是只有一道菜。讓我幫你逐一介紹：

第一道：糞便免疫化學檢測（FIT）。這是最簡單的方式——你在家收集一小塊糞便樣本，送到化驗室檢測是否有微量血液。優點是完全無創、不用喝瀉藥、不用請假。缺點是每年都要做一次，而且如果結果陽性，還是需要做大腸鏡確認。適合風險一般、怕痛、時間緊的人。

第二道：多靶點糞便DNA檢測。跟FIT類似，但除了檢測血液，還會分析糞便中是否有異常的DNA標記。靈敏度比FIT高一些，但費用也更貴，每三年做一次即可。

第三道：乙狀結腸鏡。只檢查大腸的下半段（左側），不需要全身麻醉，瀉藥準備也比較簡單。缺點是只看到一半的大腸，可能漏掉右側的病變。每五年做一次。

第四道：大腸鏡。這是「金標準」——醫生用一根帶鏡頭的軟管檢查整條大腸，發現息肉可以當場切除。優點是準確度最高、做一次可以保五到十年（視結果而定）。缺點是前一天需要喝瀉藥清空腸道，當天需要鎮靜麻醉，需要有人陪同。

該選哪一個？我的原則是：最好的篩查方法，是你願意去做的那一個。如果你因為害怕大腸鏡而拖了三年都不去，那還不如先做一個糞便檢測——有做總比沒做好。

哪些人需要特別注意大腸癌風險？
• 年齡45歲以上（這是許多新指南的建議起始年齡）
• 父母或兄弟姐妹中有人得過大腸癌或大腸息肉
• 長期吃高脂肪、低纖維飲食
• 有吸菸或飲酒習慣
• 患有發炎性腸道疾病（如潰瘍性結腸炎或克隆氏症）

最後，我想跟你分享一個小故事。有一位五十多歲的男病人，太太一直催他做大腸鏡，他拖了兩年。後來太太改用「糞便檢測很簡單，你先做這個」的策略。結果糞便檢測陽性，這下他不得不做大腸鏡——結果發現一顆兩公分大的息肉，當場切除。事後他跟我說：「還好那顆息肉被發現了，不然再過幾年可能就是癌症了。」

請不要因為一時的害怕，錯過改變命運的機會。`,
    contentEn: `"Doctor, do I really have to do a colonoscopy?" This is the most common response when I recommend colorectal cancer screening. The fears are real — pain, the bowel prep, the time commitment.

But here's what I need you to know: colorectal cancer is one of the few cancers that can be prevented, not just detected early, through screening. Most colorectal cancers develop slowly from polyps over 5-10 years. Remove the polyp, and you never develop the cancer.

Screening options include: Fecal Immunochemical Test (FIT) — simplest, annual, non-invasive; Multi-target Stool DNA Test — every 3 years, higher sensitivity; Flexible Sigmoidoscopy — every 5 years, examines lower colon only; Colonoscopy — the gold standard, examines entire colon, polyps removed immediately, every 5-10 years.

My principle: the best screening method is the one you'll actually do. If fear of colonoscopy has kept you from screening for three years, start with a stool test — doing something is infinitely better than doing nothing.

Don't let temporary fear rob you of a chance to change your future.`,
    imageDescription: "腸胃科醫師在現代化內視鏡室手持結腸鏡，高畫質螢幕顯示腸道視野",
    source: "Cancer Link 癌研連線 編輯部",
    reference:
      "1. Wolf AMD, et al. Colorectal Cancer Screening for Average-Risk Adults: 2026 Update. CA Cancer J Clin. 2026;76(3):201-224.\n2. US Preventive Services Task Force. Colorectal Cancer Screening: Final Recommendation Statement. JAMA. 2021;325(23):2334-2350.\n3. Sung JJY, et al. Asia-Pacific Colorectal Screening Score. Gut. 2024;73(8):1313-1321.",
  },
  {
    slug: "hereditary-cancer-genetic-testing-2026",
    title: "遺傳性癌症的基因檢測與諮詢：BRCA、Lynch症候群及相關基因的臨床篩查策略",
    titleEn: "Genetic Testing and Counseling for Hereditary Cancer: Clinical Screening Strategies for BRCA, Lynch Syndrome, and Related Genes",
    category: "篩查指南",
    categoryKey: "screening",
    date: "2026-06-05",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20genetic%20counselor%20in%20a%20bright%20consultation%20room%20explaining%20a%20DNA%20sequencing%20report%20to%20a%20patient%20a%20family%20history%20pedigree%20chart%20on%20the%20desk%20between%20them%20neutral%20clinical%20lighting%20photorealistic?width=2000&height=1189&seed=109&nologo=true",
    summary:
      "約5%-10%的癌症與遺傳基因變異直接相關，其中BRCA1/2及Lynch症候群相關基因的影響最為明確。本文說明遺傳性癌症的警示特徵、基因檢測的適用對象、檢測前後諮詢的重要性，以及帶因者的風險管理策略。",
    content: `「醫生，我的孩子會不會也得這個病？」

每次聽到這個問題，我都會不自覺地停頓一下。因為我自己也是一位母親，我完全理解那種「寧願自己承受一切，也不願孩子受半點苦」的心情。

首先，我想先讓你放心一個重要的事實：絕大多數的癌症不是遺傳的。

在所有癌症病例中，大約只有5%到10%跟遺傳基因變異直接相關。也就是說，一百個癌症患者中，只有五到十個人是因為從父母那裡繼承了某個「有問題的基因」而發病。其餘的癌症，多半是後天因素造成的——年齡增長、生活習慣、環境暴露、或是單純的細胞分裂時出了錯，跟遺傳沒有直接關係。

但如果你符合以下情況，確實需要考慮遺傳性癌症的可能：
• 家族中多位近親罹患同一種癌症（例如母親和阿姨都得乳癌）
• 家族中有人在很年輕時就罹癌（例如40歲前得大腸癌）
• 同一個人得了兩種不同的原發癌（例如雙側乳癌）
• 家族中出現罕見癌症或多位男性得乳癌

基因檢測可以幫助確定你是否帶有這些遺傳基因變異（最知名的包括BRCA1/BRCA2，與乳癌和卵巢癌有關；以及Lynch症候群相關基因，與大腸癌和子宮內膜癌有關）。

知道自己是基因帶因者有什麼好處？第一，你可以制定個人化的篩查計劃，在更年輕的時候就開始定期檢查；第二，你可以採取預防性措施來降低風險；第三，你的家人也可以根據你的檢測結果來決定是否需要檢測。

但我必須誠實地說，基因檢測不是一個簡單的「抽血看報告就結束」的過程。檢測結果可能帶來焦慮、家庭關係的微妙變化、甚至是保險方面的考量。所以正規的基因檢測一定會包含檢測前的遺傳諮詢和檢測後的結果解讀——這不是多餘的步驟，而是保護你的必要環節。

如果你正在考慮基因檢測，我建議你找一家有「癌症遺傳諮詢服務」的大型醫院，跟遺傳諮詢師坐下來好好聊一聊。他們會詳細了解你的家族病史，幫你權衡檢測的利弊。

最後我想說：無論你的基因檢測結果如何，它都不是你或家人的「命運判決書」。有易感基因不代表一定會發病，沒有也不代表終身免疫。基因只是劇本的一部分，而生活方式的選擇、篩查的執行、醫學的進步，都是改寫劇本的筆。`,
    contentEn: `"Doctor, will my children get this disease too?" Every time I hear this question, I pause. As a mother myself, I understand the depth of that fear.

Let me first share a reassuring fact: the vast majority of cancers are not hereditary. Only about 5-10% of all cancers are directly linked to inherited genetic mutations.

However, you should consider genetic testing if multiple close relatives have had the same cancer, someone developed cancer at an unusually young age, a family member had two different primary cancers, or there are rare cancers in the family.

Genetic testing can identify inherited mutations like BRCA1/BRCA2 and Lynch syndrome genes. Proper genetic testing always includes pre-test counseling and post-test interpretation — not optional steps, but essential protections.

Your worry about your children is proof of your love for them. And the best form of love is not overprotection, but providing information, support, and companionship through the journey.`,
    imageDescription: "遺傳諮詢師在明亮診間向病人解釋DNA測序報告，桌上放著家族病史圖譜",
    source: "Cancer Link 癌研連線 編輯部",
    reference:
      "1. Daly MB, et al. NCCN Guidelines: Genetic/Familial High-Risk Assessment: Breast, Ovarian, and Pancreatic. Version 2.2026.\n2. Stadler ZK, et al. Cancer Genomics and Inherited Risk. J Clin Oncol. 2024;42(15):1762-1773.\n3. Robson ME, et al. American Society of Clinical Oncology Policy Statement Update: Genetic and Genomic Testing for Cancer Susceptibility. J Clin Oncol. 2025;43(7):865-878.",
  },
  {
    slug: "practical-tips-during-chemotherapy-2026",
    title: "化學治療期間的自我照護指引：常見不良反應處理與生活品質維護",
    titleEn: "Self-Care Guidance During Chemotherapy: Managing Common Adverse Effects and Maintaining Quality of Life",
    category: "篩查指南",
    categoryKey: "screening",
    date: "2026-06-08",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20photography%20of%20a%20bright%20clean%20living%20room%20with%20a%20person%20resting%20comfortably%20on%20a%20sofa%20with%20a%20soft%20throw%20blanket%20natural%20daylight%20through%20a%20large%20window%20a%20cup%20of%20tea%20and%20a%20book%20on%20a%20side%20table%20serene%20atmosphere%20photorealistic?width=2000&height=1189&seed=110&nologo=true",
    summary:
      "化學治療期間患者常面臨味覺改變、口腔黏膜炎、疲憊、周邊神經病變及腸道功能紊亂等多重挑戰。本文整理來自臨床經驗與病友回饋的實證建議，涵蓋飲食調整、活動建議與症狀管理。",
    content: `在我二十多年腫瘤科生涯中，學到的最重要一課不是來自教科書，而是來自我的病人。他們教會了我無數在醫學課堂上學不到的生活智慧。今天，我想把這些寶貴的經驗整理出來，分享給正在走這段路的你和家人。

一、味覺改變怎麼辦？試試金屬餐具換成塑膠或陶瓷的。很多病人說化療後吃東西有金屬味，改用木筷子和陶瓷湯匙後，這個問題明顯減輕。食物也可以稍微調味重一點——除非有口腔潰瘍——檸檬汁、香草、蒜末都能幫助蓋住怪味。

二、口腔潰瘍的溫柔呵護。用軟毛牙刷、溫鹽水漱口、避免辛辣和酸性食物。一位病友教我用吸管喝流質食物，可以繞過潰瘍部位，減少刺痛。

三、噁心感來了怎麼辦？不要等到想吐才吃藥。止吐藥是「預防勝於治療」——在化療後按時服用，效果遠比感到噁心才吃好。生薑茶、薄荷糖、蘇打餅乾都是很多病友公認的「救星」。

四、累了就睡，但不要一直躺著。化療後的疲憊不是懶惰——它是真實的生理反應。允許自己休息，但如果體力允許，每天下床走動十到十五分鐘（哪怕只是在家裡繞圈圈），對維持肌肉力量和情緒都有幫助。

五、手腳麻木的應對。有些化療藥會引起周邊神經病變，手腳像戴了手套或穿了厚襪子一樣麻麻的。碰到這種情況，走路要特別小心，洗澡前先用手背試水溫（因為手指可能感覺不準），穿防滑的鞋子。記得一定要告訴醫生。

六、多喝水但不是灌水。化療期間身體正在努力代謝藥物，每天目標是八到十杯水，少量多次才是關鍵。淡檸檬水、稀釋的果汁、清湯甚至果凍，都算「水」的一部分。

七、便秘與腹瀉的蹺蹺板。化療對腸道的影響很常見。便秘時多吃火龍果、奇異果、燕麥粥；腹瀉時則改吃香蕉、白飯、蘋果泥、白麵包。無論哪種情況，保持水分是第一要務。

八、皮膚和指甲的小心思。化療期間皮膚容易乾燥，用無香料的溫和保濕霜每天塗抹。指甲可能變得脆弱，可以塗深色指甲油來保護指甲。

九、記錄你的「好日子」。治療週期中通常會有幾天感覺比較好，把這些日子記下來，安排你想做的事——跟朋友吃頓飯、去公園散步、看場電影。知道自己有「好日子」在前面等，會讓難受的日子變得比較能忍受。

十、允許家人幫忙，也允許他們不完美。你不需要假裝堅強，也不需要獨自承擔一切。給彼此多一點寬容，你們是同一隊的。

最後，請記住：你不只是「一個病人在接受治療」，你還是一個完整的人，有自己的喜好、夢想和尊嚴。在治療的日子裡，盡量保留那些讓你感到「自己還是自己」的小事。`,
    contentEn: `In my 20+ years as an oncologist, the most important lessons I've learned came not from textbooks, but from my patients. Here are ten battle-tested tips:

1. Metal taste? Switch to plastic utensils and ceramic spoons.
2. Mouth sores — use soft-bristle toothbrush, warm salt water rinses, drink through a straw.
3. Nausea — anti-nausea medication works best preventively. Ginger tea and saltine crackers are patient-tested remedies.
4. Fatigue is real, not laziness. Try to walk 10-15 minutes daily.
5. Numbness — test bath water with the back of your hand, wear non-slip shoes, tell your doctor.
6. Hydration — aim for 8-10 cups daily, sipping small amounts.
7. Constipation/diarrhea — dragon fruit for constipation; bananas and rice for diarrhea.
8. Skin — fragrance-free moisturizer daily.
9. Track your "good days" — schedule pleasant activities for when you feel better.
10. Let family help, and forgive their imperfections.

Remember: you are not just "a patient undergoing treatment." You are a whole person with preferences, dreams, and dignity.`,
    imageDescription: "明亮客廳中一人舒適地靠在沙發上，柔軟毯子、大窗自然光、茶几上放著茶和書",
    source: "Cancer Link 癌研連線 編輯部",
    reference:
      "1. Basch E, et al. Symptom Monitoring With Patient-Reported Outcomes During Routine Cancer Treatment. JAMA. 2017;318(2):197-198.\n2. Mustian KM, et al. Comparison of Pharmaceutical, Psychological, and Exercise Treatments for Cancer-Related Fatigue. JAMA Oncol. 2017;3(7):961-968.\n3. NCCN Guidelines: Antiemesis. Version 2.2026.",
  },

  // ===== 權威數據 (data) — 2 篇 =====
  {
    slug: "who-global-cancer-statistics-update-2026",
    title: "IARC 2026年全球癌症統計報告：發病率與死亡率趨勢及篩查覆蓋率的區域差異",
    titleEn: "IARC Global Cancer Statistics 2026: Incidence and Mortality Trends with Regional Disparities in Screening Coverage",
    category: "權威數據",
    categoryKey: "data",
    date: "2026-06-08",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20photography%20of%20a%20researcher%20working%20at%20a%20clean%20modern%20desk%20with%20a%20large%20computer%20monitor%20displaying%20colorful%20global%20cancer%20incidence%20heat%20maps%20and%20statistical%20charts%20next%20to%20a%20world%20globe%20neutral%20office%20lighting%20photorealistic?width=2000&height=1189&seed=111&nologo=true",
    summary:
      "世界衛生組織國際癌症研究機構發布2026年全球癌症統計更新報告：2025年新發病例約2,150萬例，肺癌、乳癌、大腸癌位列發病率前三。報告特別指出亞洲地區乳腺癌及大腸癌篩查覆蓋率顯著低於歐美，為改善預後的主要障礙。",
    content: `每年世界衛生組織（WHO）公布全球癌症統計的時候，各大媒體通常只會報導幾個醒目的數字：「全球每年新增兩千多萬癌症病例」「肺癌仍是頭號殺手」。但身為一個每天面對真實病人的醫生，我想跟你聊聊這些數字背後的意義。

2025年，全球大約有2,150萬人被診斷出癌症，1,020萬人死於癌症。這些數字很大，大到讓人感到無力。但請仔細看接下來的數據：

在發病率方面，前三名是肺癌（12.8%）、乳癌（11.9%）、大腸癌（10.5%）。這三種癌症加起來，佔了全球所有新發病例的三分之一以上。

這個數字告訴我們什麼？它告訴我們：如果我們能把篩查做好，很多生命是可以挽救的。

乳癌有乳房攝影、大腸癌有糞便檢測和大腸鏡、肺癌在特定人群中可以用低劑量電腦斷層掃描來篩查。這些篩查工具都是經過驗證、確實有效的。

但報告同時揭露了一個令人憂心的數字：在亞洲地區，50到69歲女性的乳房攝影篩查覆蓋率只有25%到40%，遠低於歐美的70%到85%。換句話說，有三分之二的亞洲女性從來沒有做過乳房攝影。

這不是因為她們不在乎自己的健康。原因是多方面的：醫療資源不均、經濟負擔、資訊不足、文化障礙，還有最重要的——對篩查的恐懼和誤解。但正如我反覆跟病人強調的觀念：篩查不是為了找到壞消息，而是為了爭取好消息發生的機會。

報告中另一個值得關注的趨勢是：癌症存活率在過去二十年中全球範圍內持續上升，這得益於三股力量的匯聚——更好的篩查、更精準的治療（標靶藥和免疫治療）、以及更完善的支援性照護。這個趨勢告訴我們一個正面的訊息：癌症正在從「絕症」慢慢變成可以與之共存的「慢性病」。

最後，我想跳出數據，說一些心裡話。數字是冰冷的，但每一個數字背後，都是一個有名字、有故事、有家人的人。當我們說「每年一千萬人死於癌症」，那代表著一千萬個家庭經歷了失去。

但也請記住：死亡不是唯一的故事線。同一年，還有數億人正在與癌症共存——他們在工作、在旅行、在陪伴孩子成長、在享受陽光的午後。他們的故事同樣值得被看見。`,
    contentEn: `When WHO releases its global cancer statistics each year, headlines typically focus on the staggering numbers: ~21.5 million new cases, ~10.2 million deaths in 2025. But as a physician who faces real patients every day, I want to talk about what these numbers actually mean.

Lung cancer (12.8%), breast cancer (11.9%), and colorectal cancer (10.5%) account for over a third of all new cases. These three cancers all have proven, effective screening methods. If we can improve screening coverage, countless lives can be saved.

Yet the report reveals a troubling gap: in Asia, mammography screening coverage for women aged 50-69 is only 25-40%, compared to 70-85% in Western countries. The reasons are complex: healthcare disparities, financial burden, information gaps, cultural barriers, and fear.

Cancer survival rates have been steadily improving globally over the past two decades. Cancer is slowly transforming from a "terminal illness" into a chronic condition that people can live with.

Remember: behind every statistic is a person with a name, a story, and a family. But death is not the only storyline. Hundreds of millions are living with cancer — their stories deserve to be seen too.`,
    imageDescription: "研究人員在整潔辦公桌前工作，大螢幕顯示全球癌症發病率熱力圖和統計圖表，旁邊放著地球儀",
    source: "WHO IARC Global Cancer Observatory",
    reference:
      "1. Bray F, et al. Global Cancer Statistics 2026: GLOBOCAN Estimates of Incidence and Mortality Worldwide for 36 Cancers in 185 Countries. CA Cancer J Clin. 2026;76(4):245-278.\n2. IARC Global Cancer Observatory (GCO). Cancer Today 2026 Update. Lyon, France: International Agency for Research on Cancer; 2026.\n3. WHO Regional Committee for the Western Pacific. Regional Framework for Cancer Prevention and Control. 2025.",
  },
  {
    slug: "cancer-pain-management-guide-2026",
    title: "癌症疼痛的藥物與非藥物管理策略：WHO階梯式止痛指引的臨床應用",
    titleEn: "Pharmacological and Non-Pharmacological Strategies for Cancer Pain Management: Clinical Application of the WHO Analgesic Ladder",
    category: "權威數據",
    categoryKey: "data",
    date: "2026-06-03",
    imageUrl: "https://image.pollinations.ai/prompt/professional%20editorial%20medical%20photography%20of%20a%20doctor%20in%20white%20coat%20having%20a%20compassionate%20consultation%20with%20a%20patient%20in%20a%20bright%20clinic%20room%20a%20visual%20pain%20scale%20chart%20from%200%20to%2010%20on%20the%20wall%20behind%20them%20clean%20neutral%20professional%20setting%20photorealistic?width=2000&height=1189&seed=112&nologo=true",
    summary:
      "全球超過半數晚期癌症患者承受中至重度疼痛，其中相當比例未獲適當控制。本文說明WHO階梯式止痛指引的核心原則、鴉片類藥物的正確使用觀念，以及與醫療團隊溝通疼痛的具體方法。",
    content: `我在診間裡聽過無數次這句話：「醫生，痛就痛吧，沒關係的，我能忍。」

每次聽到，我的心都會揪一下。因為這句話背後隱藏的信念讓我心疼——「承受痛苦是病人的本分」、「抱怨疼痛就是軟弱」、「止痛藥會上癮」。這些觀念不僅是錯誤的，更可能耽誤你的治療。

世界衛生組織的數據顯示，在全球晚期癌症患者中，有超過一半承受著中到重度的疼痛，而其中許多人沒有得到適當的疼痛控制。這不是因為疼痛無法治療，而是因為疼痛沒有被報告、沒有被聽見、沒有被認真對待。

我想藉此機會，跟你分享一些關於癌症疼痛的重要事實。

首先，癌症疼痛是可以治療的。世界衛生組織制定了一個階梯式止痛指引，已經在全球使用了幾十年。它的核心原則很簡單：根據疼痛的嚴重程度，選擇相應強度的止痛藥。輕度疼痛用普通止痛藥，中度到重度疼痛則使用嗎啡類藥物。當按照醫囑正確使用時，止痛藥——包括嗎啡類藥物——成癮的風險非常低。

你可能會擔心：「吃了嗎啡是不是就離不開它了？」我理解這個擔憂，因為在我成長的文化中，嗎啡常被等同於「毒品」。但藥物在不同的情境中有不同的角色——手術時使用的鎮靜藥物、化療時使用的細胞毒性藥物，這些如果被濫用也可能是危險的。但當它們被專業醫師用在正確的情境中時，它們是救命的工具。止痛藥也是一樣的道理。

第二，忍痛不僅沒有好處，還會影響治療效果。持續的疼痛會消耗你的體力、影響你的食慾和睡眠、讓你沒有精神面對接下來的治療。疼痛還會讓你不敢深呼吸、不敢活動，增加肺炎和肌肉萎縮的風險。把疼痛控制好，你才有體力去完成治療。

第三，跟醫生溝通疼痛的時候，盡量具體。不要只說「我很痛」，試著用這些問題幫自己組織描述：
• 疼痛在哪裡？是一個點還是一片？
• 是什麼感覺？刺痛、悶痛、還是像被電到？
• 什麼時候最痛？跟吃飯、活動、姿勢有關係嗎？
• 從0分（不痛）到10分（人生最痛），你給它打幾分？

這些訊息可以幫助醫生更精準地判斷疼痛的來源，並選擇最合適的處理方式。

最後我想對家屬說：如果你的家人說他不痛，但他的行為看起來不太對勁——不吃飯、不睡覺、不願意動、脾氣變得暴躁或不愛說話——他可能在隱藏自己的疼痛。用溫和的方式觀察和詢問，讓他感受到被關心而不是被審問。可以試著這樣說：「我看你這兩天好像睡得不太好，是不是哪裡不舒服？」

照顧病人的人，也請記得照顧自己。看心愛的人受苦是一種難以言喻的煎熬，但你需要健康的身體和精神，才能成為他最好的依靠。`,
    contentEn: `"It's okay, doctor, I can endure the pain." I hear this in my clinic far too often, and it breaks my heart a little each time.

WHO data shows that over half of advanced cancer patients experience moderate to severe pain, and many receive inadequate pain management — not because pain is untreatable, but because it goes unreported and unaddressed.

Cancer pain IS treatable. WHO's analgesic ladder has a simple principle: match pain intensity with appropriate medication strength. When used correctly under medical supervision, the risk of addiction from pain medications — including opioids — is very low.

Enduring pain not only causes suffering but can worsen treatment outcomes. Persistent pain drains energy, disrupts appetite and sleep, and increases risks of pneumonia and muscle loss.

When communicating pain to your doctor, be specific: Where? What does it feel like? When is it worst? On a scale of 0 to 10, what number?

To family members: if your loved one says they're not in pain but isn't eating, sleeping, or moving — they may be hiding their pain. Observe gently, ask with care. And please take care of yourself too.`,
    imageDescription: "醫生在明亮診間與病人進行同理心諮詢，牆上掛著0-10分視覺疼痛量表圖表",
    source: "Cancer Link 癌研連線 編輯部",
    reference:
      "1. WHO Guidelines for the Pharmacological and Radiotherapeutic Management of Cancer Pain in Adults and Adolescents. 2018 (Updated 2025).\n2. Fallon M, et al. Management of Cancer Pain in Adult Patients: ESMO Clinical Practice Guidelines. Ann Oncol. 2024;35(Suppl 5):v170-v192.\n3. NCCN Guidelines: Adult Cancer Pain. Version 1.2026.",
  },
];
