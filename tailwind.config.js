/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shadow-pulse': 'pulsi 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulsi: {
          '0%, 100%': { boxShadow: '0 0 15px #05466b' },
          '50%': { boxShadow: '0 0 7px #11425c' },
        },
      }
    },
  },
  plugins: [],
}

