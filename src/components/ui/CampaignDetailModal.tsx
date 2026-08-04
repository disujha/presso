"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Target, Users, Wrench, Building, ArrowRight } from "lucide-react";
import { SmartMedia } from "@/components/ui/SmartMedia";

export interface CampaignDetail {
  title: string;
  brand: string;
  pitch: string;
  industry: string;
  objective: string;
  targetAudience?: string;
  duration: string;
  customization: string;
  image?: string;
  video?: string;
}

interface CampaignDetailModalProps {
  campaign: CampaignDetail | null;
  onClose: () => void;
  onOpenDemoModal: () => void;
}

export function CampaignDetailModal({ campaign, onClose, onOpenDemoModal }: CampaignDetailModalProps) {
  if (!campaign) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#111111] border border-white/15 p-6 sm:p-8 shadow-[0_0_80px_rgba(255,106,0,0.3)] z-10 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-[#B0B0B0] hover:text-white hover:bg-white/10 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Header */}
          <SmartMedia
            src={campaign.image}
            type="image"
            alt={campaign.title}
            fallbackTitle={campaign.title}
            aspectRatio="16:9"
          />

          {/* Title & Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] font-mono text-xs font-bold">
                Pitch Idea for {campaign.brand}
              </span>
              <span className="text-xs font-mono text-[#FFC107] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {campaign.duration}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">{campaign.title}</h3>
            <p className="text-sm text-[#B0B0B0] leading-relaxed font-light">{campaign.pitch}</p>
          </div>

          {/* Detailed Mechanics Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF6A00] font-bold">
                <Target className="w-3.5 h-3.5" /> Campaign Objective
              </div>
              <p className="text-xs text-[#B0B0B0]">{campaign.objective}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF6A00] font-bold">
                <Users className="w-3.5 h-3.5" /> Target Audience
              </div>
              <p className="text-xs text-[#B0B0B0]">{campaign.targetAudience || "Expo Visitors, Shoppers & Brand Fans"}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF6A00] font-bold">
                <Building className="w-3.5 h-3.5" /> Recommended Industry
              </div>
              <p className="text-xs text-[#B0B0B0]">{campaign.industry}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF6A00] font-bold">
                <Wrench className="w-3.5 h-3.5" /> Customization Possibilities
              </div>
              <p className="text-xs text-[#B0B0B0]">{campaign.customization}</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenDemoModal();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF6A00] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,106,0,0.4)]"
            >
              Pitch This Campaign to Client <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 text-[#B0B0B0] font-bold text-xs uppercase tracking-wider hover:text-white"
            >
              Close Breakdown
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
