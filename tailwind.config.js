/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xs: '500px',
      sm: '750px',
      md: '990px',
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
    },
    extend: {},
  },
  plugins: [],
}

