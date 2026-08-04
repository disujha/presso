"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const rows = [
  { feature: "Start / Stop",    stopwatch: "Manual, human error",        presso: "One-touch hardware button" },
  { feature: "Brand presence",  stopwatch: "None",                       presso: "Custom skin, LEDs, screen" },
  { feature: "Audience",        stopwatch: "Silent, isolated",           presso: "Public, competitive, shared" },
  { feature: "Leaderboard",     stopwatch: "Paper or ignored",           presso: "Live TV screen rankings" },
  { feature: "Lead capture",    stopwatch: "Manual clipboard",           presso: "QR scan → CRM sync" },
  { feature: "Brand recall",    stopwatch: "Forgettable",                presso: "Remembered" },
];

export function StopwatchComparisonSection() {
  return (
    <section className="section-pad bg-[#0A0A0A] border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#666] font-medium">Why PRESSO</p>
          <h2 className="text-white">A stopwatch is not an experience.</h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8]">
            Brands use phone timers because nothing better existed. Until now.
          </p>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="overflow-x-auto">
          <table className="w-full text-left min-w-[540px]">
            <thead>
              <tr className="border-b border-white/[.08]">
                <th className="pb-5 text-[11px] font-mono text-[#555] uppercase tracking-[0.12em] w-1/3">Feature</th>
                <th className="pb-5 text-[11px] font-mono text-[#555] uppercase tracking-[0.12em] w-1/3">Phone Stopwatch</th>
                <th className="pb-5 text-[11px] font-mono text-[#FF6A00] uppercase tracking-[0.12em] w-1/3">PRESSO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[.05]">
              {rows.map((row, idx) => (
                <motion.tr
                  key={row.feature}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group"
                >
                  <td className="py-5 text-sm text-[#B8B8B8] font-medium">{row.feature}</td>
                  <td className="py-5 text-sm text-[#444] font-light line-through decoration-[#2A2A2A]">{row.stopwatch}</td>
                  <td className="py-5 text-sm text-white font-semibold group-hover:text-[#FF6A00] transition-colors duration-200">{row.presso}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
