import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        minDesktop: "1200px",
        ipod: "980px",
        mobile: "768px",
        small: "540px",
        extraSmall: "400px",
      },
      spacing: {
        "0px": "0px",
        px: "1px",
        "2px": "2px",
        "4px": "4px",
        "8px": "8px",
        "12px": "12px",
        "16px": "16px",
        "20px": "20px",
        "32px": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
