"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">מוכנים לשדרוג?</h2>
          <p className="text-zinc-500 text-xl mb-16">השאירו פרטים ונחזור אליכם</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-xl mx-auto bg-zinc-900 rounded-[36px] p-10 border border-white/5">
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-right">
                    <label className="block text-xs text-zinc-500 mb-1.5">שם מלא</label>
                    <input
                      type="text"
                      required
                      placeholder="ישראל ישראלי"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-zinc-600 outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                  <div className="text-right">
                    <label className="block text-xs text-zinc-500 mb-1.5">טלפון</label>
                    <input
                      type="tel"
                      required
                      placeholder="050-0000000"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-zinc-600 outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <label className="block text-xs text-zinc-500 mb-1.5">אימייל</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    dir="ltr"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-zinc-600 outline-none focus:border-white/25 transition-colors"
                  />
                </div>

                <div className="text-right">
                  <label className="block text-xs text-zinc-500 mb-1.5">באיזו חבילה מתעניינים?</label>
                  <select
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm outline-none focus:border-white/25 transition-colors appearance-none"
                  >
                    <option value="" className="text-black">בחרו חבילה</option>
                    <option value="basic" className="text-black">Basic — חבילת הבסיס (₪249)</option>
                    <option value="premium" className="text-black">Premium — חבילת הפרימיום (₪399)</option>
                    <option value="ultimate" className="text-black">Ultimate — חבילת ה-Double (₪549)</option>
                    <option value="group" className="text-black">הזמנה קבוצתית (5+ יחידות)</option>
                  </select>
                </div>

                <div className="text-right">
                  <label className="block text-xs text-zinc-500 mb-1.5">הערות נוספות</label>
                  <textarea
                    rows={3}
                    placeholder="ספרו לנו עוד..."
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/8 rounded-xl text-white text-sm placeholder:text-zinc-600 outline-none focus:border-white/25 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-2xl font-bold text-base hover:bg-zinc-200 transition-colors cursor-pointer mt-2"
                >
                  שלחו לי פרטים
                </button>
              </form>
            ) : (
              <div className="py-10 text-center">
                <div className="text-5xl mb-4">&#10003;</div>
                <h3 className="text-2xl font-bold mb-2">תודה רבה!</h3>
                <p className="text-zinc-500">קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם.</p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
