/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/Pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        soleil: ["var(--font-soleil)"],
        acumin: ["var(--font-acumin)"],
        acuminBold: ["var(--font-acumin-bold)"],
        avenir: ["var(--font-avenir)"],
        cormorant: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [],
};
