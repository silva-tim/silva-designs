/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
      colors: {
        custGreen: ["#6fa869"],
      },
    },
  },
  plugins: [],
};
