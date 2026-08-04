"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Play } from "lucide-react";

export interface SmartMediaProps {
  src?: string;
  type?: "image" | "video";
  alt?: string;
  title?: string;
  fallbackTitle?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "custom";
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  hoverZoom?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
}

export function SmartMedia({
  src,
  type = "image",
  alt = "PRESSO Experience Asset",
  title,
  fallbackTitle = "Experience",
  aspectRatio = "16:9",
  className = "",
  poster,
  autoPlay = false,
  muted = true,
  loop = true,
  hoverZoom = true,
  glowEffect = true,
  onClick,
}: SmartMediaProps) {
  const [hasError, setHasError] = useState(!src);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    custom: "aspect-video",
  }[aspectRatio];

  const handleError = () => {
    console.warn(`[SmartMedia] Asset failed to load: "${src}". Rendering fallback placeholder.`);
    setHasError(true);
  };

  // Fallback Placeholder Component
  if (hasError || !src) {
    return (
      <div
        onClick={onClick}
        className={`relative w-full ${aspectClasses} rounded-3xl bg-[#111111] border border-dashed border-[#FF6A00]/50 p-6 flex flex-col items-center justify-center text-center space-y-3 overflow-hidden shadow-[0_0_30px_rgba(255,106,0,0.15)] group transition-all duration-300 ${
          onClick ? "cursor-pointer hover:border-[#FF6A00] hover:shadow-[0_0_40px_rgba(255,106,0,0.3)]" : ""
        } ${className}`}
      >
        {/* Ambient Back Glow */}
        <div className="absolute inset-0 bg-radial-glow opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none" />

        {/* Placeholder Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-[#FF6A00]/40 flex items-center justify-center text-[#FF6A00] shadow-[0_0_20px_rgba(255,106,0,0.4)] group-hover:scale-110 transition-transform">
          {type === "video" ? (
            <Play className="w-6 h-6 fill-current ml-0.5" />
          ) : (
            <ImageIcon className="w-6 h-6" />
          )}
        </div>

        {/* Placeholder Labels */}
        <div className="space-y-1 relative z-10 max-w-xs">
          <p className="font-display font-bold text-sm text-white group-hover:text-[#FF6A00] transition-colors">
            {title || fallbackTitle}
          </p>
          <p className="text-xs font-mono text-[#FFC107] uppercase tracking-wider">
            {type === "video" ? "Video Coming Soon" : "Image Coming Soon"}
          </p>
          <p className="text-[11px] text-[#B0B0B0] font-light">
            This experience will be available shortly
          </p>
        </div>
      </div>
    );
  }

  // Video Renderer
  if (type === "video") {
    return (
      <div
        onClick={onClick}
        className={`relative w-full ${aspectClasses} rounded-3xl overflow-hidden bg-[#111111] border border-white/10 ${
          glowEffect ? "hover:border-[#FF6A00]/50 hover:shadow-[0_0_30px_rgba(255,106,0,0.25)]" : ""
        } transition-all duration-500 group ${className}`}
      >
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          onError={handleError}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hoverZoom ? "group-hover:scale-105" : ""
          }`}
        />
        {/* Play Overlay if clickable */}
        {onClick && (
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#FF6A00] flex items-center justify-center text-black shadow-[0_0_25px_rgba(255,106,0,0.8)] group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-current ml-1" />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Image Renderer — uses native img with object-contain for product shots, fill for scene photos
  return (
    <div
      onClick={onClick}
      className={`relative w-full ${aspectClasses} overflow-hidden bg-transparent ${
        glowEffect ? "hover:opacity-95" : ""
      } transition-all duration-500 group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`object-contain transition-all duration-700 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${hoverZoom ? "group-hover:scale-105" : ""}`}
      />
    </div>
  );
}

export function SmartImage(props: Omit<SmartMediaProps, "type">) {
  return <SmartMedia {...props} type="image" />;
}

export function SmartVideo(props: Omit<SmartMediaProps, "type">) {
  return <SmartMedia {...props} type="video" />;
}
