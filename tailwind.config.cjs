/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kurenaido: ['Zen Kurenaido'],
        zen: ['Zen Maru Gothic'],
        yuji: ['Yuji Syuku'],
      },
      colors: {
        gray: '#666666',
        event: '#81B9D0',
      },
    },
  },
  plugins: [],
};
