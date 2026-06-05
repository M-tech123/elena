/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hand: ['Cormorant Garamond', 'serif'],
      },
      scale: {
        '103': '1.03',
        '115': '1.15',
      }
    },
  },
  plugins: [],
}
