import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sable: {
          DEFAULT: "#492E1F",
          light: "#6B5347",
          dark: "#291409",
        },
        amber: {
          DEFAULT: "#CE913B",
          light: "#DDA94E",
          dark: "#A66E2F",
        },
        cream: "#F8F5F0",
        sand: "#EAE0D2",
        background: "#FBF9F7",
        foreground: "#302016",
        "warm-gray": "#7E7168",
        border: "#E4E0DA",
      },
      fontFamily: {
        // Space Grotesk — headings, logo, display
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        // DM Sans — body, UI, captions
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-sable":
          "linear-gradient(135deg, #291409, #492E1F, #6B5347)",
        "gradient-amber": "linear-gradient(135deg, #CE913B, #DDA94E)",
        "text-gradient": "linear-gradient(90deg, #CE913B, #DDA94E)",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        DEFAULT: "0.75rem",
      },
      boxShadow: {
        // Soft, warm shadows
        card: "0 1px 3px rgba(41, 20, 9, 0.06), 0 8px 24px rgba(41, 20, 9, 0.06)",
        "card-hover":
          "0 4px 12px rgba(41, 20, 9, 0.10), 0 16px 40px rgba(41, 20, 9, 0.10)",
        hero: "0 8px 24px rgba(166, 110, 47, 0.28)",
        "hero-hover": "0 12px 36px rgba(166, 110, 47, 0.38)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "count-up": "count-up 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
