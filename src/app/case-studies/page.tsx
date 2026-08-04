"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmartMedia } from "@/components/ui/SmartMedia";
import { DemoModal } from "@/components/ui/DemoModal";
import { BrochureModal } from "@/components/ui/BrochureModal";
import { Trophy, Sparkles, Target, ArrowRight, Download, CheckCircle2, Flame, Users, Activity } from "lucide-react";

export default function CaseStudiesPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF6A00] selection:text-[#050505] overflow-x-hidden">
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-[#050505] border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-hero pointer-events-none opacity-80" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#FF6A00]/40 text-xs font-mono text-[#FF6A00] uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" /> Real World Deployment Archive
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-7xl text-white tracking-tight">
              Proven Campaign <br />
              <span className="text-gradient-gold">Case Studies.</span>
            </h1>
            <p className="text-lg text-[#B0B0B0] font-light max-w-2xl mx-auto leading-relaxed">
              Explore how leading brands turn exhibition booths and retail pop-ups into high-traffic competitive experiences.
            </p>
          </div>
        </section>

        {/* Anchor Case Study: FIXTO @ IMTEX FORMING */}
        <section className="py-20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
            {/* Header Badge */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 rounded-3xl bg-[#111111] border border-[#FF6A00]/40 shadow-[0_0_30px_rgba(255,106,0,0.15)]">
              <div>
                <span className="text-xs font-mono text-[#FF6A00] uppercase tracking-widest block mb-1">FEATURED CASE STUDY</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">FIXTO @ IMTEX Forming Expo</h2>
                <p className="text-sm text-[#B0B0B0] mt-1">Industrial Modular Fixtures & Tooling • International Exhibition Center</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider">
                  3,400+ PRESSES
                </span>
                <span className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/10 text-[#FFC107] font-bold text-xs font-mono">
                  85% LEAD CONVERSION
                </span>
              </div>
            </div>

            {/* Media Highlight Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <SmartMedia
                  src="/images/presso_activation.jpg"
                  type="image"
                  alt="FIXTO IMTEX Forming Live Crowd"
                  fallbackTitle="FIXTO IMTEX Live Activation"
                  aspectRatio="16:9"
                />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <SmartMedia
                  src="/videos/fixto-case-study.mp4"
                  type="video"
                  title="FIXTO Crowd Highlights Video"
                  fallbackTitle="FIXTO Live Challenge Video Reel"
                  aspectRatio="4:3"
                />
                <SmartMedia
                  src="/images/industrial.jpg"
                  type="image"
                  alt="FIXTO Assembly Challenge Pod"
                  fallbackTitle="FIXTO Hardware Assembly Station"
                  aspectRatio="4:3"
                />
              </div>
            </div>

            {/* Story Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest">
                  <Target className="w-4 h-4" /> The Challenge
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Passive Displays Failed to Engage Industrial Buyers</h3>
                <p className="text-sm text-[#B0B0B0] leading-relaxed font-light">
                  At IMTEX Forming, over 200 industrial fixture manufacturers were competing for visitor attention. Traditional static tool racks resulted in passersby walking past without trying the products.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#111111] border border-[#FF6A00]/50 space-y-4 shadow-[0_0_30px_rgba(255,106,0,0.15)]">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF6A00] uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" /> The PRESSO Experience
                </div>
                <h3 className="font-display font-bold text-2xl text-white">The Timed Tool Assembly Speed Battle</h3>
                <p className="text-sm text-[#B0B0B0] leading-relaxed font-light">
                  FIXTO installed illuminated PRESSO buttons on a central assembly station connected to a 65-inch stage TV leaderboard. Visitors hit PRESSO to start the clock, assembled the modular fixture, and slammed PRESSO to stop the timer.
                </p>
              </div>
            </div>

            {/* Key Experiential Elements & Leaderboard */}
            <div className="p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">Experiential Elements Implemented:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1">
                  <Flame className="w-5 h-5 text-[#FF6A00]" />
                  <h4 className="font-bold text-white text-sm">Large Stage TV Leaderboard</h4>
                  <p className="text-xs text-[#B0B0B0]">Scores updated in real-time across 50m booth area</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1">
                  <Users className="w-5 h-5 text-[#FF6A00]" />
                  <h4 className="font-bold text-white text-sm">Emcee Live Commentary</h4>
                  <p className="text-xs text-[#B0B0B0]">Live host called out millisecond race leaders</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1">
                  <Activity className="w-5 h-5 text-[#FF6A00]" />
                  <h4 className="font-bold text-white text-sm">Haptic Sound & Light Flash</h4>
                  <p className="text-xs text-[#B0B0B0]">RGB light halos flashed gold on high scores</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6A00]" />
                  <h4 className="font-bold text-white text-sm">QR Code Voucher Lead Capture</h4>
                  <p className="text-xs text-[#B0B0B0]">Winners scanned QR badge to claim tool sets</p>
                </div>
              </div>
            </div>

            {/* Quantitative Results */}
            <div className="rounded-4xl bg-[#111111] border border-white/10 p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center shadow-xl">
              <div className="space-y-2">
                <p className="font-display font-bold text-4xl sm:text-5xl text-[#FF6A00]">3,400+</p>
                <p className="text-xs uppercase font-mono text-[#B0B0B0]">Physical Presses Recorded</p>
              </div>
              <div className="space-y-2">
                <p className="font-display font-bold text-4xl sm:text-5xl text-[#FFC107]">85%</p>
                <p className="text-xs uppercase font-mono text-[#B0B0B0]">Lead QR Badge Scans</p>
              </div>
              <div className="space-y-2">
                <p className="font-display font-bold text-4xl sm:text-5xl text-white">4.2x</p>
                <p className="text-xs uppercase font-mono text-[#B0B0B0]">Dwell Time Boost vs Competitors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Deployments Pipeline Placeholders */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono text-[#FF6A00] uppercase tracking-widest">UPCOMING DEPLOYMENT CASE STUDIES</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Next Up in the Pipeline</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SmartMedia
                type="image"
                fallbackTitle="Bosch Tool Speed Challenge Case Study"
                aspectRatio="16:9"
              />
              <SmartMedia
                type="image"
                fallbackTitle="Decathlon Store Activation Case Study"
                aspectRatio="16:9"
              />
              <SmartMedia
                type="image"
                fallbackTitle="Mahindra Showroom Launch Case Study"
                aspectRatio="16:9"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,106,0,0.5)] flex items-center gap-2"
              >
                Request Live Demo <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setBrochureModalOpen(true)}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                Download Case Studies PDF <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <BrochureModal isOpen={brochureModalOpen} onClose={() => setBrochureModalOpen(false)} />
    </div>
  );
}
