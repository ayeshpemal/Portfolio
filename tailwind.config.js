/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0f4ff",
          100: "#e0eaff",
          200: "#c3d4fe",
          300: "#9ab4fd",
          400: "#6d8bfa",
          500: "#4a67f6",
          600: "#3449eb",
          700: "#2a38d8",
          800: "#282fae",
          900: "#262e89",
          950: "#1a1e57",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        dark: {
          900: "#0a0b14",
          800: "#0f1120",
          700: "#151828",
          600: "#1c2035",
          500: "#242840",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74,103,246,0.25) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(74,103,246,0.4)",
        "glow-sm": "0 0 15px rgba(74,103,246,0.25)",
        card: "0 4px 24px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
