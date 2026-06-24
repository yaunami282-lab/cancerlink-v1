/**
 * ClinicalTrials.gov API 数据同步接口
 *
 * 功能：从美国临床试验注册库 API 获取正在招募中的癌症相关试验
 * API文档：https://clinicaltrials.gov/api/v2/studies
 *
 * 使用方式：
 * - GET /api/trials — 获取缓存的试验数据
 * - POST /api/trials/sync — 手动触发同步（或由 Vercel Cron Jobs 自动调用）
 *
 * 筛选条件：
 * - status = RECRUITING（正在招募中）
 * - condition 包含癌症相关关键词
 *
 * 部署说明：
 * 1. 部署到 Vercel 后，可在 vercel.json 中配置 cron jobs 实现每周自动运行
 * 2. 也可在 Make.com 中设置定时 HTTP 请求调用此接口
 * 3. 实际生产环境中，建议将数据存储到 Vercel KV / Supabase / MongoDB
 */

const CLINICAL_TRIALS_API = "https://clinicaltrials.gov/api/v2/studies";

const CANCER_KEYWORDS = [
  "cancer",
  "carcinoma",
  "tumor",
  "neoplasm",
  "malignancy",
  "leukemia",
  "lymphoma",
  "sarcoma",
  "melanoma",
  "glioma",
  "breast cancer",
  "lung cancer",
  "liver cancer",
  "colorectal cancer",
  "gastric cancer",
  "pancreatic cancer",
  "ovarian cancer",
  "prostate cancer",
];

interface ClinicalTrialAPIResponse {
  studies: Array<{
    protocolSection: {
      identificationModule: {
        nctId: string;
        briefTitle: string;
        officialTitle: string;
      };
      statusModule: {
        overallStatus: string;
        startDateStruct: { date: string };
      };
      descriptionModule: {
        briefSummary: string;
      };
      conditionsModule: {
        conditions: string[];
      };
      designModule: {
        phases: string[];
      };
      contactsLocationsModule: {
        locations: Array<{
          facility: string;
          city: string;
          country: string;
        }>;
      };
      sponsorCollaboratorsModule: {
        leadSponsor: {
          name: string;
        };
      };
      eligibilityModule: {
        eligibilityCriteria: string;
      };
    };
  }>;
  totalCount: number;
}

/**
 * 构建 API 请求 URL
 */
function buildTrialsAPIUrl(pageSize = 50): string {
  const params = new URLSearchParams({
    format: "json",
    pageSize: pageSize.toString(),
    "filter.overallStatus": "RECRUITING",
    "filter.advanced": CANCER_KEYWORDS.map((kw) => `AREA[Condition]${kw}`).join(
      " OR "
    ),
    // 只获取近期更新的试验
    "sort.column": "LastUpdatePostDate",
    "sort.direction": "desc",
  });

  return `${CLINICAL_TRIALS_API}?${params.toString()}`;
}

/**
 * 格式化 API 响应为前端可用格式
 */
function formatTrialData(raw: ClinicalTrialAPIResponse) {
  return raw.studies?.map((study) => {
    const p = study.protocolSection;
    return {
      nctId: p.identificationModule?.nctId ?? "",
      title:
        p.identificationModule?.briefTitle ??
        p.identificationModule?.officialTitle ??
        "",
      status: p.statusModule?.overallStatus ?? "",
      description: p.descriptionModule?.briefSummary ?? "",
      conditions: p.conditionsModule?.conditions ?? [],
      phase:
        p.designModule?.phases?.join(", ") ?? "Not Specified",
      locations:
        p.contactsLocationsModule?.locations?.map(
          (loc) => `${loc.facility}, ${loc.city}, ${loc.country}`
        ) ?? [],
      sponsor:
        p.sponsorCollaboratorsModule?.leadSponsor?.name ?? "Unknown",
      eligibility:
        p.eligibilityModule?.eligibilityCriteria ?? "See full listing",
      lastUpdated: p.statusModule?.startDateStruct?.date ?? "",
    };
  });
}

/**
 * GET /api/trials
 * 返回示例试验数据（生产环境改为从数据库读取）
 */
export async function GET() {
  try {
    // 在开发环境或没有外部数据库的情况下，返回示例结构
    // 生产环境：从 Vercel KV / Supabase 读取缓存数据
    const apiUrl = buildTrialsAPIUrl(20);

    return Response.json({
      success: true,
      message: "ClinicalTrials.gov API 接口已就绪",
      apiUrl,
      usage: {
        sync_endpoint: "POST /api/trials/sync — 触发数据同步",
        cron_schedule: "建议每周运行：0 0 * * 0（每周日凌晨）",
        vercel_cron_config:
          '在 vercel.json 中添加 cron jobs 配置即可自动运行',
      },
      sampleQuery: apiUrl,
      note: "当前返回 API 配置信息。在生产环境中，此接口将返回缓存的临床试验数据。可调用 POST /api/trials/sync 触发同步。",
    });
  } catch (error) {
    return Response.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * POST /api/trials/sync
 * 手动触发数据同步（也可由 cron job 自动调用）
 */
export async function POST() {
  try {
    const apiUrl = buildTrialsAPIUrl(100);
    console.log(`[ClinicalTrials Sync] Fetching: ${apiUrl}`);

    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent": "CancerLink/1.0 (medical research platform)",
      },
    });

    if (!response.ok) {
      throw new Error(
        `ClinicalTrials.gov API returned ${response.status}: ${response.statusText}`
      );
    }

    const data: ClinicalTrialAPIResponse = await response.json();
    const formatted = formatTrialData(data);

    console.log(
      `[ClinicalTrials Sync] Fetched ${formatted?.length ?? 0} trials (total: ${data.totalCount})`
    );

    // 生产环境：将 formatted 数据存入数据库
    // await db.trials.upsertMany(formatted);

    return Response.json({
      success: true,
      totalCount: data.totalCount,
      fetched: formatted?.length ?? 0,
      syncedAt: new Date().toISOString(),
      message: "数据同步成功",
      // 生产环境移除 sampleData，直接返回 formatted
      sampleData: formatted?.slice(0, 3) ?? [],
    });
  } catch (error) {
    console.error("[ClinicalTrials Sync] Error:", error);
    return Response.json(
      {
        success: false,
        error: String(error),
        message: "数据同步失败，请检查网络连接与 API 可用性",
      },
      { status: 500 }
    );
  }
}
