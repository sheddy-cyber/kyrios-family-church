/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        crimson: {
          50:  '#fdf2f2',
          100: '#fce4e4',
          200: '#f5b8b8',
          300: '#e87878',
          400: '#d44040',
          500: '#b01e1e',
          600: '#8b1a1a',
          700: '#6e1414',
          800: '#530f0f',
          900: '#3b0a0a',
        },
        ink: {
          50:  '#f8f6f3',
          100: '#f0ebe3',
          200: '#e4ddd3',
          300: '#c4beb5',
          400: '#a09890',
          500: '#7c756d',
          600: '#5e5850',
          700: '#433e38',
          800: '#2e2a25',
          900: '#1e1a16',
          950: '#141210',
        },
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
