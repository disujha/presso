"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  onOpenDemoModal: () => void;
  onOpenVideoModal: () => void;
  onOpenBrochureModal: () => void;
}

export function CTASection({ onOpenDemoModal, onOpenVideoModal, onOpenBrochureModal }: CTASectionProps) {
  return (
    <section className="py-48 bg-[#050505] border-t border-white/[.05]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#555555] font-medium">Ready to start</p>
          <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,5rem)] text-white leading-[1.05] tracking-[-0.03em]">
            Turn your next campaign into an experience.
          </h2>
          <p className="text-lg text-[#444] font-light leading-[1.8] max-w-xl mx-auto">
            Whether you&apos;re launching a product, activating a brand or creating event experiences — PRESSO makes participation measurable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onOpenDemoModal}
            className="px-8 py-4 rounded-full bg-[#FF6A00] text-black font-bold text-[11px] uppercase tracking-[0.12em] hover:bg-orange-500 transition-colors duration-300 shadow-[0_0_40px_rgba(255,106,0,0.3)] flex items-center gap-2"
          >
            Book Live Demo <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenVideoModal}
            className="px-8 py-4 rounded-full border border-white/15 text-white text-[11px] font-bold uppercase tracking-[0.12em] hover:border-white/30 transition-colors duration-300"
          >
            Watch Demo
          </button>

          <button
            onClick={onOpenBrochureModal}
            className="flex items-center gap-2 text-[11px] text-[#444] hover:text-[#666] transition-colors uppercase tracking-[0.1em] font-medium"
          >
            <Download className="w-3.5 h-3.5" /> Agency Deck
          </button>
        </motion.div>

        {/* Minimal footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[11px] text-[#333] font-mono tracking-[0.08em] uppercase"
        >
          Worldwide shipping · 5-minute setup · Dedicated support
        </motion.p>
      </div>
    </section>
  );
}
