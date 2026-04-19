import FadeIn from "./FadeIn";

const stats = [
  { value: "500+", label: "לקוחות מרוצים" },
  { value: "3", label: "דגמים מנצחים" },
  { value: "100%", label: "עמיד למים" },
  { value: "30", label: "ימי ניסיון חינם" },
];

export default function StatsBar() {
  return (
    <section className="bg-zinc-950 border-y border-white/5 py-10 px-6">
      <FadeIn>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-4xl font-extrabold text-white mb-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {s.value}
              </div>
              <div className="text-zinc-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
