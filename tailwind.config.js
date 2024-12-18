/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5722",
        secondary: "#3A8DFF",
      },
      fontFamily: {
        cinzel: ["Cinzel", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
