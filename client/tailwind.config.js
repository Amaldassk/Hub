/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ksC1 : '#ff7618',
        ksC2 : '#015198',
        ksC3 : '#015198',
        ksC4 : '#303849',
        ksC5 : '#303849',
      }
    },
    fontFamily: {
      ksN: ['Nunito', 'sans-serif'],
      ksA: ['Anton', 'sans-serif'],
      ksR: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

