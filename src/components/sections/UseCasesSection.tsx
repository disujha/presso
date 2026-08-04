"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  Trophy,
  Timer,
  Clock,
  HelpCircle,
  Wrench,
  Package,
  Users,
  GraduationCap,
  Landmark,
  Heart,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export function UseCasesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const useCases = [
    {
      title: "Retail Activation",
      desc: "Shoppers press PRESSO to trigger instant mystery discounts, golden ticket reveals, or storewide flash sales.",
      icon: ShoppingBag,
      tag: "Retail",
      highlight: "Increases footfall & impulse purchases by 40%",
    },
    {
      title: "Trade Show Attraction",
      desc: "Turn your booth into the talk of the expo floor with live reaction speed competitions and instant leaderboard rewards.",
      icon: Trophy,
      tag: "Events",
      highlight: "Captures 5x more lead contacts than passive forms",
    },
    {
      title: "Reaction Challenge",
      desc: "Test visitor reflex speeds down to the millisecond. Quickest press wins grand prizes.",
      icon: Timer,
      tag: "Gaming",
      highlight: "Ultra-high crowd engagement & social filming",
    },
    {
      title: "Beat The Clock",
      desc: "Stop the high-speed digital timer at exactly 05.00 seconds. Easy to play, addictively hard to master.",
      icon: Clock,
      tag: "Gaming",
      highlight: "Proven viral crowd puller across 500+ activations",
    },
    {
      title: "Quiz Game",
      desc: "Multiplayer trivia buzzer system. First to slam the PRESSO button gets to answer the stage question.",
      icon: HelpCircle,
      tag: "Interactive",
      highlight: "Perfect for product launches & stage events",
    },
    {
      title: "Assembly Challenge",
      desc: "Beat the clock while assembling a modular product. Press PRESSO to start and stop your timed trial.",
      icon: Wrench,
      tag: "Corporate",
      highlight: "Ideal for manufacturing & automotive demos",
    },
    {
      title: "Product Demonstration",
      desc: "Pressing PRESSO unlocks a physical product sample drop, robotic action, or interactive light reveal.",
      icon: Package,
      tag: "Retail",
      highlight: "Creates unforgettable hands-on sensory moments",
    },
    {
      title: "Employee Engagement",
      desc: "Gamified town halls, team building buzzer battles, and instant reward triggers for corporate events.",
      icon: Users,
      tag: "Corporate",
      highlight: "Boosts internal team morale and participation",
    },
    {
      title: "Learning Experience",
      desc: "Tactile educational quizzes and interactive STEM demonstrations for schools & science fairs.",
      icon: GraduationCap,
      tag: "Education",
      highlight: "Encourages active learning through physical action",
    },
    {
      title: "Museum Installation",
      desc: "Interactive exhibit triggers, historical audio plays, and visitor participation counters.",
      icon: Landmark,
      tag: "Museums",
      highlight: "Durable for millions of public presses",
    },
    {
      title: "CSR Awareness",
      desc: "Every button press donates a tree, meal, or clean water liter. Watch live community pledge counters climb.",
      icon: Heart,
      tag: "CSR",
      highlight: "Quantifies social impact with tangible engagement",
    },
    {
      title: "Safety Training",
      desc: "Simulate industrial emergency stop procedures and safety response speed drills.",
      icon: ShieldCheck,
      tag: "Corporate",
      highlight: "Improves safety protocol retention by 80%",
    },
  ];

  const categories = ["All", "Events", "Retail", "Gaming", "Corporate", "CSR"];

  const filteredUseCases =
    activeCategory === "All"
      ? useCases
      : useCases.filter((item) => item.tag === activeCategory);

  return (
    <section id="use-cases" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Glow accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF6A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-xs font-mono text-[#B0B0B0] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" /> Unlimited Campaign Possibilities
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight">
            Designed for Every <br />
            <span className="text-gradient-gold">Interactive Format.</span>
          </h2>
          <p className="text-lg text-[#B0B0B0] font-light max-w-xl mx-auto leading-relaxed">
            One single hardware platform powering dozens of custom campaign mechanics.
          </p>

          {/* Filter Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#FF6A00] text-black font-bold shadow-[0_0_20px_rgba(255,106,0,0.5)]"
                    : "bg-[#111111] border border-white/10 text-[#B0B0B0] hover:text-white hover:border-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Use Cases Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUseCases.map((uc, idx) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="rounded-3xl bg-[#111111] border border-white/10 p-8 flex flex-col justify-between space-y-6 hover:border-[#FF6A00]/50 hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Top Row: Icon & Tag */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all">
                  <uc.icon className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#B0B0B0]">
                  {uc.tag}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FF6A00] transition-colors flex items-center gap-2">
                  {uc.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#FF6A00]" />
                </h3>
                <p className="text-sm text-[#B0B0B0] leading-relaxed font-light">
                  {uc.desc}
                </p>
              </div>

              {/* Highlight Footer */}
              <div className="pt-4 border-t border-white/5 text-xs font-mono text-[#FFC107] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] animate-pulse" />
                <span>{uc.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
