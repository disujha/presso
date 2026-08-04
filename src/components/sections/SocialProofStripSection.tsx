"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Cpu, Cloud, Flag, RefreshCw } from "lucide-react";

const trustPoints = [
  { title: "Live Deployment", icon: CheckCircle2 },
  { title: "Working Hardware", icon: Cpu },
  { title: "Custom Software", icon: RefreshCw },
  { title: "Cloud Connected", icon: Cloud },
  { title: "Made in India", icon: Flag },
  { title: "Enterprise Ready", icon: ShieldCheck },
];

export function SocialProofStripSection() {
  return (
    <section className="py-10 bg-[#080808] border-y border-white/[.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {trustPoints.map((tp, idx) => (
            <motion.div
              key={tp.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-2.5 text-[#333] hover:text-[#555] transition-colors duration-300"
            >
              <tp.icon className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.1em]">{tp.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
