
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#e6f0ff',
          600: '#1a73e8',
          800: '#0d47a1',
        },
      },
    },
  },
  plugins: [],
}
