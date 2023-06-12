/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [ 
    require('@tailwindcss/aspect-ratio'),
  ],
}