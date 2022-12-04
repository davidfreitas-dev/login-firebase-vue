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
      dark: '#34355B',
      black: '#252644',
      'dark-gray': '#9396AA',
      white: '#FFFFFF',
      light: '#F5F7FA',
      brand: '#00D495',
      alert: '#FFBE00',
      danger: '#FF316D',
      success: '#00E4A1',
    }
  },
  plugins: [],
}
