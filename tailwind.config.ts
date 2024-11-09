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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'mygreen':"#30C88D",
        'myblue':"#2D314E",
        'textblue':"#061F3B",
        'gradiant':"#31d35c,#2bb7da"
      },
    },
  },
  plugins: [],
};
export default config;
