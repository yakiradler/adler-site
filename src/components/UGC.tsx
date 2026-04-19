"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "./FadeIn";

const videos = [
  {
    id: 1,
    img: "/product/ugc-1.png",
    name: "אלון מ.",
    handle: "@alon.tefillin",
    caption: "סוף סוף תיק שמכבד את התפילין שלי",
    views: "12.4K",
    likes: "847",
    platform: "TikTok",
  },
  {
    id: 2,
    img: "/product/ugc-2.png",
    name: "יעקב ב.",
    handle: "@yaakov_bm",
    caption: "בר המצווה שלי — קיבלתי ADLER. הכי טוב שיש",
    views: "34.1K",
    likes: "2.1K",
    platform: "Reels",
  },
  {
    id: 3,
    img: "/product/ugc-3.png",
    name: "דוד ש.",
    handle: "@david.shul",
    caption: "מניח תפילין כל בוקר — עכשיו עם סטייל אמיתי",
    views: "8.7K",
    likes: "612",
    platform: "TikTok",
  },
  {
    id: 4,
    img: "/product/ugc-4.jpg",
    name: "צור ל.",
    handle: "@tzur.idf",
    caption: "גם בשטח — ה-ADLER לא זז. #מילואים #תפילין",
    views: "67.3K",
    likes: "5.4K",
    platform: "Reels",
  },
];

function VideoCard({ v, index }: { v: typeof videos[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={0.1 * index}>
      <div
        className="relative rounded-3xl overflow-hidden cursor-pointer group"
        style={{ aspectRatio: "9/16" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Thumbnail */}
        <Image
          src={v.img}
          alt={v.caption}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={`object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

        {/* Platform badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-bold bg-white/10 backdrop-blur border border-white/20 text-white px-2 py-1 rounded-full" style={{ fontFamily: "var(--font-inter)" }}>
            {v.platform}
          </span>
        </div>

        {/* Play button */}
        <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 ${hovered ? "opacity-100 scale-100" : "opacity-70 scale-90"}`}>
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-white fill-white mr-[-2px]" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          <div className="flex items-center gap-1 text-white/80 text-xs font-bold">
            <svg className="w-3 h-3 fill-white/70" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            {v.views}
          </div>
          <div className="flex items-center gap-1 text-white/80 text-xs font-bold">
            <svg className="w-3 h-3 fill-red-400" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            {v.likes}
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 right-0 left-0 p-4 z-10">
          <p className="text-white/60 text-[10px] mb-1 font-medium" style={{ fontFamily: "var(--font-inter)" }}>
            {v.handle}
          </p>
          <p className="text-white text-xs font-semibold leading-snug line-clamp-2">
            {v.caption}
          </p>
        </div>

        {/* "Coming soon" overlay on hover */}
        <div className={`absolute inset-0 bg-black/60 flex items-end justify-center pb-20 z-20 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <span className="text-white text-sm font-bold tracking-widest uppercase px-4 py-2 border border-white/30 rounded-full backdrop-blur" style={{ fontFamily: "var(--font-inter)" }}>
            סרטון בקרוב
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function UGC() {
  return (
    <section id="ugc" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-zinc-500 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>
              From the Community
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              הלוחמים והמתפללים של ADLER
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              מהשטח, מבית הכנסת, ומהחיים — הם כבר עברו ל-ADLER
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {videos.map((v, i) => (
            <VideoCard key={v.id} v={v} index={i} />
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-center text-zinc-600 text-xs mt-8 tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
            * תמונות להמחשה — סרטוני UGC אמיתיים יועלו בקרוב
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
