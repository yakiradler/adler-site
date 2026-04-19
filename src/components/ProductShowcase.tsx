import Image from "next/image";
import FadeIn from "./FadeIn";

const models = [
  {
    tag: "The Minimalist",
    name: "Compact",
    size: "24.5 × 18.5 × 12.5 cm",
    desc: "לאלו שצריכים רק את הבסיס — ולא מתפשרים על הגנה.",
    img: "/product/lifestyle-3.png",
    contain: true,
    features: ["זוג תפילין בודד", "מראת תפילין מובנית", "כיס לצדקה וסידור כיס"],
    variant: "dark",
  },
  {
    tag: "Most Popular",
    name: "Standard",
    size: "32.0 × 22.5 × 12.0 cm",
    desc: "האיזון המושלם. תפילין, טלית, סידור — הכל מאורגן ומוגן.",
    img: "/product/bag-closeup.jpg",
    contain: false,
    features: ["תפילין + טלית", "פאנל ארגון נשלף", "כיסי קונטרסים וסידור"],
    variant: "light",
  },
  {
    tag: "Rashi & Rabbeinu Tam",
    name: "Double",
    size: "39.0 × 27.0 × 13.0 cm",
    desc: "שני זוגות, הגנה כפולה. הפתרון היחיד לשוק.",
    img: "/product/bag-flat.jpg",
    contain: false,
    features: ["2 זוגות תפילין", "הגנה כפולה", "תא טלית מורחב"],
    variant: "dark",
  },
];

export default function ProductShowcase() {
  return (
    <section id="models" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-zinc-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>Three levels of protection</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6">בחר את המגן שלך</h2>
            <p className="text-zinc-400 text-xl">שלוש רמות הגנה. מגן אחד מנצח.</p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {models.map((m, i) => (
            <FadeIn key={m.name} delay={0.1 * i}>
              <div
                className={`rounded-[40px] overflow-hidden grid md:grid-cols-5 min-h-[360px] ${
                  i % 2 !== 0 ? "md:[direction:ltr]" : ""
                }`}
              >
                {/* Image — 3 cols */}
                <div className={`md:col-span-3 relative min-h-[280px] md:min-h-0 ${i % 2 !== 0 ? "md:order-2" : ""} ${m.contain ? "bg-zinc-800" : ""}`}>
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={m.contain ? "object-contain p-10" : "object-cover"}
                  />
                  {!m.contain && <div className={`absolute inset-0 ${m.variant === "light" ? "bg-white/10" : "bg-black/40"}`} />}
                  {/* Floating badge */}
                  <div className="absolute top-6 right-6">
                    <span
                      className="bg-black/60 backdrop-blur text-white text-xs px-4 py-2 rounded-full border border-white/10"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {m.tag}
                    </span>
                  </div>
                </div>

                {/* Content — 2 cols */}
                <div
                  className={`md:col-span-2 p-10 md:p-12 flex flex-col justify-center ${
                    m.variant === "light" ? "bg-zinc-100 text-black" : "bg-zinc-900 text-white"
                  } ${i % 2 !== 0 ? "md:order-1" : ""}`}
                  dir="rtl"
                >
                  <h3
                    className="text-5xl font-extrabold mb-2 tracking-tight"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {m.name}
                  </h3>
                  <p className={`text-sm mb-4 ${m.variant === "light" ? "text-zinc-400" : "text-zinc-500"}`}>
                    {m.size}
                  </p>
                  <p className={`text-lg mb-8 leading-relaxed ${m.variant === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                    {m.desc}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {m.features.map((f) => (
                      <li key={f} className={`flex items-center gap-3 text-base ${m.variant === "light" ? "text-zinc-600" : "text-zinc-300"}`}>
                        <span className={`text-xs ${m.variant === "light" ? "text-black" : "text-zinc-500"}`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#packages"
                    className={`inline-block text-center py-4 px-8 rounded-2xl font-bold text-base transition-all hover:scale-[1.02] ${
                      m.variant === "light"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    אני רוצה מגן {m.name === "Compact" ? "קומפקט" : m.name === "Standard" ? "סטנדרט" : "דאבל"}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
