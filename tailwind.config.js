/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{html,md}",
    "./layouts/**/*.html",
    "./themes/digitalgarden/layouts/**/*.html",
    "./themes/digitalgarden/content/**/*.{html,md}"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}