"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const links = {
    Platform: [
      { label: "Campaign Library", href: "/campaign-ideas" },
      { label: "FIXTO Case Study", href: "/case-studies" },
      { label: "Experience Engine", href: "/#meet-presso" },
      { label: "Interactive Demo", href: "/#interactive-demo" },
      { label: "For Agencies", href: "/#why-agencies" },
    ],
    Sectors: [
      { label: "Brand Activation", href: "#" },
      { label: "Experiential Retail", href: "#" },
      { label: "Exhibitions & Expos", href: "#" },
      { label: "Corporate Events", href: "#" },
      { label: "Museums & Gamification", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[.07] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[.06]">

          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/icon.png"
                alt="PRESSO Logo"
                className="w-7 h-7 object-contain"
              />
              <span className="font-display font-bold text-[17px] tracking-widest text-white">PRESSO</span>
            </div>

            <p className="text-sm text-[#B8B8B8] leading-[1.8] max-w-sm font-light">
              The programmable interactive engagement platform that transforms ordinary physical spaces into competitive, measurable brand experiences.
            </p>

            <div className="space-y-1 text-[12px] text-[#555] font-mono leading-[1.7]">
              <p className="text-[#888] font-medium">Rethela Technology</p>
              <p>WeWork NESCO IT Park, Building 4, North Wing</p>
              <p>Western Express Hwy, Goregaon</p>
              <p>Mumbai 400063</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="md:col-span-2 space-y-5">
              <h4 className="text-[11px] uppercase tracking-[0.14em] font-mono text-[#666]">{group}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-[#B8B8B8] hover:text-white transition-colors duration-200 font-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[11px] uppercase tracking-[0.14em] font-mono text-[#666]">Contact</h4>
            <div className="space-y-5">
              <div className="space-y-1.5">
                <p className="text-[11px] text-[#555] font-mono uppercase tracking-[0.1em]">Sales</p>
                <a href="mailto:sunil@presso.live" className="flex items-center gap-2 text-[13px] text-[#B8B8B8] hover:text-white transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 text-[#FF6A00] flex-shrink-0" />
                  sunil@presso.live
                </a>
              </div>
              <div className="space-y-1.5">
                <p className="text-[11px] text-[#555] font-mono uppercase tracking-[0.1em]">Support</p>
                <a href="mailto:hello@presso.live" className="flex items-center gap-2 text-[13px] text-[#B8B8B8] hover:text-white transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 text-[#FF6A00] flex-shrink-0" />
                  hello@presso.live
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#555]">
          <p>© {new Date().getFullYear()} PRESSO by Rethela Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#B8B8B8] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#B8B8B8] cursor-pointer transition-colors">Terms of Use</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#B8B8B8] hover:text-white transition-colors"
            >
              Back to top <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
