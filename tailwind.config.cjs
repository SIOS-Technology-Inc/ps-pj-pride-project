/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kurenaido: ['Zen Kurenaido'],
        zen: ['Zen Maru Gothic'],
        yuji: ['Yuji Syuku'],
        dela: ['DotGothic16'],
      },
      colors: {
        gray: '#666666',
        event: '#81B9D0',
        ad: {
          main: '#1A4661',
          sub: '#5AAFE1',
        },
      },
    },
  },
  plugins: [],
};
