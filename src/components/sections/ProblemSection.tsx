"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, TrendingDown, Zap } from "lucide-react";

export function ProblemSection() {
  const problems = [
    "Every exhibition has booths.",
    "Only a few create memories.",
    "Visitors ignore static displays.",
    "People walk past without stopping.",
    "Brands spend lakhs on space & screens.",
    "Engagement remains painfully low.",
  ];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-xs font-mono text-[#B0B0B0] uppercase tracking-widest">
            <TrendingDown className="w-3.5 h-3.5 text-[#FF6A00]" />
            The Experiential Reality Gap
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            The World Doesn&apos;t Need <br /> Another Static Screen.
          </h2>
        </div>

        {/* Narrative Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Booths (Dark Muted Card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#111111] border border-white/10 p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest">
                <XCircle className="w-4 h-4" /> Traditional Event Booths
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                High Cost. Zero Memory.
              </h3>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              {problems.map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[#B0B0B0] text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-white/5 text-xs text-[#666666] font-mono">
              Result: 92% of visitors leave booths without a memorable brand interaction.
            </div>
          </motion.div>

          {/* The PRESSO Shift (Hero Electric Card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#111111] border border-[#FF6A00]/50 p-8 sm:p-12 flex flex-col justify-between space-y-8 relative shadow-[0_0_50px_rgba(255,106,0,0.15)] group"
          >
            {/* Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF6A00]/25 transition-all" />

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF6A00] uppercase tracking-widest">
                <Zap className="w-4 h-4" /> The PRESSO Revolution
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white">
                PRESSO Changes That.
              </h3>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#FF6A00]/20">
              <p className="text-xl sm:text-2xl text-[#B0B0B0] font-light leading-relaxed">
                When you put a physical, illuminated, responsive PRESSO button on a pedestal, something primal happens.
              </p>
              <p className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">
                People MUST press it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FF6A00]/10 border border-[#FF6A00]/30 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <CheckCircle className="w-4 h-4 text-[#FF6A00]" />
                Active Physical Engagement
              </div>
              <p className="text-xs text-[#B0B0B0]">
                Instant crowds, competitive excitement, live timing, sound feedback, and social sharing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
