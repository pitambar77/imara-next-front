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
        soleil: ["Soleil", "sans-serif"],
        acumin: ["AcuminPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};