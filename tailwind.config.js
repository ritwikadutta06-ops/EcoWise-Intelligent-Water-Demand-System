/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#dceee6',
          200: '#bcdec0',
          300: '#90c6b1',
          400: '#5da78f',
          500: '#3c8b74',
          600: '#2c6f5d',
          700: '#24594c',
          800: '#1e483e',
          900: '#1a3c34',
          950: '#0b241f',
        },
        sage: {
          50: '#f6f8f6',
          100: '#ebf0ec',
          200: '#d7e2d9',
          300: '#b8ccbe',
          400: '#94b19e',
          500: '#759781',
          600: '#5b7a66',
          700: '#486252',
          800: '#3c4f43',
          900: '#334239',
        },
        eco: {
          dark: '#0d251e',
          card: '#ffffff',
          bg: '#f8faf9',
          border: '#e2ece6',
          accent: '#10b981',
          teal: '#0d9488',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 36, 31, 0.05), 0 2px 6px -1px rgba(11, 36, 31, 0.03)',
        'card': '0 10px 30px -4px rgba(11, 36, 31, 0.08), 0 4px 10px -2px rgba(11, 36, 31, 0.03)',
        'elevated': '0 20px 40px -8px rgba(11, 36, 31, 0.12), 0 8px 16px -4px rgba(11, 36, 31, 0.06)',
      }
    },
  },
  plugins: [],
}

