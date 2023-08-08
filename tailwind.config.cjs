/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kurenaido: ['Zen Kurenaido'],
      },
      colors: {
        gray: '#666666',
      },
    },
  },
  plugins: [],
};
