"use client";

import { useState, type ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123")) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("密碼錯誤");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7fbf7]">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-sm">
          <h1 className="text-xl font-bold text-[#3a7d5a] mb-6 text-center">🔐 後台管理</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="請輸入管理密碼"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#52b788] focus:ring-2 focus:ring-[#52b788]/20 outline-none text-sm mb-3"
          />
          {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-[#3a7d5a] hover:bg-[#2b5e43] text-white font-medium py-2.5 rounded-xl transition-all"
          >
            登入
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
