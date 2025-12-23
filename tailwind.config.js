/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'travel-navy': '#0c3f9d',
        'travel-blue': '#608ac4',
        'travel-orange': '#e65806',
        'travel-peach': '#f0954d',
        'travel-red': '#a90404',
        'travel-bg': '#eaeae8',
      },
      boxShadow: {
        'travel': '0 16px 60px rgba(12, 63, 157, 0.35)',
        'travel-orange': '0 16px 45px rgba(230, 88, 6, 0.35)',
        'travel-glow': '0 0 40px rgba(96, 138, 196, 0.25)',
      }
    },
  },
  plugins: [],
}