/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./**/*.{razor,html}"],
  theme: {
    extend: {
    colors: {
      'bubble-gum': '#ff77e9',
      'mountain-dew': '#ff77e9',
      'crimson': '#dc143c'
    }
  },
  plugins: [],
}
}
