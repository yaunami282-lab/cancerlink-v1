import { NextResponse } from "next/server";
import { readSheet } from "@/lib/googleSheets";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const serviceType = searchParams.get("service") || "report-analysis";

    const data = await readSheet(serviceType);
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
