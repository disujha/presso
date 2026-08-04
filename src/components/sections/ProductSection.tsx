"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function ProductSection() {
  const views = [
    { id: "main",  label: "Perspective", image: "/images/presso_main.png",  desc: "Compact industrial form factor. Built for high-traffic environments." },
    { id: "top",   label: "Top",         image: "/images/presso_top.png",   desc: "Large illuminated button. Designed to invite participation." },
    { id: "front", label: "Front",       image: "/images/presso_front.png", desc: "Power switch and system status indicator on the front face." },
    { id: "rear",  label: "Rear",        image: "/images/presso_rear.png",  desc: "Clean rear power input for concealed cable management." },
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="meet-presso" className="section-pad bg-[#050505] border-t border-white/[.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">

        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-xl space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#A0A0A0] font-semibold">The Hardware</p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.08]">
            Meet PRESSO.
          </h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8]">
            Designed for exhibitions, retail and live brand activations.
          </p>
        </motion.div>

        {/* Main gallery — large image + thumbnail strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Main viewer */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="lg:col-span-9 relative rounded-3xl bg-[#080808] border border-white/[.06] overflow-hidden flex flex-col items-center justify-center p-10 sm:p-16 min-h-[480px] group"
          >
            {/* Soft ambient glow behind product */}
            <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.img
                key={views[active].id}
                src={views[active].image}
                alt={`PRESSO ${views[active].label}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-sm mx-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] group-hover:scale-[1.02] transition-transform duration-700"
                style={{ maxHeight: "400px" }}
              />
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <p className="text-[11px] text-[#B8B8B8] font-light leading-snug max-w-xs">{views[active].desc}</p>
              <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest">{views[active].label} view</span>
            </div>
          </motion.div>

          {/* Thumbnail rail — compact, fits alongside main viewer */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {views.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => setActive(idx)}
                className={`flex-shrink-0 w-20 lg:w-full rounded-xl overflow-hidden border transition-all duration-300 bg-[#080808] p-2 flex flex-col items-center gap-1.5 ${
                  active === idx
                    ? "border-[#FF6A00]/60"
                    : "border-white/[.06] hover:border-white/20"
                }`}
              >
                <div className="w-full flex items-center justify-center" style={{ height: "56px" }}>
                  <img
                    src={v.image}
                    alt={v.label}
                    className="max-h-full max-w-full object-contain opacity-75"
                  />
                </div>
                <span className={`text-[9px] font-mono uppercase tracking-wider hidden lg:block ${active === idx ? "text-[#FF6A00]" : "text-[#666666]"}`}>
                  {v.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
