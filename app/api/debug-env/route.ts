/**
 * 診斷端點：檢查環境變數是否被 Vercel 正確注入
 * 僅顯示 Key 是否存在，不暴露實際值
 */
export async function GET() {
  const keys = [
    "DEEPSEEK_API_KEY",
    "ANTHROPIC_API_KEY",
  ];

  const result: Record<string, { exists: boolean; length: number }> = {};

  for (const key of keys) {
    const value = process.env[key];
    result[key] = {
      exists: Boolean(value),
      length: value ? value.length : 0,
    };
  }

  return Response.json({
    message: "Env var diagnostics",
    totalEnvKeys: Object.keys(process.env).length,
    envKeys: Object.keys(process.env).filter(k => k.includes("KEY") || k.includes("DEEP") || k.includes("ANTHROPIC")).slice(0, 20),
    checked: result,
  });
}
