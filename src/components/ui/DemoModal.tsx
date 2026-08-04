"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Send, Building, Mail, User, Phone } from "lucide-react";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      message: formData.get("message") || "",
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "demoRequests"), data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting demo request:", error);
      alert("Failed to schedule demo. Please try again.");
    } finally {
      setLoading(false);
    }
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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#111111] border border-white/10 p-8 shadow-[0_0_80px_rgba(255,106,0,0.25)] z-10"
          >
            {/* Close Button */}
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
                  <h3 className="text-2xl font-display font-bold text-white">Demo Scheduled</h3>
                  <p className="text-sm text-[#B0B0B0]">
                    Thank you! Our experiential tech specialist will contact you within 4 hours to arrange your live PRESSO demonstration.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="w-full py-3 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[0_0_35px_rgba(255,106,0,0.7)] transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-[10px] font-mono uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" /> Live Product Demonstration
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Experience PRESSO</h3>
                  <p className="text-xs text-[#B0B0B0]">
                    Schedule a live interactive walkthrough of the hardware, software campaign builder, and custom workflows.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#B0B0B0] uppercase mb-1.5">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]" />
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
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
                        name="email"
                        type="email"
                        required
                        placeholder="alex@agency.com"
                        className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6A00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#B0B0B0] uppercase mb-1.5">
                        Agency / Brand
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]" />
                        <input
                          name="company"
                          type="text"
                          required
                          placeholder="Experiential Co."
                          className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6A00] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#B0B0B0] uppercase mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666]" />
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="+1 (555) 019-2834"
                          className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6A00] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#B0B0B0] uppercase mb-1.5">
                      Upcoming Campaign / Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your upcoming exhibition, activation, or event..."
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF6A00] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,106,0,0.5)] hover:shadow-[0_0_40px_rgba(255,106,0,0.8)] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      "Confirming Slot..."
                    ) : (
                      <>
                        Confirm Live Demo <Send className="w-4 h-4" />
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
