"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

interface ServiceFormProps {
  serviceType: "report-analysis" | "cancer-companion" | "genetic-testing";
  title: string;
  description: string;
  dict: Dictionary["form"];
  showFamilyHistory?: boolean;
  familyLabel?: string;
  familyDesc?: string;
}

export default function ServiceForm({
  serviceType,
  title,
  description,
  dict,
  showFamilyHistory = false,
  familyLabel = "",
  familyDesc = "",
}: ServiceFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [familyHistory, setFamilyHistory] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const formDataObj = new FormData();
      formDataObj.append("serviceType", serviceType);
      formDataObj.append("name", name.trim());
      formDataObj.append("phone", phone.trim());
      if (email.trim()) {
        formDataObj.append("email", email.trim());
      }
      formDataObj.append("description", desc.trim());
      if (showFamilyHistory) {
        formDataObj.append("familyHistory", String(familyHistory));
      }

      const res = await fetch("/api/submit", {
        method: "POST",
        body: formDataObj,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "提交失敗");
      }

      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setDesc("");
      setFamilyHistory(false);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "提交失敗，請稍後再試");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-[#3a7d5a] text-white px-6 py-4">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="p-10 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h4 className="text-xl font-bold text-[#3a7d5a] mb-2">提交成功！</h4>
          <p className="text-gray-500">我們將在24小時內與您聯絡，請保持電話暢通。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-[#3a7d5a] text-white px-6 py-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-green-100 mt-1">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* 家族病史 checkbox（僅 genetic-testing） */}
        {showFamilyHistory && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={familyHistory}
                onChange={(e) => setFamilyHistory(e.target.checked)}
                className="mt-0.5 w-4 h-4 text-[#3a7d5a] rounded border-gray-300 focus:ring-[#52b788]"
              />
              <div>
                <span className="font-semibold text-gray-900 text-sm">{familyLabel}</span>
                <p className="text-xs text-gray-500 mt-1">{familyDesc}</p>
              </div>
            </label>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {dict.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={dict.placeholder.name}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {dict.phone} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={dict.placeholder.phone}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{dict.email}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dict.placeholder.email}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {dict.description} <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder={dict.placeholder.description}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all resize-none"
          />
        </div>

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-600">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#3a7d5a] hover:bg-[#2b5e43] text-white font-medium py-3 rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "提交中…" : dict.submit}
        </button>
      </form>

      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">{dict.privacyNote}</p>
      </div>
    </div>
  );
}
