"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background image */}
      <Image
        src="/product/hero-main.jpg"
        alt="ADLER hero"
        fill
        sizes="100vw"
        className="object-cover object-top scale-105"
        priority
      />
      {/* Dark overlay — heavy top for text, opens up at bottom to reveal bags */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-transparent" />
      {/* Subtle bottom anchor so buttons don't float on bare image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <FadeIn>
          <span
            className="text-zinc-400 text-sm md:text-base font-medium mb-6 block tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            The 2026 Generation
          </span>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1
            className="text-8xl md:text-[160px] font-black tracking-tighter leading-none mb-8 text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ADLER
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-2xl md:text-3xl font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
            מגן תפילין.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#models"
              className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-base hover:bg-zinc-200 hover:scale-[1.02] transition-all"
            >
              בחרו את המגן שלכם
            </a>
            <a
              href="#vision"
              className="border border-white/30 text-white px-10 py-4 rounded-2xl font-semibold text-base hover:border-white/60 transition-all backdrop-blur-sm"
            >
              הסיפור שלנו
            </a>
          </div>
        </FadeIn>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
          className="w-px h-10 bg-white opacity-30"
        />
      </motion.div>
    </section>
  );
}
