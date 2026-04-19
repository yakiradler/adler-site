"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Image at natural 16:9 ratio — no cropping */}
      <div className="relative w-full">
        <Image
          src="/product/hero-main.jpg"
          alt="ADLER hero"
          width={1012}
          height={566}
          className="w-full h-auto block"
          priority
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/55" />

        {/* Content centered over image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-14">
          <FadeIn>
            <span
              className="text-zinc-400 text-xs md:text-sm font-medium mb-3 md:mb-6 block tracking-widest uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The 2026 Generation
            </span>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1
              className="text-5xl sm:text-7xl md:text-[130px] font-black tracking-tighter leading-none mb-3 md:mb-8 text-white"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              ADLER
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-3xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-5 md:mb-12">
              מגן תפילין.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
              <a
                href="#models"
                className="bg-white text-black px-7 md:px-10 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base hover:bg-zinc-200 hover:scale-[1.02] transition-all"
              >
                בחרו את המגן שלכם
              </a>
              <a
                href="#vision"
                className="border border-white/30 text-white px-7 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-sm md:text-base hover:border-white/60 transition-all backdrop-blur-sm"
              >
                הסיפור שלנו
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-zinc-500 text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 md:h-10 bg-white opacity-30"
          />
        </motion.div>
      </div>
    </section>
  );
}
