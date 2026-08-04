"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Download, FileText, Mail, User, Building } from "lucide-react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#111111] border border-white/10 p-8 shadow-[0_0_80px_rgba(255,106,0,0.25)] z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-[#B0B0B0] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#FF6A00]/20 border border-[#FF6A00] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,106,0,0.5)]">
                  <CheckCircle2 className="w-8 h-8 text-[#FF6A00]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white">Brochure Sent</h3>
                  <p className="text-sm text-[#B0B0B0]">
                    The PRESSO Product Specs & Campaign Guide PDF has been sent to your email. You can also download it directly below.
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("PRESSO_Product_Brochure_2026.pdf download started!");
                    }}
                    className="w-full py-3.5 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,106,0,0.4)]"
                  >
                    Download PDF Now <Download className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full py-3 rounded-full bg-white/5 text-[#B0B0B0] font-bold text-xs uppercase tracking-wider hover:text-white"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-[10px] font-mono uppercase tracking-widest">
                    <FileText className="w-3.5 h-3.5" /> Technical Specification Guide
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Download PRESSO Brochure</h3>
                  <p className="text-xs text-[#B0B0B0]">
                    Get complete hardware dimensions, software campaign presets, API integration details, and pricing models.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#B0B0B0] uppercase mb-1.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]" />
                      <input
                        type="text"
                        required
                        placeholder="Jordan Miller"
                        className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6A00] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#B0B0B0] uppercase mb-1.5">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]" />
                      <input
                        type="email"
                        required
                        placeholder="jordan@agency.com"
                        className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6A00] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#B0B0B0] uppercase mb-1.5">
                      Company / Agency
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]" />
                      <input
                        type="text"
                        required
                        placeholder="Global Activations Inc."
                        className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6A00] transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,106,0,0.5)] hover:shadow-[0_0_40px_rgba(255,106,0,0.8)] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      "Generating Guide..."
                    ) : (
                      <>
                        Download Brochure PDF <Download className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
