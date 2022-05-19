const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        main: '#e6007e',
        secondary: '#314896',
        black: '#434343',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
