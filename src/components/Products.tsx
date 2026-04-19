import FadeIn from "./FadeIn";

const products = [
  {
    tag: "The Minimalist",
    name: "Compact",
    size: "24.5 x 18.5 x 12.5 cm",
    features: [
      "זוג תפילין בודד",
      "מראת תפילין מובנית",
      "כיס לצדקה וסידור כיס",
      "תפילדנית ברמה אחרת — EVA קשיח",
      "עמיד למים",
    ],
    variant: "dark" as const,
  },
  {
    tag: "Most Popular",
    name: "Standard",
    size: "32.0 x 22.5 x 12.0 cm",
    features: [
      "זוג תפילין + טלית",
      "פאנל ארגון נשלף",
      "כיסי קונטרסים וסידור",
      "מחיצות מודולריות",
      "כל היתרונות של Compact",
    ],
    variant: "light" as const,
  },
  {
    tag: "Rashi & Rabbeinu Tam",
    name: "Double",
    size: "39.0 x 27.0 x 13.0 cm",
    features: [
      "מקום ל-2 זוגות תפילין",
      "הגנה כפולה בתיק אחד",
      "תא טלית מורחב",
      "מחיצת הפרדה קשיחה",
      "כל היתרונות של Standard",
    ],
    variant: "dark" as const,
  },
];

export default function Products() {
  return (
    <section id="models" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              בחר את ה-ADLER שלך
            </h2>
            <p className="text-xl text-zinc-500">
              שלוש רמות של הגנה הנדסית
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const isLight = p.variant === "light";
            return (
              <FadeIn key={p.name} delay={0.2 * (i + 1)}>
                <div
                  className={`rounded-[40px] p-10 flex flex-col h-full transition-all ${
                    isLight
                      ? "bg-zinc-100 text-black shadow-2xl md:scale-105 relative z-10"
                      : "bg-zinc-900/50 border border-white/5 hover:border-white/15"
                  }`}
                >
                  <span
                    className={`text-xs uppercase tracking-widest mb-2 ${
                      isLight ? "text-zinc-400" : "text-zinc-500"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {p.tag}
                  </span>
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {p.name}
                  </h3>
                  <p className={`text-sm mb-8 ${isLight ? "text-zinc-400" : "text-zinc-500"}`}>
                    {p.size}
                  </p>

                  <ul className="space-y-4 mb-12 flex-grow">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-center gap-2 text-[15px] ${
                          isLight
                            ? "text-zinc-600 font-medium"
                            : "text-zinc-300"
                        }`}
                      >
                        <span className={isLight ? "text-black" : "text-zinc-500"}>
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`w-full py-4 rounded-2xl font-bold text-center block hover:scale-[1.02] transition-transform ${
                      isLight
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    הזמן עכשיו
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
