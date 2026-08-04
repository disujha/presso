"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Sun,
  Timer,
  Cloud,
  Trophy,
  QrCode,
  Radio,
  Monitor,
  Volume2,
  Sliders,
  BarChart3,
  Zap,
  Sparkles,
} from "lucide-react";

export function TechGridSection() {
  const techItems = [
    { title: "Programmable Logic", desc: "Custom game rules, countdown intervals, & state machine logic", icon: Cpu },
    { title: "LED Halo Feedback", desc: "RGB addressable ring with 16.8 million state-driven colors", icon: Sun },
    { title: "High-Precision Live Timer", desc: "Millisecond-accurate hardware stopwatch counting engine", icon: Timer },
    { title: "Cloud Dashboard", desc: "Manage 100+ PRESSO devices remotely across global venues", icon: Cloud },
    { title: "Live Leaderboard", desc: "Real-time score broadcast to venue LED walls and TVs", icon: Trophy },
    { title: "QR Integration", desc: "Instant QR code generation for winner voucher redemption", icon: QrCode },
    { title: "RFID / NFC Module", desc: "Tap-to-play credential & VIP attendee identification", icon: Radio },
    { title: "Touch Screen Display", desc: "Optional integrated 7-inch HD display for secondary prompts", icon: Monitor },
    { title: "Audio Sound Engine", desc: "High-output onboard speaker with custom MP3 sample playback", icon: Volume2 },
    { title: "Remote Control", desc: "Wireless host trigger remote for stage emcees & presenters", icon: Sliders },
    { title: "Real-Time Analytics", desc: "Export press frequency, dwell duration, and peak engagement heatmaps", icon: BarChart3 },
    { title: "Edge Processing", desc: "Runs 100% offline without internet dependency if required", icon: Zap },
  ];

  return (
    <section id="tech-grid" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-xs font-mono text-[#B0B0B0] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" /> Hardware & Software Specifications
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight">
            Industrial Engineering. <br />
            <span className="text-gradient-gold">Modern Software Stack.</span>
          </h2>
          <p className="text-lg text-[#B0B0B0] font-light max-w-xl mx-auto leading-relaxed">
            Built from the ground up for zero-downtime reliability in high-traffic public venues.
          </p>
        </div>

        {/* 12-Item Tech Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="rounded-3xl bg-[#111111] border border-white/10 p-6 flex flex-col justify-between space-y-4 hover:border-[#FF6A00]/50 hover:bg-[#161616] hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all">
                <item.icon className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#FF6A00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B0B0B0] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
