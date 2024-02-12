import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple:  {
          10: "#202654",
          20: "#806ce8",
          30: "#6945d8",
          40: "#d4d6eb",
          50: "#091644"
        },
        green: {
          20: "#24ddb0",
          30: "#acfde4"
        },
        gray: {
          10: "#f2f2fb"
        },
        black: {
          10: "#1b0a2d",
          20: "#000"
        }
      },
      backgroundImage: {
        "hero-bg": "url('/hero3d-bg.png')",
        "mobile-ads": "url('/mobile-advert.png')",
        "review-bg": "url('/review-bg.svg')"
      },
      screens: {
        "xs": "440px",
        "3xl": "1680px",
        "4xl": "220px"
      }
    },
  },
  plugins: [],
};
export default config;
