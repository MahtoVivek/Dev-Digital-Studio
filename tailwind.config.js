/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-down': 'fade-down 1s ease-out',
        'fade-up': 'fade-up 1s ease-out',
      },
    },
  },
  plugins: [],
};