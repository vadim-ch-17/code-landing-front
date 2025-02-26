import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkPrimary: "#18191F",
        mediumPrimary: "#4D4D4D",
        lightPrimary: "#717171",
        lightGray: "#89939E",
        green: "#4CAF4F",
        silver: "#F5F7FA",
      },
      fontSize: {
        "body-16-24": ["1rem", "1.5rem"],
        "body-14-20": ["0.875rem", "1.25rem"],
        "heading-18-20": ["1.125rem", "1.25rem"],
        "heading-20-28": ["1.25rem", "1.75rem"],
        "heading-24-28": ["1.5rem", "1.75rem"],
        "heading-28-36": ["1.75rem", "2.25rem"],
        "heading-36-44": ["2.25rem", "2.75rem"],
        "heading-64-76": ["4rem", "4.75rem"],
      },
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
      },
      boxShadow: {
        "drop-sm": "0px 24px 28px 0px rgba(0, 0, 0, 0.09)",
        "drop-md": " 0px 13px 18px 3px rgba(0,0,0,0.25)",
        "drop-xs": "0px 10px 26px -8px rgba(171,190,209,1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
