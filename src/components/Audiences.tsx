import FadeIn from "./FadeIn";

const audiences = [
  {
    num: "01",
    title: "לוחמים ומטיילים",
    tag: "קהל ה-Outdoor והביטחון",
    desc: "תפילדנית ברמה אחרת — EVA קשיח ועמיד למים שהופך את התיק לציוד לחימה לכל דבר. הגנה פיזית בתנאי קיצון.",
  },
  {
    num: "02",
    title: "מתנות ואירועים",
    tag: "חתנים ובר-מצווה",
    desc: "מתנה מרשימה וחדשנית. ה-Wow Factor של עיצוב 2026. נגמר העידן של מוצרי ג'ודאיקה גנריים.",
  },
  {
    num: "03",
    title: "אנשי עסקים ונוסעים",
    tag: "הקהל הפרקטי",
    desc: "מראה מקצועי, מודולריות וחלוקה חכמה. נגמרו נרתיקי הבד המרופטים בתוך תיקי המחשב.",
  },
  {
    num: "04",
    title: 'רש"י ורבנו תם',
    tag: "הקהל המחמיר",
    desc: "דגם ה-Double מעניק הגנה הנדסית כפולה במינימום נפח. שני זוגות, תיק אחד.",
  },
  {
    num: "05",
    title: "Early Adopters",
    tag: "המאמצים המוקדמים",
    desc: "חדשנות משבשת בעולם תשמישי הקדושה. הצהרה של סגנון וקדמה.",
  },
];

export default function Audiences() {
  return (
    <section id="audiences" className="bg-white text-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              למי זה מתאים?
            </h2>
            <p className="text-zinc-500 text-xl">
              ADLER נותן מענה מדויק לצרכים של כל לקוח
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
          {audiences.map((a, i) => (
            <FadeIn key={a.title} delay={0.1 * (i + 1)}>
              <div className="bg-zinc-100 rounded-3xl p-8 hover:-translate-y-1 transition-transform h-full">
                <span className="text-xs font-bold text-zinc-400 tracking-widest mb-4 block" style={{ fontFamily: "var(--font-inter)" }}>{a.num}</span>
                <h4 className="text-xl font-bold mb-1">{a.title}</h4>
                <span className="text-sm text-zinc-500 mb-3 block">{a.tag}</span>
                <p className="text-zinc-600 text-[15px] leading-relaxed">{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
