import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Vision() {
  return (
    <section id="vision" className="bg-white text-black py-20 md:py-40 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          {/* Logo — מרכזי, לא דומיננטי */}
          <div className="flex justify-center mb-16">
            <Image
              src="/product/logo.jpg"
              alt="ADLER Tefillin Bags"
              width={160}
              height={89}
              className="object-contain opacity-85"
            />
          </div>

          <h2 className="text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-16">
            די להתפשר על תיקי בד שתפסו אבק עוד בשנות ה-90.
          </h2>
          <div className="h-px w-24 bg-zinc-200 mx-auto mb-16" />
          <p className="text-3xl md:text-5xl font-bold text-zinc-400 italic">
            מגן תפילין. ברמה אחרת.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
