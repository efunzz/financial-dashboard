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
      }
    }
  },
  plugins: [require('tailwindcss-primeui')],
}

