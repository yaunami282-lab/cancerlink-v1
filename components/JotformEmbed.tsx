import type { Dictionary } from "@/lib/i18n";

interface JotformEmbedProps {
  formId: string;
  title: string;
  description: string;
  formUrl?: string;
  extraFields?: React.ReactNode;
  dict: Dictionary["form"];
}

export default function JotformEmbed({
  formId,
  title,
  description,
  formUrl,
  extraFields,
  dict,
}: JotformEmbedProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-[#3a7d5a] text-white px-6 py-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-green-100 mt-1">{description}</p>
      </div>

      {extraFields && <div className="px-6 pt-4">{extraFields}</div>}

      <div className="p-6">
        {formUrl ? (
          <div className="rounded-xl overflow-hidden" style={{ minHeight: 600 }}>
            <iframe
              src={formUrl}
              title={title}
              className="w-full border-0"
              style={{ minHeight: 600 }}
              allow="camera; microphone; fullscreen"
            />
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50">
            <div className="text-4xl mb-3">📋</div>
            <p className="text-gray-500 text-sm mb-2">{dict.placeholderTitle}</p>
            <p className="text-xs text-gray-400">ID: {formId}</p>
            <div className="mt-6 space-y-4 max-w-md mx-auto text-left">
              {(["name", "phone", "email", "description"] as const).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {dict[field]} *
                  </label>
                  {field === "description" ? (
                    <textarea
                      disabled
                      rows={3}
                      placeholder={dict.placeholder.description}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 text-sm resize-none"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      disabled
                      placeholder={dict.placeholder[field]}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-400 text-sm"
                    />
                  )}
                </div>
              ))}
              <div className="pt-2">
                <button disabled className="w-full bg-gray-300 text-white font-medium py-2.5 rounded-lg cursor-not-allowed">
                  {dict.submit}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">{dict.privacyNote}</p>
      </div>
    </div>
  );
}
