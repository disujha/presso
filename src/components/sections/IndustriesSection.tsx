"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Car,
  Tv,
  HeartPulse,
  Factory,
  GraduationCap,
  Building2,
  Hotel,
  Store,
  Briefcase,
  Sparkles,
} from "lucide-react";

export function IndustriesSection() {
  const industries = [
    { title: "Retail", icon: ShoppingBag, desc: "Experiential pop-up stores & high-street activations" },
    { title: "Automotive", icon: Car, desc: "Showroom launch games & test-drive engagement" },
    { title: "Electronics", icon: Tv, desc: "Hands-on gadget feature demonstrations & gaming challenges" },
    { title: "Healthcare", icon: HeartPulse, desc: "Wellness pledge counters & medical expo interactive booths" },
    { title: "Manufacturing", icon: Factory, desc: "Safety speed drills & factory floor milestone celebrations" },
    { title: "Education", icon: GraduationCap, desc: "Gamified STEM exhibits, quizzes & campus events" },
    { title: "Government", icon: Building2, desc: "Public awareness campaigns & interactive citizen pledges" },
    { title: "Hospitality", icon: Hotel, desc: "Hotel lobby check-in surprises & VIP event buzzers" },
    { title: "Shopping Malls", icon: Store, desc: "Atrium anchor attractions & weekend shopper contests" },
    { title: "Corporate", icon: Briefcase, desc: "Town halls, product rollouts & internal team battles" },
  ];

  return (
    <section id="industries" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-xs font-mono text-[#B0B0B0] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" /> Tailored Industry Solutions
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight">
            Built for Heavy Impact <br />
            <span className="text-gradient-gold">Across Every Sector.</span>
          </h2>
          <p className="text-lg text-[#B0B0B0] font-light max-w-xl mx-auto leading-relaxed">
            From flagship automotive launches to weekend mall activations, PRESSO seamlessly adapts to your audience.
          </p>
        </div>

        {/* Industries 10-Item Animated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-3xl bg-[#111111] border border-white/10 p-6 flex flex-col items-start justify-between space-y-4 hover:border-[#FF6A00]/50 hover:bg-[#161616] hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all">
                <ind.icon className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF6A00] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-[#B0B0B0] leading-relaxed font-light">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
