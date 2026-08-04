"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc = "/videos/presso_demo.mp4",
  title = "PRESSO Real Customer Deployment Demo",
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleReplay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl rounded-3xl bg-[#050505] border border-white/15 p-4 sm:p-6 shadow-[0_0_100px_rgba(255,106,0,0.35)] z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] animate-pulse" />
                <span className="font-display font-bold text-sm sm:text-base text-white">{title}</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-[#FF6A00] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 group">
              {hasError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4 bg-[#111111] border border-dashed border-[#FF6A00]/50 rounded-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-[#FF6A00]/40 flex items-center justify-center text-[#FF6A00] shadow-[0_0_30px_rgba(255,106,0,0.5)]">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-lg text-white">Demo Video Coming Soon</h4>
                    <p className="text-xs font-mono text-[#FFC107] uppercase">This Experience will be available shortly</p>
                  </div>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    playsInline
                    onError={() => setHasError(true)}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full h-full object-cover"
                  />

                  {/* Player Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-white transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="p-2.5 rounded-full bg-[#FF6A00] text-black font-bold hover:scale-105 transition-transform"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>
                      <button
                        onClick={handleReplay}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        title="Replay"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#B0B0B0] hidden sm:inline">REAL CUSTOMER DEPLOYMENT</span>
                      <button
                        onClick={handleFullscreen}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        title="Fullscreen"
                      >
                        <Maximize className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Notice */}
            <div className="pt-4 text-xs font-mono text-[#B0B0B0] flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" /> Actual Customer Deployment @ Live Exhibition Environment
              </span>
              <span className="text-[#FF6A00]">Press ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
