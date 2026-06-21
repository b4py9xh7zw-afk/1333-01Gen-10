/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: "#E8F0FF",
          100: "#B4CCFF",
          200: "#80ADFF",
          300: "#4D8AFF",
          400: "#1A6BFF",
          500: "#165DFF",
          600: "#0E4FD8",
          700: "#0A3FB0",
          800: "#062E88",
          900: "#031F60",
        },
        secondary: {
          50: "#E6FBFA",
          100: "#B3F0EE",
          200: "#80E6E2",
          300: "#4DDBD6",
          400: "#1AD1CA",
          500: "#0FC6C2",
          600: "#0C9E9B",
          700: "#097674",
          800: "#064E4D",
          900: "#032625",
        },
        error: {
          50: "#FFECEC",
          100: "#FFC2C2",
          200: "#FF9999",
          300: "#FF7070",
          400: "#FF4747",
          500: "#F53F3F",
          600: "#D42A2A",
          700: "#B31E1E",
          800: "#911212",
          900: "#700606",
        },
        dark: {
          bg: "#0F172A",
          card: "#1E293B",
          border: "#334155",
          text: "#E2E8F0",
          muted: "#94A3B8",
        },
        light: {
          bg: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
          text: "#1E293B",
          muted: "#64748B",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        shake: "shake 0.5s ease-in-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(22, 93, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(22, 93, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
