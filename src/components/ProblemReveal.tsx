import Image from "next/image";
import FadeIn from "./FadeIn";


export default function ProblemReveal() {
  return (
    <section className="bg-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-zinc-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>The Problem</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">זה מה שאתה עושה<br />לתפילין שלך.</h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">כל יום. שוב ושוב. בלי לשים לב.</p>
          </div>
        </FadeIn>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Before */}
          <FadeIn delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden group bg-zinc-900">
              <div className="relative h-80">
                <Image
                  src="/product/old-bag-1.png"
                  alt="תיק תפילין ישן"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="absolute bottom-0 right-0 left-0 p-8">
                <div className="inline-block bg-red-500/20 border border-red-500/40 rounded-full px-4 py-1 text-red-400 text-xs font-bold mb-3 uppercase tracking-wider">
                  לפני ADLER
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">תיק תפילין משנות ה-90</h3>
                <p className="text-zinc-500 text-sm">מעיכה, לחות, אבק. התפילין שלך לא מגיעות לזה.</p>
              </div>
            </div>
          </FadeIn>

          {/* After */}
          <FadeIn delay={0.25}>
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="relative h-80">
                <Image
                  src="/product/hero-main.jpg"
                  alt="ADLER case premium"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="absolute bottom-0 right-0 left-0 p-8">
                <div className="inline-block bg-white/10 border border-white/30 rounded-full px-4 py-1 text-white text-xs font-bold mb-3 uppercase tracking-wider">
                  עם ADLER
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">תפילדנית ברמה אחרת</h3>
                <p className="text-zinc-300 text-sm">הגנה מלאה. סטייל. כבוד לציוד הקדושה שלך.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
