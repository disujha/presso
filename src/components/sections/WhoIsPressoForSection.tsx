"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const sectors = [
  "Experiential Agencies",
  "BTL & Brand Activation",
  "Retail & Shopping Malls",
  "Trade Shows & Exhibitions",
  "Corporate Events",
  "Museums & Heritage",
  "Education & STEM",
  "Industrial Companies",
  "CSR Programs",
  "Sports & Recreation",
];

export function WhoIsPressoForSection() {
  return (
    <section className="section-pad bg-[#0A0A0A] border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-lg space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#666] font-medium">Who it&apos;s for</p>
          <h2 className="text-white">Any space that wants engagement.</h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8]">
            PRESSO adapts to any physical environment where people gather and brands want to be remembered.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {sectors.map((s, idx) => (
            <motion.div
              key={s}
              {...fadeUp}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="px-5 py-3 rounded-full bg-[#141414] border border-white/[.08] text-[13px] text-[#B8B8B8] font-medium tracking-wide hover:border-white/25 hover:text-white hover:bg-[#1A1A1A] transition-all duration-300 cursor-default"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
