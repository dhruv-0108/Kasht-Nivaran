/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 2px 4px rgba(0,0,0,0.01), 0 8px 16px rgba(0,0,0,0.02), 0 16px 32px rgba(0,0,0,0.02)',
        'premium-hover': '0 4px 8px rgba(0,0,0,0.02), 0 16px 32px rgba(0,0,0,0.03), 0 32px 64px rgba(0,0,0,0.04)',
        'premium-deep': '0 10px 30px -10px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.02)',
      },
      colors: {
        divine: {
          gold: '#B89253',
          clay: '#D1A054',
          sand: '#FAF8F5',
        }
      }
    },
  },
  plugins: [],
}
