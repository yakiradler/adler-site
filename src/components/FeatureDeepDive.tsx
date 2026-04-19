import Image from "next/image";
import { Shield, LayoutGrid, Droplets } from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
  {
    icon: Shield,
    tag: "Feature 01",
    title: "תפילדנית ברמה אחרת — EVA Hard-Shell",
    desc: "לא עוד פחד ממעיכה. המעטפת הקשיחה של ADLER בנויה מ-EVA בצפיפות גבוהה — אותו חומר בשימוש בציוד צבאי וספורטיבי מקצועי. הלחץ עוצר כאן. לא מגיע לתפילין.",
    bullets: ["עמיד לחבטות ולחץ ישיר", "שומר על צורתו גם בתיק דחוס", "קל במשקל — לא מוסיף עומס"],
    img: "/product/product-1.png",
    contain: true,
    flip: false,
  },
  {
    icon: LayoutGrid,
    tag: "Feature 02",
    title: "מודולריות DIY 2026",
    desc: "כל אחד מניח קצת אחרת. לכן ADLER מאפשר לך לעצב את הפנים בדיוק לפי הצורך שלך. פאנל מחיצות נשלף, תאים גמישים, כל שינוי לוקח שניות.",
    bullets: ["מחיצות נשלפות לכל הגדרה", "תא נפרד לטלית, סידור, ועוד", "ניתן לשינוי ללא כלים"],
    img: "/product/product-5.png",
    contain: true,
    flip: true,
  },
  {
    icon: Droplets,
    tag: "Feature 03",
    title: "Oxford 1680D — עמיד למים",
    desc: "גשם, טל הבוקר, שתייה שנשפכת — לא עניינך יותר. בד אוקספורד 1680D עם ציפוי PU יוצר מחסום מלא לכל לחות. מה שבתוך ADLER — נשאר יבש.",
    bullets: ["ציפוי PU עמיד מלא", "נבדק בתנאי לחות קיצוניים", "קל לניגוב ולניקוי"],
    img: "/product/product-3.png",
    contain: true,
    flip: false,
  },
];

export default function FeatureDeepDive() {
  return (
    <section className="bg-zinc-950 py-8 px-6">
      <div className="max-w-7xl mx-auto space-y-4">
        {features.map((f, i) => (
          <FadeIn key={f.tag} delay={0.1}>
            <div
              className={`rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[480px] ${
                f.flip ? "md:[direction:ltr]" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${f.flip ? "md:order-2" : ""}`}>
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={f.contain ? "object-contain p-8" : "object-cover"}
                />
                <div className={`absolute inset-0 ${f.contain ? "bg-zinc-950" : "bg-black/30"}`} style={{ zIndex: -1 }} />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Text */}
              <div
                className={`bg-zinc-900 p-12 flex flex-col justify-center ${
                  f.flip ? "md:order-1" : ""
                }`}
                dir="rtl"
              >
                <span
                  className="text-zinc-500 text-xs tracking-widest uppercase mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {f.tag}
                </span>
                <h3 className="text-3xl font-bold mb-5">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8 text-lg">{f.desc}</p>
                <ul className="space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-zinc-300">
                      <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
