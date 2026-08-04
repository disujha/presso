"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Timer, Trophy, Volume2, Cloud, BarChart3 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const cards = [
  { title: "Physical Interaction",  desc: "Illuminated dome switch engineered for millions of presses.", icon: MousePointerClick },
  { title: "Live Timing",           desc: "Millisecond-precision hardware stopwatch.",                   icon: Timer },
  { title: "Public Leaderboard",    desc: "Real-time TV rankings broadcast to the room.",               icon: Trophy },
  { title: "Audio Feedback",        desc: "Stage sound FX and emcee voiceover hooks.",                  icon: Volume2 },
  { title: "Cloud Software",        desc: "One-click campaign preset loading.",                          icon: Cloud },
  { title: "Analytics",             desc: "Dwell time, press frequency, and lead capture.",              icon: BarChart3 },
];

export function WhatIsPressoSection() {
  return (
    <section className="py-14 md:py-20 bg-[#0A0A0A] border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">

        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-2xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#A0A0A0] font-semibold">What is PRESSO</p>
          <h2 className="text-white">One platform. Six connected systems.</h2>
          <p className="text-base text-[#B8B8B8] leading-[1.8] font-light max-w-lg">
            PRESSO converts any physical challenge into a timed, competitive, measurable brand experience — no app downloads, no special gear.
          </p>
        </motion.div>

        {/* 3×2 grid separated by subtle lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[.06] rounded-2xl overflow-hidden border border-white/[.06]">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="bg-[#141414] p-8 space-y-4 group hover:bg-[#181818] transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0A0A0A] border border-white/[.08] flex items-center justify-center">
                <card.icon className="w-4 h-4 text-[#FF6A00]" />
              </div>
              <h3 className="font-bold text-[17px] text-white leading-snug">{card.title}</h3>
              <p className="text-sm text-[#B8B8B8] leading-[1.75] font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
