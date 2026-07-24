/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#ebe9ed',
        background: '#09070b',

        // Tinted neutral scale — same purple hue family as background/text,
        // so cards and borders stop fighting the page for attention.
        // Use these instead of gray-900/800/700/400/500 everywhere.
        surface: {
          950: '#09070b', // page background
          900: '#120f16', // card background
          800: '#1c1720', // card border (default)
          700: '#2a2330', // card border (hover)
          600: '#3d3548', // dividers, subtle strokes
          500: '#584e66', // disabled text, faint icons
          400: '#7a6d8a', // secondary/muted body text
          300: '#a397b0', // lighter muted text, placeholders
        },

        primary: {
          DEFAULT: '#c0acd1',
          50:  '#f5f1f9',
          100: '#e8def0',
          200: '#d6c6e2',
          300: '#c0acd1', // = DEFAULT, your original
          400: '#a688c0',
          500: '#8c68ac',
          600: '#6f4f8c',
          700: '#573d6e',
        },

        secondary: {
          DEFAULT: '#593577',
          50:  '#efe7f5',
          100: '#d3bfe4',
          200: '#a980c4',
          300: '#7c559f',
          400: '#593577', // = DEFAULT, your original
          500: '#472a5f',
          600: '#361f49',
          700: '#251534',
        },

        accent: {
          DEFAULT: '#9257c4',
          50:  '#f2e9fa',
          100: '#dcbdf0',
          200: '#c295e5',
          300: '#a870d3',
          400: '#9257c4', // = DEFAULT, your original
          500: '#7a45a8',
          600: '#603587',
          700: '#472767',
        },

        // Semantic status colors, tinted to sit comfortably against
        // the purple background instead of clashing pure-hue red/green.
        success: { DEFAULT: '#5fbf8f', bg: '#132a20' },
        danger:  { DEFAULT: '#e08585', bg: '#2c1616' },
        warning: { DEFAULT: '#d9ab5f', bg: '#2c2313' },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        blob: 'blob 7s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%':  { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animationDelay: {
        '4000': '4000ms',
      },
    },
  },
  plugins: [],
};