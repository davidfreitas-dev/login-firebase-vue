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
      'brand-hover': '#66c090',
      brand: '#55b984',
      danger: '#FF316D',
      success: '#00E4A1'
    }
  },
  plugins: [],
}
