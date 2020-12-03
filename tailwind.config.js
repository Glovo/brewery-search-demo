module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      fontFamily: {
        sans: ['Montserrat']
      },
      colors: {
        glovo: {
          yellow: '#FFC244',
          green: '#00A082',
          gray: '#313131'
        }
      }
    }
  },
  plugins: []
};
