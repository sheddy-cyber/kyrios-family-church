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
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 18, 16, 0.05)',
        'float': '0 12px 30px -4px rgba(20, 18, 16, 0.08), 0 4px 10px -2px rgba(20, 18, 16, 0.04)',
        'glow': '0 0 20px rgba(224, 85, 85, 0.15)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'subtle-zoom': 'subtleZoom 20s ease-out forwards',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        subtleZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
