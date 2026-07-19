/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marketing brand system: violet -> pink -> orange
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        brand: {
          violet: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
        },
        dark: {
          bg: '#0b0812',
          surface: '#130f1e',
          card: '#171226',
          border: '#2a2340',
          text: '#f1edfb',
          muted: '#9d94b8',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'blink': 'blink 1s step-end infinite',
        'aurora': 'aurora 18s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.1)' },
          '66%': { transform: 'translate(-4%, 4%) scale(0.95)' },
        },
      },
      boxShadow: {
        'glow': '0 0 28px rgba(139, 92, 246, 0.35)',
        'glow-lg': '0 8px 44px rgba(236, 72, 153, 0.35)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
