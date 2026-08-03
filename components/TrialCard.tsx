import { ClinicalTrial } from "@/data/trials";
import type { Dictionary } from "@/lib/i18n";

const CANCER_STYLES: Record<
  string,
  { bg: string; border: string; badge: string; text: string; icon: string }
> = {
  breast: { bg: "bg-[#fce4ec]", border: "border-pink-200", badge: "bg-pink-100 text-pink-600", text: "text-pink-600", icon: "🎀" },
  lung: { bg: "bg-[#e3f2fd]", border: "border-blue-200", badge: "bg-blue-100 text-blue-600", text: "text-blue-600", icon: "🫁" },
  liver: { bg: "bg-[#e8f5e9]", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-600", text: "text-emerald-600", icon: "💚" },
  gi: { bg: "bg-[#fff3e0]", border: "border-orange-200", badge: "bg-orange-100 text-orange-600", text: "text-orange-600", icon: "🍃" },
  other: { bg: "bg-[#f3e5f5]", border: "border-purple-200", badge: "bg-purple-100 text-purple-600", text: "text-purple-600", icon: "🔬" },
};

export default function TrialCard({ trial, dict }: { trial: ClinicalTrial; dict: Dictionary["trials"] }) {
  const style = CANCER_STYLES[trial.cancerTypeKey] ?? CANCER_STYLES.other;
  const cancerLabel = dict.cancerTypes[trial.cancerTypeKey] ?? trial.cancerType;

  return (
    <div className={`${style.bg} ${style.border} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`${style.badge} text-xs font-semibold px-3 py-1 rounded-full`}>
          {style.icon} {cancerLabel}
        </span>
        <span className="text-xs font-bold text-white bg-[#52b788] px-2.5 py-1 rounded-full">
          {trial.phase}
        </span>
      </div>
      <h3 className="font-bold text-gray-900 mb-2 leading-snug line-clamp-2">{trial.title}</h3>
      <p className="text-xs text-gray-400 mb-1">{trial.titleEn}</p>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">{trial.description}</p>
      <div className="mb-4 text-xs">
        <span className="text-gray-400">{dict.status}</span>
        <p className="font-semibold text-green-600">{dict.statusRecruiting}</p>
      </div>
    </div>
  );
}
