// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,}",
    "./components/**/*.{js,ts,jsx,tsx,}",
    "./src/**/*.{js,ts,jsx,tsx,}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Premium dark palette
        darkBg: "#0f1115",        // main background
        darkCard: "#1a1d23",      // cards
        darkSoft: "#2a2f38",      // borders / inputs
        gold: "#eab308",          // accent
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },

      animation: {
        pop: "pop 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
