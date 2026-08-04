"use client";

import { useState, useEffect, useRef } from "react";
import { Trophy, Flame, Zap, Volume2, VolumeX } from "lucide-react";

export function InteractiveDemoSection() {
  const [gameState, setGameState] = useState<"idle" | "running" | "finished">("idle");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [pressCount, setPressCount] = useState(4829);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Leaderboard data
  const [leaderboard] = useState([
    { rank: 1, name: "Experiential Agency X", time: "04.12s", badge: "Gold" },
    { rank: 2, name: "Tesla Retail Demo", time: "04.88s", badge: "Silver" },
    { rank: 3, name: "Nike Store Activation", time: "05.10s", badge: "Bronze" },
  ]);

  // Audio effect simulator using Web Audio API
  const playBeep = (freq: number, duration: number) => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context fallback
    }
  };

  const handlePressButton = () => {
    if (gameState === "idle") {
      // Start Stopwatch Game
      setGameState("running");
      setElapsedTime(0);
      playBeep(880, 0.15);
      const startTime = Date.now();

      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    } else if (gameState === "running") {
      // Stop Timer
      if (timerRef.current) clearInterval(timerRef.current);
      setGameState("finished");
      setPressCount((prev) => prev + 1);
      playBeep(1200, 0.3);

      const finalSec = elapsedTime / 1000;
      if (!bestTime || finalSec < bestTime) {
        setBestTime(finalSec);
      }
    } else if (gameState === "finished") {
      // Reset
      setGameState("idle");
      setElapsedTime(0);
      playBeep(440, 0.1);
    }
  };

  const formatTime = (ms: number) => {
    const totalSec = ms / 1000;
    const sec = Math.floor(totalSec).toString().padStart(2, "0");
    const hundredths = Math.floor((ms % 1000) / 10).toString().padStart(2, "0");
    return `${sec}.${hundredths}`;
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="interactive-demo" className="relative section-pad bg-[#0A0A0A] overflow-hidden border-t border-white/[.06]">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#FF6A00]/50 text-[11px] font-mono text-[#FF6A00] uppercase tracking-[0.14em]">
            <Zap className="w-3.5 h-3.5" /> Try it Live
          </div>
          <h2 className="text-white">Press the button. Feel the difference.</h2>
          <p className="text-base text-[#B8B8B8] font-light leading-[1.8]">
            This is what your booth visitors experience — a millisecond timer, real audio feedback, and a live leaderboard. In your browser, right now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Button Simulator — elevated centerpiece */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-lg rounded-3xl bg-[#141414] demo-frame p-8 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] flex flex-col items-center justify-between min-h-[500px] overflow-hidden group">
              {/* Back ambient radial glow */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                  gameState === "running"
                    ? "bg-[#FF6A00]/25 opacity-100"
                    : gameState === "finished"
                    ? "bg-[#FFC107]/25 opacity-100"
                    : "bg-radial-glow opacity-40"
                }`}
              />

              {/* Hardware Header Bar */}
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#B8B8B8] relative z-10 pb-4 border-b border-white/[.08]">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      gameState === "running"
                        ? "bg-[#FF6A00] animate-ping"
                        : gameState === "finished"
                        ? "bg-[#FFC107]"
                        : "bg-green-500"
                    }`}
                  />
                  <span className="text-white font-bold uppercase">PRESSO CORE v2.4</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#B0B0B0] hover:text-white transition-colors"
                    title="Toggle Haptic Sound"
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4 text-[#FF6A00]" /> : <VolumeX className="w-4 h-4" />}
                  </button>
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-[10px] text-white">
                    {gameState.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Digital Timer Display Box */}
              <div className="my-6 py-6 px-10 rounded-3xl bg-[#050505] border border-[#FF6A00]/40 shadow-[0_0_30px_rgba(255,106,0,0.3)] flex flex-col items-center justify-center relative z-10 min-w-[280px]">
                <span className="text-[10px] font-mono text-[#B0B0B0] uppercase tracking-widest mb-1">
                  STOPWATCH TIMER (00.00s)
                </span>
                <span
                  className={`font-mono font-bold text-5xl sm:text-6xl tracking-widest transition-colors ${
                    gameState === "running"
                      ? "text-[#FF6A00] animate-pulse"
                      : gameState === "finished"
                      ? "text-[#FFC107]"
                      : "text-white"
                  }`}
                >
                  {formatTime(elapsedTime)}s
                </span>
              </div>

              {/* Interactive Physical Button Visual */}
              <div className="relative my-4 flex items-center justify-center">
                {/* Glowing Outer Halo */}
                <div
                  className={`absolute rounded-full transition-all duration-500 pointer-events-none ${
                    gameState === "running"
                      ? "w-64 h-64 bg-[#FF6A00] blur-2xl opacity-70 animate-ping"
                      : gameState === "finished"
                      ? "w-64 h-64 bg-[#FFC107] blur-2xl opacity-80"
                      : "w-52 h-52 bg-[#FF6A00]/40 blur-xl opacity-50"
                  }`}
                />

                {/* The Pressable Button */}
                <button
                  onClick={handlePressButton}
                  className={`relative w-44 h-44 rounded-full border-4 transition-all duration-150 flex flex-col items-center justify-center shadow-2xl active:scale-90 cursor-pointer ${
                    gameState === "running"
                      ? "bg-gradient-to-b from-[#FF6A00] to-[#E05500] border-white shadow-[0_0_80px_rgba(255,106,0,0.9)]"
                      : gameState === "finished"
                      ? "bg-gradient-to-b from-[#FFC107] to-[#D49E00] border-white shadow-[0_0_60px_rgba(255,193,7,0.8)]"
                      : "bg-gradient-to-b from-[#1E1E1E] via-[#111111] to-[#0A0A0A] border-[#FF6A00]/80 hover:border-[#FF6A00] shadow-[0_0_40px_rgba(255,106,0,0.4)]"
                  }`}
                >
                  <span
                    className={`font-display font-bold text-lg uppercase tracking-wider ${
                      gameState === "running"
                        ? "text-black animate-pulse"
                        : gameState === "finished"
                        ? "text-black"
                        : "text-white group-hover:text-[#FF6A00]"
                    }`}
                  >
                    {gameState === "idle" ? "PRESS ME" : gameState === "running" ? "STOP!" : "AGAIN"}
                  </span>
                  <span className="text-[9px] font-mono opacity-70 text-white uppercase mt-1">
                    {gameState === "idle" ? "Click to Start" : gameState === "running" ? "Click to Stop" : "Click to Reset"}
                  </span>
                </button>
              </div>

              {/* Footer Instruction Bar */}
              <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#B0B0B0] relative z-10">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Flame className="w-3.5 h-3.5 text-[#FF6A00]" /> Total Presses Today: {pressCount.toLocaleString()}
                </span>
                {bestTime && (
                  <span className="font-mono text-[#FFC107] font-bold">
                    Best Reaction: {bestTime.toFixed(2)}s
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Real-time Live Leaderboard */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#FFC107] uppercase tracking-[0.12em]">
                <Trophy className="w-3.5 h-3.5" /> Live Leaderboard
              </div>
              <h3 className="text-white">Instant competition. Zero friction.</h3>
              <p className="text-[15px] text-[#B8B8B8] font-light leading-[1.75]">
                When visitors press the physical PRESSO button at your booth, their scores broadcast live to your stage screen and cloud leaderboard.
              </p>
            </div>

            {/* Leaderboard Card List */}
            <div className="rounded-2xl bg-[#141414] border border-white/[.08] p-6 space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#B8B8B8] pb-3 border-b border-white/[.07]">
                <span>RANK & CAMPAIGN</span>
                <span>TIME RECORD</span>
              </div>

              {leaderboard.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#FF6A00]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full font-mono font-bold text-xs flex items-center justify-center ${
                        item.rank === 1
                          ? "bg-[#FFC107] text-black shadow-[0_0_15px_rgba(255,193,7,0.6)]"
                          : item.rank === 2
                          ? "bg-slate-300 text-black"
                          : "bg-amber-700 text-white"
                      }`}
                    >
                      #{item.rank}
                    </span>
                    <span className="font-display font-bold text-sm text-white">{item.name}</span>
                  </div>
                  <span className="font-mono font-bold text-sm text-[#FF6A00]">{item.time}</span>
                </div>
              ))}
            </div>

            {/* Feature callouts */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-5 rounded-2xl bg-[#141414] border border-white/[.07] space-y-1.5">
                <h4 className="font-bold text-white text-[13px]">QR Lead Sync</h4>
                <p className="text-[12px] text-[#B8B8B8] leading-snug">Winners scan QR to claim reward instantly</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#141414] border border-white/[.07] space-y-1.5">
                <h4 className="font-bold text-white text-[13px]">Custom Sound FX</h4>
                <p className="text-[12px] text-[#B8B8B8] leading-snug">Custom audio samples on each press</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
