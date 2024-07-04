/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#f85959',
        customBlue: '#78d5ef',
        customGray: '#b3b3b3',
      },
    },
  },
  plugins: [],
}

