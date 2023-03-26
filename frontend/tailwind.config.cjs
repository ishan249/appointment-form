/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'AlbertSans': ['Albert Sans', 'sans-serif'],
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}