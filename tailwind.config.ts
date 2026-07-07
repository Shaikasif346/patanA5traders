import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5ff",
          100: "#d9e8ff",
          700: "#12315f",
          800: "#0b2447",
          900: "#071a33",
          950: "#041225"
        },
        gold: {
          100: "#fff1c7",
          300: "#f6d36b",
          500: "#d4a017",
          600: "#b7860d"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(4, 18, 37, 0.14)",
        gold: "0 16px 36px rgba(212, 160, 23, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
