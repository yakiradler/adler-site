import { Shield, RefreshCw, Headphones } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Guarantee() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="rounded-3xl border border-white/10 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-9 h-9 text-white opacity-70" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                ערבות 30 יום — ללא שאלות
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                לא מרוצה? מסיבה כלשהי? שלח חזרה תוך 30 יום וקבל החזר מלא.
                אנחנו בטוחים ב-ADLER — וסומכים עליך.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { Icon: RefreshCw, title: "החזר כספי מלא", desc: "תוך 30 יום, ללא שאלות" },
                  { Icon: Shield, title: "אחריות 3 שנים", desc: "על כל פגם ייצור" },
                  { Icon: Headphones, title: "שירות אישי", desc: "אחד על אחד עם הצוות" },
                ].map((g) => (
                  <div key={g.title} className="bg-white/5 rounded-2xl p-6">
                    <g.Icon className="w-6 h-6 text-white/50 mx-auto mb-3" />
                    <div className="font-bold text-white mb-1">{g.title}</div>
                    <div className="text-zinc-500 text-sm">{g.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
