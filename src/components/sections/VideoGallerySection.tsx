"use client";

import { motion } from "framer-motion";
import { SmartMedia } from "@/components/ui/SmartMedia";
import { Film, ArrowRight, Download } from "lucide-react";

interface VideoGalleryProps {
  onOpenVideoModal: () => void;
  onOpenDemoModal: () => void;
  onOpenBrochureModal: () => void;
}

export function VideoGallerySection({ onOpenVideoModal, onOpenDemoModal, onOpenBrochureModal }: VideoGalleryProps) {
  const videos = [
    {
      title: "Reaction Speed Challenge",
      location: "Tech Expo 2026 • 2,400+ Presses",
      thumbnail: "/images/presso_activation.jpg",
      videoSrc: "/videos/trade-show.mp4",
      duration: "01:24",
    },
    {
      title: "Flagship Retail Activation",
      location: "Luxury Mall • 5,100+ Shoppers",
      thumbnail: "/images/retail.jpg",
      videoSrc: "/videos/retail-demo.mp4",
      duration: "00:48",
    },
    {
      title: "Automotive Showroom Launch",
      location: "Auto Expo • Stage Countdown",
      thumbnail: "/images/automotive.jpg",
      videoSrc: "/videos/hardware-demo.mp4",
      duration: "02:10",
    },
    {
      title: "FIXTO Industrial Case Reel",
      location: "Industrial Expo • Live Assembly",
      thumbnail: "/images/industrial.jpg",
      videoSrc: "/videos/fixto-case-study.mp4",
      duration: "01:45",
    },
  ];

  return (
    <section className="relative section-pad bg-[#050505] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-xs font-mono text-[#B0B0B0] uppercase tracking-widest">
            <Film className="w-3.5 h-3.5 text-[#FF6A00]" /> Netflix-Style Video Showcase
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight">
            Watch PRESSO in Action <br />
            <span className="text-gradient-gold">Around the World.</span>
          </h2>
          <p className="text-lg text-[#B0B0B0] font-light max-w-xl mx-auto leading-relaxed">
            Real crowd reactions, high-speed button slams, and live stage cheer moments filmed at real client activations.
          </p>
        </div>

        {/* Netflix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, idx) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={onOpenVideoModal}
              className="rounded-3xl bg-[#111111] border border-white/10 p-4 space-y-3 hover:border-[#FF6A00] hover:shadow-[0_0_40px_rgba(255,106,0,0.3)] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <SmartMedia
                src={video.videoSrc}
                type="video"
                title={video.title}
                fallbackTitle={video.title}
                poster={video.thumbnail}
                aspectRatio="16:9"
                onClick={onOpenVideoModal}
              />

              <div className="space-y-1 px-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#B0B0B0]">
                  <span>{video.location}</span>
                  <span className="text-[#FF6A00] font-bold">{video.duration}</span>
                </div>
                <h3 className="font-display font-bold text-base text-white group-hover:text-[#FF6A00] transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10">
          <button
            onClick={onOpenDemoModal}
            className="btn-primary scale-105"
          >
            Request Live Demo <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenBrochureModal}
            className="btn-secondary"
          >
            Download Brochure <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
