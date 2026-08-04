"use client";

import { motion } from "framer-motion";
import { RefreshCw, Palette, Cpu, Zap, DollarSign, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const benefits = [
  {
    icon: RefreshCw,
    title: "Reusable Platform",
    desc: "Buy once, deploy across 50+ brand clients with new software presets — no new hardware needed.",
  },
  {
    icon: Palette,
    title: "100% Custom Branding",
    desc: "Custom acrylic top caps, wrap decals, RGB color matching, and branded screen overlays.",
  },
  {
    icon: Cpu,
    title: "One Hardware. Infinite Campaigns.",
    desc: "Switch from a reaction game to a quiz battle with a single cloud profile selection.",
  },
  {
    icon: Zap,
    title: "5-Minute Setup",
    desc: "Unbox, plug in, launch. Zero specialized tech crew required.",
  },
  {
    icon: DollarSign,
    title: "Lower Production Costs",
    desc: "Eliminate expensive single-use fabrication. High-impact hardware at a fraction of the cost.",
  },
  {
    icon: TrendingUp,
    title: "Provable ROI",
    desc: "Export real-time analytics — dwell time, press count, lead conversions — for your brand clients.",
  },
];

export function AgenciesSection() {
  return (
    <section id="why-agencies" className="section-pad bg-[#0A0A0A] border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">

        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-2xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#666] font-medium">Built for agencies</p>
          <h2 className="text-white">Why experiential agencies choose PRESSO.</h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8]">
            Stop pitching static banners. Offer your clients a scalable, repeatable interactive hardware platform with measurable results.
          </p>
        </motion.div>

        {/* Benefits 3×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[.06] rounded-2xl overflow-hidden border border-white/[.06]">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#141414] p-8 space-y-4 group hover:bg-[#181818] transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0A0A0A] border border-white/[.08] flex items-center justify-center">
                <item.icon className="w-4 h-4 text-[#FF6A00]" />
              </div>
              <h3 className="font-bold text-[17px] text-white leading-snug">{item.title}</h3>
              <p className="text-sm text-[#B8B8B8] leading-[1.75] font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ─── Testimonial — dedicated card treatment ─── */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="testimonial-card max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Subtle orange accent top-left */}
          <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6A00] rounded-l-3xl" />

          <div className="pl-8 space-y-6">
            {/* Quote mark */}
            <span className="text-5xl text-[#FF6A00] font-serif leading-none select-none">&ldquo;</span>

            <p className="text-xl sm:text-2xl text-white font-medium leading-[1.55] italic">
              PRESSO paid for itself on our very first trade show activation. We generated 4× more lead scans for our automotive client than any previous booth.
            </p>

            {/* Attribution — name, title, company — clearly legible */}
            <div className="pt-2 border-t border-white/[.06] flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-[#2A2A2A] border border-white/[.1] flex items-center justify-center text-sm font-bold text-white">
                CD
              </div>
              <div>
                <p className="text-[13px] font-bold text-white">Creative Director</p>
                <p className="text-[12px] text-[#B8B8B8] font-light">Experiential Brand Activation Agency · India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
