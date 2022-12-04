/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {},
    colors: {
      ...require('tailwindcss/colors'),
      brand: '#55b984',
      'brand-hover': '#66c090'
    }
  },
  plugins: [],
}
