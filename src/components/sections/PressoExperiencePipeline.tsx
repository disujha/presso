"use client";

import { motion } from "framer-motion";
import { User, MousePointerClick, Timer, Dumbbell, StopCircle, Trophy, Award, Sparkles } from "lucide-react";

export function PressoExperiencePipeline() {
  const steps = [
    { title: "Visitor", desc: "Passersby attracted by breathing LED light halo", icon: User },
    { title: "Press Button", desc: "Tactile click triggers stage sound & RGB flash", icon: MousePointerClick },
    { title: "Timer Starts", desc: "High-precision millisecond stopwatch runs live", icon: Timer },
    { title: "Physical Challenge", desc: "Assemble, race, solve, or perform product action", icon: Dumbbell },
    { title: "Stop Timer", desc: "Slam PRESSO to freeze the high-score time", icon: StopCircle },
    { title: "Leaderboard", desc: "Instant score broadcast to TV screens & LED walls", icon: Trophy },
    { title: "Audience & Winner", desc: "Crowd cheers, QR reward claimed, brand recall locked", icon: Award },
  ];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#FF6A00]/40 text-xs font-mono text-[#FF6A00] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> The Experience Engine Mechanics
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight">
            How PRESSO Turns Activity <br />
            <span className="text-gradient-gold">Into A Live Challenge.</span>
          </h2>
          <p className="text-lg text-[#B0B0B0] font-light max-w-xl mx-auto leading-relaxed">
            A 7-step psychological engagement funnel that transforms passive spectators into active, competitive brand advocates.
          </p>
        </div>

        {/* 7-Step Animated Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl bg-[#111111] border border-white/10 p-5 flex flex-col items-center text-center space-y-3 hover:border-[#FF6A00]/50 hover:bg-[#161616] hover:shadow-[0_0_25px_rgba(255,106,0,0.25)] transition-all duration-300 group relative"
            >
              {/* Step Index Badge */}
              <span className="absolute top-3 left-3 text-[10px] font-mono text-[#FF6A00] font-bold">
                0{idx + 1}
              </span>

              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all">
                <step.icon className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-white group-hover:text-[#FF6A00] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#B0B0B0] leading-snug font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
