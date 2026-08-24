import Image from "next/image";

export default function StrengthShowcase() {
  return (
    <section className="w-full">
      <Image
        src="/images/landscape.jpg"
        alt="Cancer Link 实力展示"
        width={2560}
        height={1429}
        sizes="100vw"
        className="block w-full h-auto"
      />
    </section>
  );
}
