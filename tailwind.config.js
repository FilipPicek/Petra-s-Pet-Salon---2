/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFBF6',
          100: '#F8F3E8',
          200: '#F0E6D2',
        },
        coral: {
          400: '#E67E70',
          500: '#D9685A',
          600: '#C85547',
        },
        green: {
          50: '#E8F5F1',
          100: '#D1EBE3',
          200: '#A3D7C7',
          600: '#3D7C6B',
          700: '#2F6254',
          800: '#234A3F',
          900: '#1A3730',
        },
      },
    },
  },
  plugins: [],
};
