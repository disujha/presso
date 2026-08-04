"use client";

import { motion } from "framer-motion";
import { SmartMedia } from "@/components/ui/SmartMedia";
import { Sparkles, Clock, ArrowRight, Download, Gauge } from "lucide-react";

interface CampaignGalleryProps {
  onOpenDemoModal: () => void;
  onOpenBrochureModal: () => void;
}

export function CampaignGallerySection({ onOpenDemoModal, onOpenBrochureModal }: CampaignGalleryProps) {
  const campaigns = [
    {
      title: "Reaction Speed Showdown",
      desc: "Fastest millisecond reflex test. Ideal for sports & high-energy booth crowds.",
      industry: "Gaming & Events",
      difficulty: "Easy",
      duration: "5 Mins Setup",
      image: "/images/presso_activation.jpg",
    },
    {
      title: "Golden Ticket Flash Sale",
      desc: "Shoppers press PRESSO to trigger instant randomized discount coupons.",
      industry: "Retail & Malls",
      difficulty: "Easy",
      duration: "3 Mins Setup",
      image: "/images/retail.jpg",
    },
    {
      title: "Trivia Stage Battle",
      desc: "Multi-player quiz buzzer format for town halls & keynotes.",
      industry: "Corporate & Stage",
      difficulty: "Medium",
      duration: "10 Mins Setup",
      image: "/images/corporate.jpg",
    },
    {
      title: "Pledge Tree Donator",
      desc: "Every button press increments a live CSR donation counter on stage screens.",
      industry: "CSR & Govt",
      difficulty: "Easy",
      duration: "5 Mins Setup",
      image: "/images/museum.jpg",
    },
    {
      title: "Automotive Launch Countdown",
      desc: "Synchronized lighting sequence unlocking car vehicle reveal.",
      industry: "Automotive",
      difficulty: "Advanced",
      duration: "15 Mins Setup",
      image: "/images/automotive.jpg",
    },
    {
      title: "STEM Science Fair Quiz",
      desc: "Interactive educational quiz for school assemblies & science fairs.",
      industry: "Education",
      difficulty: "Medium",
      duration: "5 Mins Setup",
      image: "/images/school.jpg",
    },
  ];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-xs font-mono text-[#B0B0B0] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" /> Campaign Workflows Gallery
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight">
            Ready-to-Deploy <br />
            <span className="text-gradient-gold">Campaign Mechanics.</span>
          </h2>
          <p className="text-lg text-[#B0B0B0] font-light max-w-xl mx-auto leading-relaxed">
            Choose from dozens of pre-tested campaign templates or build your own custom interaction in minutes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((camp, idx) => (
            <motion.div
              key={camp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="rounded-3xl bg-[#111111] border border-white/10 p-5 space-y-4 hover:border-[#FF6A00]/50 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Media Card */}
              <SmartMedia
                src={camp.image}
                type="image"
                alt={camp.title}
                fallbackTitle={camp.title}
                aspectRatio="16:9"
              />

              {/* Info Details */}
              <div className="space-y-3 px-1 pt-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#B0B0B0]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1A1A1A] border border-white/10 text-[#FF6A00]">
                    {camp.industry}
                  </span>
                  <span className="flex items-center gap-1 text-[#FFC107]">
                    <Clock className="w-3 h-3" /> {camp.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF6A00] transition-colors">
                  {camp.title}
                </h3>

                <p className="text-xs text-[#B0B0B0] leading-relaxed font-light">
                  {camp.desc}
                </p>
              </div>

              {/* Bottom Difficulty Tag */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#666666]">
                <span className="flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-[#FF6A00]" /> Difficulty: {camp.difficulty}
                </span>
                <span className="text-[#FF6A00] font-bold">1-Click Load</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-white/10">
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[0_0_35px_rgba(255,106,0,0.7)] transition-all flex items-center gap-2"
          >
            Request Live Demo <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3 rounded-full bg-[#1A1A1A] border border-white/15 text-white font-bold text-xs uppercase tracking-wider hover:border-[#FF6A00] hover:text-[#FF6A00] transition-all"
          >
            Book Online Demo
          </button>
          <button
            onClick={onOpenBrochureModal}
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[#B0B0B0] font-bold text-xs uppercase tracking-wider hover:text-white transition-all flex items-center gap-2"
          >
            Download Brochure <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
