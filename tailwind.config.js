/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dp-blue': '#1A2F48',
        'dp-orange': '#FF8812',
        'dp-beige': '#EBEBD3',
      },
    },
  },
  plugins: [],
}