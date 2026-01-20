/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We will toggle dark mode manually with a class
  theme: {
    extend: {
      colors: {
        // Antigravity Palette
        light: {
          bg: '#F9F9FB',
          glass: 'rgba(255, 255, 255, 0.6)', // Increased transparency slightly
          accent: '#3B82F6',
          text: '#1F2937',
        },
        dark: {
          bg: '#050505',
          glass: 'rgba(20, 20, 20, 0.6)',
          accent: '#60A5FA',
          text: '#F9FAFB',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -10px rgba(0,0,0,0.05)',
        'soft-hover': '0 30px 60px -12px rgba(0,0,0,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
