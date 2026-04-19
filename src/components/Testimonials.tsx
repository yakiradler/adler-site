import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "יוסי כהן",
    role: "לוחם שייטת, מילואימניק",
    text: "הולך איתי לכל מבצע. כבר שנה שה-ADLER נוסע בתיק הקרב שלי ולא נגע שם כלום. זה הפתרון שחיפשתי.",
    stars: 5,
  },
  {
    name: "מאיר לוי",
    role: "אבא לחתן",
    text: "קנינו לבן שלנו ל-ADLER לחתונה. הוא מיד שאל 'מאיפה הבאתם את זה?!' כולם בחתונה רצו לדעת. מתנה שתישאר לו לכל החיים.",
    stars: 5,
  },
  {
    name: "דוד שטיינברג",
    role: "יועץ עסקי, נוסע תכוף",
    text: "סוסף טיסות בשבוע. עד ה-ADLER הרגשתי לא בסדר עם התיק הבד הישן שלי. עכשיו זה חלק מהמראה המקצועי שלי.",
    stars: 5,
  },
  {
    name: "אברהם גרוסמן",
    role: "ראש כולל, ירושלים",
    text: "הדאבל הוא פלא. שני זוגות תפילין, הטלית, הסידור — הכל יחד, הכל מוגן. ממליץ לכל בחורי הכולל.",
    stars: 5,
  },
  {
    name: "שמואל ברק",
    role: "תרמילאי, עשר שנות טיולים",
    text: "ירדן, אמזונס, הרי האנדים — ה-ADLER עבר הכל. הוא ספוג בגשם, נפל, נלחץ. התפילין יצאו מושלמות כל פעם.",
    stars: 5,
  },
  {
    name: "נחמיה פרידמן",
    role: "מנהל ישיבה, בני ברק",
    text: "קנינו 20 יחידות לסיום הישיבה. הנחת קבוצה מדהימה, שירות אישי, המתנות יצאו מפוארות. מומלץ בחום.",
    stars: 5,
  },
];

function InitialAvatar({ name }: { name: string }) {
  const initial = name.charAt(0);
  return (
    <div className="w-11 h-11 rounded-full bg-zinc-700 border border-white/10 flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold text-sm">{initial}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-zinc-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>Social Proof</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">מה הלקוחות אומרים</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[1,2,3,4,5].map(s => (
                <span key={s} className="text-yellow-400 text-2xl">★</span>
              ))}
              <span className="text-zinc-400 text-sm mr-3">4.9 מתוך 5 — 500+ ביקורות</span>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.08 * i}>
              <div className="bg-zinc-900 rounded-3xl p-7 border border-white/5 hover:border-white/10 transition-all h-full flex flex-col">
                <div className="flex items-center gap-1 mb-5">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed flex-grow mb-6 text-[15px]">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <InitialAvatar name={t.name} />
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-zinc-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
