"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FloatingCTAProps {
  onOpenDemoModal: () => void;
}

export function FloatingCTA({ onOpenDemoModal }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setVisible(pct > 15 || window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={onOpenDemoModal}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A0A0A] border border-white/15 text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:border-[#FF6A00]/60 hover:text-[#FF6A00] transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            Book Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
