import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        ink: {
          50: "#F5F5F7",
          100: "#E5E5E7",
          300: "#A1A1A6",
          500: "#6E6E73",
          700: "#3A3A3C",
          900: "#141414",
          950: "#0A0A0A",
        },
        signal: {
          DEFAULT: "#FF3B30",
          dim: "#8C1F19",
          glow: "#FF6B5E",
        },
        safe: "#34C759",
        surface: {
          0: "#000000",
          1: "#0A0A0B",
          2: "#111113",
          3: "#18181B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      fontSize: {
        "display-xl": ["5.5rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["2.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 10px 30px -18px rgba(0,0,0,0.9)",
        "card-hover": "0 1px 0 0 rgba(255,255,255,0.07) inset, 0 24px 48px -20px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,59,48,0.12)",
        "btn-primary": "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 8px 20px -6px rgba(255,59,48,0.55)",
        "btn-primary-hover": "0 1px 0 0 rgba(255,255,255,0.3) inset, 0 12px 28px -6px rgba(255,59,48,0.7)",
        glow: "0 0 120px -20px rgba(255,59,48,0.35)",
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(255,59,48,0.14), transparent 60%)",
        "grid-lines": "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "btn-shine": "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%)",
        "card-sheen": "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite",
        blink: "blink 1.6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
