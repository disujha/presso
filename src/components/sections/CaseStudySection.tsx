"use client";

import { SmartMedia } from "@/components/ui/SmartMedia";
import { Trophy, Target, Sparkles, ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface CaseStudySectionProps {
  onOpenDemoModal: () => void;
  onOpenBrochureModal: () => void;
}

export function CaseStudySection({ onOpenDemoModal, onOpenBrochureModal }: CaseStudySectionProps) {
  return (
    <section className="section-pad bg-[#0A0A0A] border-t border-white/[.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#FF6A00]/40 text-[11px] font-mono text-[#FF6A00] uppercase tracking-[0.14em]">
            <Trophy className="w-3.5 h-3.5" /> Flagship Case Study · Live Deployment
          </div>
          <h2 className="text-white">How our flagship deployment at IMTEX turned expo visitors into active contenders.</h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8] max-w-xl">
            Our flagship installation with industrial assembly brand FIXTO at IMTEX Forming 2025 demonstrates how PRESSO creates high-traffic engagements.
          </p>
        </motion.div>

        {/* Main story grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Challenge + Solution */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="p-8 rounded-2xl bg-[#141414] border border-white/[.07] space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-mono text-red-400 uppercase tracking-[0.12em]">
                <Target className="w-3.5 h-3.5" /> The Challenge
              </div>
              <h3 className="text-white">Static displays weren&apos;t stopping people.</h3>
              <p className="text-sm text-[#B8B8B8] leading-[1.75] font-light">
                FIXTO spent lakhs on a prime exhibition booth. Visitors walked past static tool displays without stopping — no dwell, no conversation, no leads.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08 }} className="p-8 rounded-2xl bg-[#141414] border border-[#FF6A00]/30 space-y-3 shadow-[0_0_40px_rgba(255,106,0,0.1)]">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#FF6A00] uppercase tracking-[0.12em]">
                <Sparkles className="w-3.5 h-3.5" /> The PRESSO Solution
              </div>
              <h3 className="text-white">The FIXTO Assembly Speed Challenge.</h3>
              <p className="text-sm text-[#B8B8B8] leading-[1.75] font-light">
                Visitors pressed the illuminated PRESSO button to start a 30-second tool assembly race, completed the challenge, then slammed PRESSO to stop the timer. Scores broadcast live on the stage screen.
              </p>
            </motion.div>

            {/* Key learnings */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.12 }} className="p-6 rounded-2xl bg-[#141414] border border-white/[.07] space-y-3">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.06em]">Key findings</h4>
              <ul className="space-y-2.5">
                {[
                  "Illuminated button creates crowd curiosity from 50 metres away.",
                  "Millisecond timer creates intense competitive cheering.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[13px] text-[#B8B8B8] leading-snug font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00] flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Media */}
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.05 }} className="lg:col-span-7 space-y-3">
            <div className="rounded-2xl overflow-hidden border border-white/[.10] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <SmartMedia
                src="/images/presso_activation.jpg"
                type="image"
                alt="FIXTO Real World Deployment"
                fallbackTitle="FIXTO Case Study"
                aspectRatio="16:9"
                glowEffect={false}
                className="rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-white/[.08]">
                <SmartMedia
                  src="/images/industrial.jpg"
                  type="image"
                  alt="FIXTO Assembly Station"
                  fallbackTitle="Assembly Station"
                  aspectRatio="4:3"
                  glowEffect={false}
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/[.08]">
                <SmartMedia
                  src="/videos/fixto-case-study.mp4"
                  type="video"
                  title="FIXTO Highlights"
                  fallbackTitle="FIXTO Case Study Reel"
                  aspectRatio="4:3"
                  glowEffect={false}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary Deployment Proof Point to establish scale */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative bg-gradient-to-r from-[#141414] to-[#1A1A1A] rounded-3xl border border-white/[.08] p-8 md:p-10 shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-radial-glow opacity-25 pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-xs font-mono text-[#FF6A00] uppercase tracking-wider">
                Retail Pilot Deployment
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Mumbai Lifestyle Store Activation
              </h3>
              <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                As a second proof point, our pilot deployment at a flagship lifestyle retail store in Mumbai saw users engaging with a reflex-timer software preset. The activation captured over 1,200 unique visitor times and led to a 24% boost in loyalty club sign-ups.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center">
              <div className="text-center md:text-right">
                <p className="text-5xl font-black text-[#FF6A00]">+24%</p>
                <p className="text-xs font-bold text-white uppercase tracking-wider mt-1">Loyalty Sign-Ups</p>
                <p className="text-[11px] text-[#A0A0A0] mt-0.5">Over a 14-day trial</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/[.06]">
          <button onClick={onOpenDemoModal} className="btn-primary">
            Request Live Demo <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button onClick={onOpenBrochureModal} className="btn-secondary">
            <Download className="w-3.5 h-3.5" /> Agency Deck
          </button>
        </div>
      </div>
    </section>
  );
}
