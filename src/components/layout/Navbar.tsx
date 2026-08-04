"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenDemoModal?: () => void;
}

export function Navbar({ onOpenDemoModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "/#meet-presso" },
    { name: "Use Cases", href: "/campaign-ideas" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Campaign Library", href: "/campaign-ideas" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 flex items-center justify-between ${
          scrolled
            ? "bg-[#080808]/90 backdrop-blur-2xl border-b border-white/[.06] px-8 py-4 rounded-2xl shadow-[0_2px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/icon.png"
            alt="PRESSO Logo"
            className="w-7 h-7 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-display font-bold text-[17px] tracking-widest text-white">
            PRESSO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.12em] text-[#888888] hover:text-white transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Book Demo CTA */}
        <div className="hidden lg:flex">
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-full border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#888888] hover:text-white p-1.5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#0A0A0A]/98 backdrop-blur-2xl border border-white/[.07] p-6 flex flex-col gap-5"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#888888] hover:text-white py-3 border-b border-white/[.05] transition-colors tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal?.(); }}
              className="w-full py-3 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider"
            >
              Book Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
