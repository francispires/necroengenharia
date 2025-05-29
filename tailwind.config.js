/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Marcellus', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e293b',
          950: '#0f172a',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#D4AF37',
          600: '#b45309',
        },
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};