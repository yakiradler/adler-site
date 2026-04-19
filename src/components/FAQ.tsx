"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "כמה זמן לוקח למשלוח להגיע?",
    a: "משלוח רגיל 3-5 ימי עסקים. משלוח מהיר 1-2 ימים (תוספת תשלום). הכל ממשלוח ישיר מהמחסן שלנו בישראל.",
  },
  {
    q: "האם ניתן לבצע חריטה אישית?",
    a: "כן! בחבילת Ultimate ובהזמנות מעל 3 יחידות ניתן לחרוט שם, ראשי תיבות, או פסוק. יש לציין בטופס ההזמנה.",
  },
  {
    q: 'האם הדאבל מחזיק גם תפילין של רש"י ורבנו תם?',
    a: 'בדיוק לשם כך עוצב. שני תאים עצמאיים, כל אחד עם ריפוד נפרד. גם אם שניהם גדולים (כגון תפילין מהודרות) — יש מקום.',
  },
  {
    q: "האם הוא עמיד לגשם אמיתי?",
    a: "בד אוקספורד 1680D עם ציפוי PU עומד בגשם ישיר. לא מומלץ לטבילה במים, אבל בכל שימוש יומיומי — מושלם לחלוטין.",
  },
  {
    q: "מה גודל התפילין המקסימלי שנכנס?",
    a: "ה-Compact מתאים לתפילין עד מידה 32 ממ\"מ. Standard וDouble מתאימים לכל גודל כולל תפילין גסות ומהודרות.",
  },
  {
    q: "האם אפשר לרכוש לאנשים אחרים כמתנה?",
    a: "כמובן! כל ADLER מגיע באריזת מתנה מוכנה. ניתן לציין כתובת נמען שונה ולהוסיף כרטיס ברכה.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-zinc-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">שאלות נפוצות</h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div
                className="bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-right cursor-pointer"
                >
                  <span className="font-semibold text-white text-base">{f.q}</span>
                  <span className="flex-shrink-0 mr-4 text-zinc-400">
                    {open === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-5">
                    {f.a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
