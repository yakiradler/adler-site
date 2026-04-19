"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#vision", label: "החזון" },
  { href: "#specs", label: "הנדסה" },
  { href: "#models", label: "דגמים" },
  { href: "#audiences", label: "למי זה" },
  { href: "#packages", label: "חבילות" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-[var(--font-inter)] text-xl font-bold tracking-tighter">
            ADLER
          </span>

          <div className="hidden md:flex gap-8 text-sm font-medium opacity-70">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="hover:opacity-100 transition-opacity"
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="hidden md:block bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            אני רוצה מגן
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-14 inset-x-0 z-40 bg-black/97 backdrop-blur-xl border-b border-white/8 p-6 md:hidden">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-right text-lg text-zinc-400 hover:text-white py-3 border-b border-white/5 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="block w-full text-right text-lg text-white py-3 font-bold"
          >
            אני רוצה מגן
          </button>
        </div>
      )}
    </>
  );
}
