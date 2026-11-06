import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          500: "#8E2A2A",
          700: "#6B1414",
          900: "#4A0E0E",
        },
        cream: {
          50: "#FFF8EE",
          100: "#FAF1DF",
          200: "#F6E7CF",
          300: "#ECD5B3",
        },
        pink: {
          300: "#F2A7B8",
          400: "#E5879E",
        },
        pandan: {
          200: "#CFE3C4",
          600: "#4E7D45",
          800: "#36592F",
        },
        choco: {
          700: "#5A3523",
          800: "#422618",
        },
        gold: {
          400: "#E8C27A",
          500: "#D4A853",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(74, 14, 14, 0.08)",
        card: "0 14px 34px -10px rgba(74, 14, 14, 0.12)",
        glow: "0 0 25px rgba(232, 194, 122, 0.35)",
        floating: "0 20px 40px -12px rgba(74, 14, 14, 0.25)",
      },
      borderRadius: {
        arch: "160px 160px 24px 24px",
      },
    },
  },
  plugins: [],
};
export default config;
