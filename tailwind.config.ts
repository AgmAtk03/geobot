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
        navy: {
          950: "#050b18",
          900: "#0a1628",
          800: "#0f1f3a",
          700: "#152a4a",
        },
        accent: {
          cyan: "#22d3ee",
          gold: "#fbbf24",
        },
      },
    },
  },
  plugins: [],
};

export default config;
