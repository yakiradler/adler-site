import Image from "next/image";
import FadeIn from "./FadeIn";

const audiences = [
  {
    num: "01",
    title: "הלוחם",
    desc: "שטח, מילואים, תרמילאות. ADLER הוא ציוד לחימה לכל דבר.",
    img: "/product/hero-main.jpg",
    cover: true,
  },
  {
    num: "02",
    title: "מתנת החיים",
    desc: "בר מצווה, חתן, סיום. ה-Wow Factor שמדברים עליו אחר כך.",
    img: "/product/lifestyle-2.png",
    cover: false,
  },
  {
    num: "03",
    title: "האיש העסקי",
    desc: "כל שבוע טיסה אחרת. ADLER מתאים לכל מסע.",
    img: "/product/lifestyle-3.png",
    cover: false,
  },
  {
    num: "04",
    title: "המחמיר",
    desc: 'דגם Double — שני זוגות רש"י ורבנו תם. הגנה כפולה, נפח אחד.',
    img: "/product/product-1.png",
    cover: false,
  },
  {
    num: "05",
    title: "ה-Early Adopter",
    desc: "להחזיק את הדבר הכי מתקדם. לפני כולם.",
    img: "/product/bag-closeup.jpg",
    cover: true,
  },
];

export default function AudiencesVisual() {
  return (
    <section id="audiences" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-zinc-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>For Everyone</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">למי זה מתאים?</h2>
            <p className="text-zinc-400 text-xl">כל אחד ואחד — מוצא את ה-ADLER שלו</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <FadeIn key={a.title} delay={0.08 * i}>
              <div className="group relative rounded-3xl overflow-hidden h-72 cursor-pointer bg-zinc-900">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`group-hover:scale-105 transition-transform duration-700 ${a.cover ? 'object-cover object-center' : 'object-contain p-6'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-7">
                  <span className="text-zinc-600 text-xs font-bold tracking-widest mb-2 block" style={{ fontFamily: "var(--font-inter)" }}>
                    {a.num}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {a.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
