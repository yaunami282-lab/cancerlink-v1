"use client";

import { useState, useRef } from "react";
import type { Dictionary } from "@/lib/i18n";

interface ReportAnalysisFormProps {
  title: string;
  description: string;
  dict: Dictionary["form"];
}

export default function ReportAnalysisForm({
  title,
  description,
  dict,
}: ReportAnalysisFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    location: "",
    phone: "",
    cancerType: "",
    diagnosisDate: "",
    geneticTest: "",
    currentTreatment: [] as string[],
    chronicDisease: [] as string[],
    conditionDescription: "",
  });
  
  const [selectedFiles, setSelectedFiles] = useState<{
    report: File | null;
    other: File | null;
  }>({ report: null, other: null });
  
  const reportFileInputRef = useRef<HTMLInputElement>(null);
  const otherFileInputRef = useRef<HTMLInputElement>(null);
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category: "currentTreatment" | "chronicDisease", value: string) => {
    setFormData(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };
  
  const handleFileChange = (
    type: "report" | "other",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFiles(prev => ({ ...prev, [type]: e.target.files![0] }));
    }
  };
  
  const removeFile = (type: "report" | "other") => {
    setSelectedFiles(prev => ({ ...prev, [type]: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const formDataObj = new FormData();
      formDataObj.append("serviceType", "report-analysis");
      
      // 添加基本字段
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formDataObj.append(key, JSON.stringify(value));
        } else if (value !== null && value !== undefined) {
          formDataObj.append(key, String(value));
        }
      });
      
      // 添加文件
      if (selectedFiles.report) {
        formDataObj.append("reportFile", selectedFiles.report);
      }
      if (selectedFiles.other) {
        formDataObj.append("otherRecordsFile", selectedFiles.other);
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

  const ra = dict.reportAnalysis;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-[#3a7d5a] text-white px-6 py-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-green-100 mt-1">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Q1: Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q1} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={ra.placeholder.name}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          />
        </div>

        {/* Q2: Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q2} <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                required
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="w-4 h-4 text-[#3a7d5a]"
              />
              <span className="text-sm text-gray-700">{ra.gender.male}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                required
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="w-4 h-4 text-[#3a7d5a]"
              />
              <span className="text-sm text-gray-700">{ra.gender.female}</span>
            </label>
          </div>
        </div>

        {/* Q3: Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q3} <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="age"
            required
            value={formData.age}
            onChange={handleChange}
            placeholder={ra.placeholder.age}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          />
        </div>

        {/* Q4: Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q4} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder={ra.placeholder.location}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          />
        </div>

        {/* Q5: Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q5} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={ra.placeholder.phone}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          />
        </div>

        {/* Q6: Cancer Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q6} <span className="text-red-500">*</span>
          </label>
          <select
            name="cancerType"
            required
            value={formData.cancerType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          >
            <option value="">請選擇</option>
            <option value="breast">{ra.cancerType.breast}</option>
            <option value="lung">{ra.cancerType.lung}</option>
            <option value="liver">{ra.cancerType.liver}</option>
            <option value="gi">{ra.cancerType.gi}</option>
            <option value="leukemia">{ra.cancerType.leukemia}</option>
            <option value="lymphoma">{ra.cancerType.lymphoma}</option>
            <option value="other">{ra.cancerType.other}</option>
          </select>
        </div>

        {/* Q7: Diagnosis Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q7} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="diagnosisDate"
            required
            value={formData.diagnosisDate}
            onChange={handleChange}
            placeholder={ra.placeholder.diagnosisDate}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all"
          />
        </div>

        {/* Q8: Genetic Test */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q8} <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="geneticTest"
                value="yes"
                required
                checked={formData.geneticTest === "yes"}
                onChange={handleChange}
                className="w-4 h-4 text-[#3a7d5a]"
              />
              <span className="text-sm text-gray-700">{ra.geneticTest.yes}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="geneticTest"
                value="no"
                required
                checked={formData.geneticTest === "no"}
                onChange={handleChange}
                className="w-4 h-4 text-[#3a7d5a]"
              />
              <span className="text-sm text-gray-700">{ra.geneticTest.no}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="geneticTest"
                value="notSure"
                required
                checked={formData.geneticTest === "notSure"}
                onChange={handleChange}
                className="w-4 h-4 text-[#3a7d5a]"
              />
              <span className="text-sm text-gray-700">{ra.geneticTest.notSure}</span>
            </label>
          </div>
        </div>

        {/* Q9: Current Treatment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {ra.q9}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(ra.currentTreatment).map(([key, label]) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.currentTreatment.includes(key)}
                  onChange={() => handleCheckboxChange("currentTreatment", key)}
                  className="w-4 h-4 text-[#3a7d5a]"
                />
                <span className="text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q10: Chronic Disease */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {ra.q10}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(ra.chronicDisease).map(([key, label]) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.chronicDisease.includes(key)}
                  onChange={() => handleCheckboxChange("chronicDisease", key)}
                  className="w-4 h-4 text-[#3a7d5a]"
                />
                <span className="text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Q11: Condition Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {ra.q11}
          </label>
          <textarea
            name="conditionDescription"
            rows={4}
            value={formData.conditionDescription}
            onChange={handleChange}
            placeholder={ra.placeholder.conditionDescription}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm transition-all resize-none"
          />
        </div>

        {/* Q12: Upload Reports */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {ra.q12}
          </label>
          <input
            type="file"
            ref={reportFileInputRef}
            className="hidden"
            onChange={(e) => handleFileChange("report", e)}
          />
          {selectedFiles.report ? (
            <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">📄</span>
                <span className="text-sm text-gray-700">{selectedFiles.report.name}</span>
              </div>
              <button
                type="button"
                onClick={() => removeFile("report")}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => reportFileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#52b788] hover:bg-green-50 transition-all"
            >
              <span className="text-2xl">➕</span>
              <p className="text-sm text-gray-500 mt-2">{ra.placeholder.reportUpload}</p>
            </button>
          )}
        </div>

        {/* Q13: Other Records */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {ra.q13}
          </label>
          <input
            type="file"
            ref={otherFileInputRef}
            className="hidden"
            onChange={(e) => handleFileChange("other", e)}
          />
          {selectedFiles.other ? (
            <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">📄</span>
                <span className="text-sm text-gray-700">{selectedFiles.other.name}</span>
              </div>
              <button
                type="button"
                onClick={() => removeFile("other")}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => otherFileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#52b788] hover:bg-green-50 transition-all"
            >
              <span className="text-2xl">➕</span>
              <p className="text-sm text-gray-500 mt-2">{ra.placeholder.otherRecords}</p>
            </button>
          )}
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
