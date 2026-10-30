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
        primary: {
          50: "#F1F4F8",
          100: "#DFE6F0",
          200: "#C1CEE2",
          300: "#9EB3D2",
          400: "#7A97C2",
          500: "#5874A3", // RGB(88, 116, 163)
          600: "#465E87",
          700: "#364A6C",
          800: "#283751",
          900: "#1C273A",
          DEFAULT: "#5874A3",
        },
        secondary: {
          50: "#F4F9FC",
          100: "#E5F2F8",
          200: "#CFE7F2",
          300: "#B7DCEB",
          400: "#9ECEE1", // RGB(158, 206, 225)
          500: "#82BDD4",
          600: "#5DA5C2",
          700: "#428CA9",
          800: "#336E85",
          900: "#255263",
          DEFAULT: "#9ECEE1",
        },
        brand: {
          navy: "#0E1A2B",
          slate: "#1E2B3E",
          cloud: "#F8FAFC",
          accent: "#FF7849",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
