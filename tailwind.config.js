/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        primary: {
          light: '#2dd4bf',
          DEFAULT: '#14b8a6',
          dark: '#0d9488'
        },
        secondary: {
          light: '#67e8f9',
          DEFAULT: '#22d3ee',
          dark: '#06b6d4'
        }
      }
    },
  },
  plugins: [],
}
