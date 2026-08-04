"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const nodes = [
  { name: "Physical Product",  type: "Input" },
  { name: "PRESSO Button",     type: "Hardware" },
  { name: "Real-Time Timer",   type: "Core Logic" },
  { name: "Stage Display",     type: "Output" },
  { name: "Leaderboard",       type: "Rankings" },
  { name: "Audio Feedback",    type: "Atmosphere" },
  { name: "Audience",          type: "Engagement" },
  { name: "Analytics",         type: "Cloud Data" },
];

export function ExperienceArchitectureSection() {
  return (
    <section className="py-14 md:py-20 bg-[#0A0A0A] border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-lg space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#A0A0A0] font-semibold">System Overview</p>
          <h2 className="text-white">Every layer connected.</h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8]">
            From the first button press to post-event analytics — every part of the experience is orchestrated.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[.06] rounded-2xl overflow-hidden border border-white/[.06]">
          {nodes.map((node, idx) => (
            <motion.div
              key={node.name}
              {...fadeUp}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-[#141414] p-7 space-y-2 group hover:bg-[#181818] transition-colors duration-300"
            >
              <span className="text-[9px] font-mono text-[#FF6A00] uppercase tracking-[0.15em] block">
                {String(idx + 1).padStart(2, "0")} · {node.type}
              </span>
              <p className="font-bold text-[15px] text-white leading-snug">{node.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
