import { Shield, LayoutGrid, Droplets } from "lucide-react";
import FadeIn from "./FadeIn";

const specs = [
  {
    icon: Shield,
    title: "תפילדנית ברמה אחרת — EVA",
    desc: "מעטפת Hard-Shell קשיחה השומרת על צורת התיק ומונעת כל לחיצה על בתי התפילין.",
  },
  {
    icon: LayoutGrid,
    title: "מודולריות 2026",
    desc: "מערכת מחיצות DIY המאפשרת לך לעצב את פנים התיק בדיוק לפי הצורך האישי שלך.",
  },
  {
    icon: Droplets,
    title: "חסינות מוחלטת",
    desc: "בד אוקספורד 1680D דוחה מים ואבק. הציוד היקר לך נשאר יבש ומוגן בכל תנאי שטח.",
  },
];

export default function Specs() {
  return (
    <section id="specs" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">
            הנדסת קצה בכל פרט
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {specs.map((s, i) => (
            <FadeIn key={s.title} delay={0.2 * (i + 1)}>
              <div className="p-10 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all group">
                <s.icon className="w-12 h-12 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
