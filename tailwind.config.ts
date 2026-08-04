import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "card-dark": "#111111",
        "card-secondary": "#1A1A1A",
        "card-tertiary": "#222222",
        "presso-orange": "#FF6A00",
        "presso-yellow": "#FFC107",
        "text-muted": "#B0B0B0",
        "text-dim": "#666666",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        "glow-orange": "0 0 50px -10px rgba(255, 106, 0, 0.4)",
        "glow-orange-lg": "0 0 100px 0px rgba(255, 106, 0, 0.5)",
        "glow-yellow": "0 0 50px -10px rgba(255, 193, 7, 0.4)",
        "glow-card": "0 20px 40px -15px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "breath-glow": "breath 3s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        breath: {
          "0%": { boxShadow: "0 0 30px 0px rgba(255, 106, 0, 0.3)", transform: "scale(1)" },
          "100%": { boxShadow: "0 0 80px 20px rgba(255, 106, 0, 0.65)", transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
