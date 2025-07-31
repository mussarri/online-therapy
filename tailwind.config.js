/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#58a7db",
          dark: "#013c63",
          neutral: "#add4ed",
        },
      },
    },
  },
  plugins: [],
};
