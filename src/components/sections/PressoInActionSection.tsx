"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface PressoInActionSectionProps {
  onOpenVideoModal: () => void;
}

export function PressoInActionSection({ onOpenVideoModal }: PressoInActionSectionProps) {
  const [hasVideoError, setHasVideoError] = useState(false);

  const stats = [
    { value: "3,400+", label: "Button presses", sub: "In a single 3-day exhibition" },
    { value: "85%",    label: "Lead scan rate",  sub: "Visitors scanned QR badge" },
    { value: "4.2×",   label: "Dwell time",      sub: "Versus the adjacent booth" },
  ];

  return (
    <section className="section-pad bg-[#0A0A0A] border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#666] font-medium">PRESSO in Action</p>
          <h2 className="text-white">See it working at a live exhibition.</h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8]">
            Fixto at IMTEX Forming 2025. Real deployment, real crowd, real numbers.
          </p>
        </motion.div>

        {/* Video — cinematic, with visible border + gradient for dark-on-dark */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          onClick={onOpenVideoModal}
          className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer group border border-white/[.10] shadow-[0_20px_70px_rgba(0,0,0,0.85)] hover:border-[#FF6A00]/30 hover:shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(255,106,0,0.12)] transition-all duration-700 bg-[#141414]"
        >
          {hasVideoError ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-14 rounded-full border border-white/[.1] flex items-center justify-center">
                <svg className="w-5 h-5 fill-[#666] ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <p className="text-sm text-[#555] font-light">Fixto · IMTEX Forming · Bangalore 2025</p>
            </div>
          ) : (
            <>
              <video
                src="/videos/presso_demo.mp4"
                autoPlay muted loop playsInline preload="metadata"
                onError={() => setHasVideoError(true)}
                className="w-full h-full object-cover brightness-90"
              />
              {/* Gradient so bottom text is readable against any video frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent pointer-events-none" />

              {/* Play hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-white ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-5 left-6">
                <p className="text-[11px] font-mono text-white/60 uppercase tracking-[0.12em]">Fixto · IMTEX Forming · Bangalore 2025</p>
              </div>

              {/* Watch full video CTA */}
              <div className="absolute bottom-5 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#FF6A00] uppercase tracking-wider">
                  Watch full video <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </>
          )}
        </motion.div>

        {/* ─── Stats band — the "wow" moment ─── */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-3 divide-x divide-white/[.07] bg-[#141414] rounded-2xl border border-white/[.08] overflow-hidden"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-10 text-center space-y-2">
              <p className="stat-number text-white">{s.value}</p>
              <p className="text-[13px] font-bold text-[#FF6A00] uppercase tracking-[0.1em]">{s.label}</p>
              <p className="text-[12px] text-[#B8B8B8] font-light">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
