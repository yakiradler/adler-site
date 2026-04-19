import Image from "next/image";
import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <Image
        src="/product/bag-flat.jpg"
        alt="ADLER background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold text-white/20 mb-4 tracking-tighter italic" style={{ fontFamily: "var(--font-inter)" }}>
            2026 IS HERE
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-12 leading-tight">
            התפילין שלך יקרות מדי<br />בשביל אלתורים.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#packages"
              className="bg-white text-black px-14 py-5 rounded-full font-black text-xl hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.15)]"
            >
              אני רוצה מגן ADLER
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white px-12 py-5 rounded-full font-semibold text-lg hover:border-white/60 transition-all"
            >
              שאל שאלה
            </a>
          </div>
          <p className="text-zinc-500 text-sm mt-8">
            ✓ משלוח מהיר &nbsp;·&nbsp; ✓ ערבות 30 יום &nbsp;·&nbsp; ✓ שירות אישי
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
