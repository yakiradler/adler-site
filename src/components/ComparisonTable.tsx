import FadeIn from "./FadeIn";

const rows = [
  { feature: "הגנה מפני מעיכה", adler: true, old: false },
  { feature: "עמיד למים (1680D Oxford)", adler: true, old: false },
  { feature: "מחיצות מודולריות", adler: true, old: false },
  { feature: "ריפוד Pearl Cotton", adler: true, old: false },
  { feature: "צורה שנשמרת", adler: true, old: false },
  { feature: "מראה מקצועי", adler: true, old: false },
  { feature: "כיסי תכשיטים ופריטים קטנים", adler: true, old: false },
  { feature: "עמיד לחבטות", adler: true, old: false },
  { feature: "קל לניקוי", adler: true, old: false },
  { feature: "ניתן להזמנה עם חריטה", adler: true, old: false },
];

export default function ComparisonTable() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-zinc-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>Comparison</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">ADLER מול הפתרון הישן</h2>
            <p className="text-zinc-400 text-xl">ההבדל ברור. הבחירה ברורה.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl overflow-hidden border border-white/8">
            {/* Header */}
            <div className="grid grid-cols-3 bg-zinc-900 border-b border-white/8">
              <div className="p-5 text-zinc-500 text-sm font-medium">יכולת</div>
              <div className="p-5 text-center">
                <span className="font-extrabold text-white" style={{ fontFamily: "var(--font-inter)" }}>ADLER</span>
                <div className="text-zinc-500 text-xs mt-0.5">2026</div>
              </div>
              <div className="p-5 text-center">
                <span className="text-zinc-500 font-medium">נרתיק בד</span>
                <div className="text-zinc-600 text-xs mt-0.5">רגיל</div>
              </div>
            </div>

            {/* Rows */}
            {rows.map((r, i) => (
              <div
                key={r.feature}
                className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${
                  i % 2 === 0 ? "bg-zinc-900/40" : "bg-zinc-900/20"
                }`}
              >
                <div className="p-4 text-zinc-300 text-sm">{r.feature}</div>
                <div className="p-4 flex items-center justify-center">
                  <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black text-sm font-bold">
                    ✓
                  </span>
                </div>
                <div className="p-4 flex items-center justify-center">
                  <span className="w-7 h-7 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-600 text-sm font-bold">
                    ✕
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center mt-10">
            <a
              href="#packages"
              className="inline-block bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-colors"
            >
              אני רוצה ADLER
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
