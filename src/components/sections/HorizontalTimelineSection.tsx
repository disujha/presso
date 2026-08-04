"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Visitor Arrives",      desc: "Drawn in by the illuminated button." },
  { step: "02", title: "One Press Starts",     desc: "Touch begins the timed challenge." },
  { step: "03", title: "Timer Counts",         desc: "Milliseconds on the stage display." },
  { step: "04", title: "Challenge Completes",  desc: "Product interaction. Real effort." },
  { step: "05", title: "Score Captured",       desc: "Instant result on the leaderboard." },
  { step: "06", title: "Crowd Reacts",         desc: "Audience engages. Clips get shared." },
  { step: "07", title: "Brand Remembered",     desc: "The experience outlasts the event." },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function HorizontalTimelineSection() {
  return (
    <section className="section-pad bg-[#0A0A0A] border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">

        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-lg space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#666] font-medium">How it works</p>
          <h2 className="text-white">From curiosity to celebration.</h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8]">
            Seven moments. Every one of them creates memory.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-4 left-4 right-4 h-px bg-white/[.06] hidden md:block" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {steps.map((s, idx) => (
              <motion.div
                key={s.step}
                {...fadeUp}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative space-y-3 group"
              >
                <div className="w-8 h-8 rounded-full border border-white/[.08] bg-[#141414] flex items-center justify-center text-[10px] font-mono text-[#555] group-hover:border-[#FF6A00]/50 group-hover:text-[#FF6A00] transition-all duration-300 relative z-10">
                  {s.step}
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-[13px] text-white leading-snug">{s.title}</p>
                  <p className="text-[12px] text-[#B8B8B8] leading-[1.6] font-light">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
