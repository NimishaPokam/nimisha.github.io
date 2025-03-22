/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{html,md,markdown}",
    "./layouts/**/*.{html,partial}",
    "./static/**/*.{html,js}",
    "./themes/digitalgarden/layouts/**/*.{html,partial}",
    "./themes/digitalgarden/content/**/*.{html,md,markdown}",
    "./themes/digitalgarden/static/**/*.{html,js}",
    "./themes/digitalgarden/layouts/**/*.html",
    "./themes/digitalgarden/assets/js/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}