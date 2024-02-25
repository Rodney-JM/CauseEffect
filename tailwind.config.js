/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {
      colors:{
        menu:"#2b2d31",
        menuActive:"#26272b",
        menuHover: "#313338",
        textColor:"#e6e6e7",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

