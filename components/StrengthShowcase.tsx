import Image from "next/image";

export default function StrengthShowcase() {
  return (
    <section className="relative bg-white">
      {/* 上方微弱漸層分隔線 */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#52b788]/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <Image
          src="/images/landscape.jpg"
          alt="Cancer Link 实力展示"
          width={2560}
          height={1429}
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="w-full h-auto rounded-2xl shadow-sm"
        />
      </div>
    </section>
  );
}
