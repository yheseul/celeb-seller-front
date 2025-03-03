/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#10b981",
        kakao: "#f9e000",
        naver: "#03c75a"
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".flexCol": { "@apply flex flex-col": {} },
        ".flexColCenter": { "@apply flex flex-col items-center": {} },
        ".flexRowCenter": { "@apply flex items-center": {} },
        ".navMenu": { "@apply flex gap-1 items-center cursor-pointer": {} },
        ".categoryItem": { "@apply p-2 hover:bg-main hover:bg-opacity-50": {} },
      });
    }),
  ],
};
export default config;
