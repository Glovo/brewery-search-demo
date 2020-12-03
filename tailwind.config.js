/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat']
      },
      colors: {
        gray: colors.trueGray,
        glovo: {
          yellow: '#FFC244',
          green: '#00A082',
          gray: '#313131'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
