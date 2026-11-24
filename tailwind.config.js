/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#8B131E',
          hover: '#6E0D16',
          dark: '#560911',
          deep: '#2D0408',
        },
        deepblue: {
          DEFAULT: '#0A4D7C',
          highlight: '#008FD5',
          light: '#0E6BA8',
          dark: '#073656',
        },
        ecogreen: {
          DEFAULT: '#4E8C2A',
          light: '#62B035',
          dark: '#38651E',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
