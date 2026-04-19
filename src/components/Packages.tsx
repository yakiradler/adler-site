import FadeIn from "./FadeIn";

const packages = [
  {
    label: "Basic",
    name: "חבילת הבסיס",
    price: 249,
    features: [
      "נרתיק ADLER Compact",
      "מעטפת EVA Hard Shell",
      "ריפוד Pearl Cotton",
      "אריזת מתנה בסיסית",
    ],
    featured: false,
  },
  {
    label: "Premium",
    name: "חבילת הפרימיום",
    price: 399,
    features: [
      "נרתיק ADLER Standard",
      "מחיצות מודולריות מתכווננות",
      "פאנל ארגון נשלף",
      "אריזת מתנה יוקרתית",
      "כרטיס ברכה מעוצב",
    ],
    featured: true,
  },
  {
    label: "Ultimate",
    name: "חבילת ה-Double",
    price: 549,
    features: [
      "נרתיק ADLER Double",
      "2 תאים עצמאיים",
      "כל היתרונות של Premium",
      "חריטת שם אישית",
      "אחריות מורחבת 3 שנים",
    ],
    featured: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              חבילות מכירה
            </h2>
            <p className="text-zinc-500 text-xl mb-8">
              בחר את החבילה שמתאימה לך
            </p>
            <div className="w-9 h-0.5 bg-gold mx-auto" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 max-w-[1100px] mx-auto mt-16">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.label} delay={0.15 * (i + 1)}>
              <div
                className={`rounded-[36px] p-10 flex flex-col h-full relative transition-all ${
                  pkg.featured
                    ? "bg-zinc-900 border border-gold"
                    : "bg-zinc-900 border border-white/5 hover:border-white/12"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
                    הכי פופולרי
                  </div>
                )}

                <span
                  className={`text-xs uppercase tracking-widest mb-2 ${
                    pkg.featured ? "text-gold" : "text-zinc-500"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {pkg.label}
                </span>

                <h3 className="text-2xl font-bold mb-5">{pkg.name}</h3>

                <div
                  className="text-5xl font-extrabold mb-8 tracking-tight"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <span className="text-xl font-semibold align-top mr-0.5">
                    &#8362;
                  </span>
                  {pkg.price}
                </div>

                <ul className="space-y-3 mb-10 flex-grow">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-zinc-400"
                    >
                      <span
                        className={`text-xs ${
                          pkg.featured ? "text-gold" : "text-zinc-600"
                        }`}
                      >
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-4 rounded-2xl font-bold text-center block transition-all ${
                    pkg.featured
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "border border-white/15 hover:border-white text-white"
                  }`}
                >
                  הזמן עכשיו
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Group CTA */}
        <FadeIn>
          <div className="max-w-3xl mx-auto mt-16 bg-zinc-900 rounded-3xl p-12 border border-white/5 text-center">
            <h3 className="text-2xl font-bold mb-3">
              הזמנה קבוצתית? מחירים מיוחדים.
            </h3>
            <p className="text-zinc-500 mb-8">
              מזמינים 5 יחידות ומעלה? מושלם לארגונים, ישיבות ואירועים.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-zinc-200 transition-colors"
            >
              דברו איתנו
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
