/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        primary: '#010C80',
        hover: '#333c99'
      },
      container: {
        center: true,
        padding: '16px'
      },
    },
  },
  plugins: [],
}

