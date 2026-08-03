"use client";

import { useState, useEffect } from "react";

const SERVICES = [
  { key: "report-analysis", label: "報告分析與研究配對" },
  { key: "cancer-companion", label: "腫瘤陪跑服務" },
  { key: "genetic-testing", label: "腫瘤基因檢測" },
];

interface Submission {
  submittedAt: string;
  name: string;
  phone: string;
  email: string;
  description: string;
  familyHistory?: boolean;
}

export default function SubmissionsPage() {
  const [service, setService] = useState("report-analysis");
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`/api/submissions?service=${service}`)
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) setData(json);
        else setError(json.error || "載入失敗");
      })
      .catch(() => setError("載入失敗"))
      .finally(() => setLoading(false));
  }, [service]);

  return (
    <div className="min-h-screen bg-[#f7fbf7] p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-[#3a7d5a] mb-6">📋 表單提交記錄</h1>

        {/* Tab 切換 */}
        <div className="flex gap-2 mb-6">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              onClick={() => setService(s.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                service === s.key
                  ? "bg-[#3a7d5a] text-white"
                  : "bg-white text-gray-600 hover:bg-[#f6faf7] border border-gray-200"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* 數據表格 */}
        {loading ? (
          <p className="text-gray-500">載入中…</p>
        ) : error ? (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-700 text-sm">{error}</div>
        ) : data.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-400">尚無提交記錄</div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">時間</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">姓名</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">電話</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">郵箱</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">需求描述</th>
                    {service === "genetic-testing" && (
                      <th className="text-left px-4 py-3 text-gray-500 font-medium">家族史</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{row.submittedAt?.slice(0, 10)}</td>
                      <td className="px-4 py-3 text-gray-900 font-medium">{row.name}</td>
                      <td className="px-4 py-3 text-gray-600">{row.phone}</td>
                      <td className="px-4 py-3 text-gray-600">{row.email}</td>
                      <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{row.description}</td>
                      {service === "genetic-testing" && (
                        <td className="px-4 py-3">{row.familyHistory ? "✅ 是" : "—"}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
