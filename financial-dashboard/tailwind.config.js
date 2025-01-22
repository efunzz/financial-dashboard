/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {
      colors: {
        'off-white': '#F6F4F5',
        'black': '#000000',
        'white': '#FFFFFF',
        'red': '#FDEFE4',
        'green': '#F0FCF0',
        'blue': '#E6F5FA',
      }
    }
  },
  plugins: [require('tailwindcss-primeui')],
}

