"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, Download } from "lucide-react";

interface HeroSectionProps {
  onOpenDemoModal: () => void;
  onOpenVideoModal: () => void;
  onOpenBrochureModal: () => void;
}

export function HeroSection({ onOpenDemoModal, onOpenVideoModal, onOpenBrochureModal }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideoError, setHasVideoError] = useState(false);

  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 600], [0, 60]); // gentle parallax

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#050505]"
    >
      {/* Radial Hero Lighting — very subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-radial-hero pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left: Confident, minimal copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#A0A0A0] font-semibold">
              Interactive Engagement Platform
            </p>
            <h1 className="font-display font-bold text-[clamp(2.8rem,5.5vw,5rem)] text-white leading-[1.05] tracking-[-0.03em]">
              Turn product demos into live competitions.
            </h1>
            <p className="text-lg text-[#B8B8B8] leading-[1.8] max-w-md font-light">
              PRESSO transforms any physical challenge into a timed, competitive and unforgettable brand experience.
            </p>
          </div>

          {/* Trust badges — minimal */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.1em] text-[#888888] uppercase font-medium">
            <span>Live deployment</span>
            <span className="text-[#444444]">·</span>
            <span>Working hardware</span>
            <span className="text-[#444444]">·</span>
            <span>Fully customizable</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <button
              onClick={onOpenDemoModal}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF6A00] text-black font-extrabold text-[12px] uppercase tracking-[0.14em] hover:bg-orange-500 transition-all duration-300 shadow-[0_0_40px_rgba(255,106,0,0.45)] hover:scale-105"
            >
              Book Live Demo
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenVideoModal}
              className="flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-[12px] uppercase tracking-[0.12em] hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Demo
            </button>

            <button
              onClick={onOpenBrochureModal}
              className="flex items-center gap-2 text-[12px] text-[#A8A8A8] hover:text-white transition-colors uppercase tracking-[0.12em] font-bold border-b border-transparent hover:border-white pb-0.5 ml-2"
            >
              <Download className="w-4 h-4" />
              Agency Deck
            </button>
          </div>
        </motion.div>

        {/* Right: Video floating card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: videoY }}
          className="relative"
        >
          <div
            onClick={onOpenVideoModal}
            className="relative aspect-[4/5] rounded-3xl bg-[#0A0A0A] border border-white/[.07] overflow-hidden cursor-pointer group shadow-[0_30px_80px_rgba(0,0,0,0.8)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_60px_rgba(255,106,0,0.12)] transition-shadow duration-700"
          >
            {hasVideoError ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center p-8">
                <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-[#444]">
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </div>
                <p className="text-sm text-[#444] font-light">Demo Video Coming Soon</p>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  src="/videos/presso_demo.mp4"
                  autoPlay muted loop playsInline preload="metadata"
                  onError={() => setHasVideoError(true)}
                  className="w-full h-full object-cover brightness-105 hover:brightness-115 transition-all duration-700"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Play hint — appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Live Deployment · IMTEX 2025</span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
