"use client";

import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartMedia";
import { CheckCircle2, RefreshCw } from "lucide-react";

export function OnePlatformBrandedSection() {
  const [activeBrand, setActiveBrand] = useState(0);

  const brands = [
    {
      name: "Bosch",
      tagline: "Industrial Tool Torque Challenge",
      accentColor: "#E21B23",
      image: "/images/industrial.jpg",
      software: "Millisecond Torque Timer",
      branding: "Red/Black Industrial Acrylic Enclosure",
    },
    {
      name: "IKEA",
      tagline: "Modular Flat-Pack Assembly Sprint",
      accentColor: "#FFDA1A",
      image: "/images/retail.jpg",
      software: "Step-by-Step Assembly Clock",
      branding: "Yellow/Blue Accent Halo Ring",
    },
    {
      name: "Pepsi",
      tagline: "Taste Reflex Challenge",
      accentColor: "#005CB4",
      image: "/images/presso_activation.jpg",
      software: "Flavor Quiz & Sound Drop",
      branding: "Electric Blue Pulse Halo",
    },
    {
      name: "Decathlon",
      tagline: "Pop-Up Tent Assembly Race",
      accentColor: "#0082C3",
      image: "/images/school.jpg",
      software: "60-Second Sprint Timer",
      branding: "Cyan Sports Acrylic Cap",
    },
  ];

  return (
    <section className="relative section-pad bg-[#050505] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#FF6A00]/40 text-xs font-mono text-[#FF6A00] uppercase tracking-widest">
            <RefreshCw className="w-3.5 h-3.5" /> Illustrative Brand Applications
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight">
            ONE PLATFORM. <br />
            <span className="text-gradient-gold">CONCEPT RENDERS.</span>
          </h2>
          <p className="text-lg text-[#B8B8B8] font-light max-w-xl mx-auto leading-relaxed">
            Same Hardware. Custom Skins. Brand-Specific Software. Unlimited Campaigns.
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {brands.map((brand, idx) => (
            <button
              key={brand.name}
              onClick={() => setActiveBrand(idx)}
              className={`px-6 py-3 rounded-full font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeBrand === idx
                  ? "bg-[#FF6A00] text-black shadow-[0_0_25px_rgba(255,106,0,0.5)] scale-105"
                  : "bg-[#111111] border border-white/10 text-[#B8B8B8] hover:text-white"
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* Branded Hardware Mockup Display */}
        <div className="rounded-4xl bg-[#111111] border border-white/10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl relative overflow-hidden">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FFC107]">
              Concept Render: {brands[activeBrand].name}
            </div>

            <h3 className="font-display font-bold text-3xl sm:text-4xl text-white">
              {brands[activeBrand].tagline}
            </h3>

            <div className="space-y-4 pt-2 border-t border-white/10">
              <div className="flex items-center gap-3 text-sm text-[#B0B0B0]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00]" />
                <span><strong className="text-white">Custom Branding:</strong> {brands[activeBrand].branding}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#B0B0B0]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00]" />
                <span><strong className="text-white">Software Preset:</strong> {brands[activeBrand].software}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#B0B0B0]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00]" />
                <span><strong className="text-white">Setup Time:</strong> 5 minutes plug-and-play</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SmartImage
              src={brands[activeBrand].image}
              alt={`PRESSO Branded for ${brands[activeBrand].name}`}
              fallbackTitle={`PRESSO ${brands[activeBrand].name} Branded Mockup`}
              aspectRatio="16:9"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
