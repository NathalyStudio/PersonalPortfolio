/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xs: '425px',
      sm: '768px',
      md: '1024px',
      lg: '1440px',
      xlg: '1920px',
      pageMaxWidth: '1440px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      powder: '#f7f7f1',
      raisin: '#1c2131',
      pink: '#eb0075',
      navy: '#0d0535',
      teal: '#74bda1',
      slate: '#B3B3B3',
      light_grey: '#EAEAEA',
      emphasis: '#FAD30F',
      red: '#ee1400',
      charlestonBlack: '#252D2D',
      rgba_charleston_black: 'rgba(37, 45, 45, .6)',
      eire_black: '#121616',
      notion_yellow: '#dfab01',
      cardinal: '#c9184a',
      carousel_pink: '#F6D9E1',
      ...colors
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kalam: ["Kalam", "sans-serif"],
        robotoSlab: ['Roboto Slab', 'serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

