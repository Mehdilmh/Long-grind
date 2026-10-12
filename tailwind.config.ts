import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        charcoal: { DEFAULT: "#151B20", 900: "#0D1114", 800: "#151B20", 700: "#222B32", 600: "#2C363E" },
        lime: { DEFAULT: "#D9FF70", 300: "#E6FF9E", 500: "#D9FF70", 700: "#4A5E12" },
        ivory: { DEFAULT: "#F5F2EB", 100: "#FBFAF6", 200: "#F5F2EB", 300: "#E9E4D8", 400: "#D8D1C1" },
        steel: { DEFAULT: "#8B969C", 600: "#5D676D", 700: "#4A5359" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw + 1rem, 5.75rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 3.5vw + 1rem, 3.75rem)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 2vw + 1rem, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: { prose: "68ch" },
      keyframes: {
        "rise-in": { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "none" } },
        grind: { from: { strokeDashoffset: "240" }, to: { strokeDashoffset: "0" } },
      },
      animation: {
        "rise-in": "rise-in 700ms cubic-bezier(.2,.7,.2,1) both",
        grind: "grind 1.4s cubic-bezier(.6,0,.2,1) both",
      },
    },
  },
  plugins: [typography],
};

export default config;
