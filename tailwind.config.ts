import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "story-bg": "url('/story_background.svg')",
        sackstory: "url('/bg-sackstory.svg')",
        roadmap: "url('/bg-roadmap.svg')",
        sacknomics: "url('/bg-sacknomics.svg')",
        sackbird: "url('/bg-sackbird.svg')",
        hand: "url('/hand.png')",
        "hand-lg": "url('/hand-lg.png')",
      },
      fontFamily: {
        chakraPetch: ["var(--font-chakra-petch)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
