/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 0 0 3px rgba(116, 192, 252, 1)",
      },
    },
  },
  plugins: [],
};
