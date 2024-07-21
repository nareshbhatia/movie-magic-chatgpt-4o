/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000', // red for accent color
      },
      fontFamily: {
        /*
         * Customize the `sans` to font Inter
         * Sets `font-family: var(--font-inter)` on the `html` element
         */
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  darkMode: 'class', // enable dark mode
  plugins: [],
};
