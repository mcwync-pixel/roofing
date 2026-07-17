/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#fe5d14',
          dark: '#de6906',
          light: '#ff7a3d',
        },
        ink: {
          900: '#0F1437',
          800: '#1C1C1C',
          700: '#232323',
          600: '#2E2E2E',
          500: '#858687',
        },
        sky: {
          brand: '#0080FE',
          deep: '#184676',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'slide-x': 'slide-x 40s linear infinite',
      },
    },
  },
  plugins: [],
};
