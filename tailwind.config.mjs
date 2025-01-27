/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ebe9ed',
        'background': '#09070b',
        'primary': '#c0acd1',
        'secondary': '#593577',
        'accent': '#9257c4',
       },
       fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        'blob': "blob 7s infinite",
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px,0px) scale(1)' },
          '33%': { transform: 'translate(30px,-50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
          '66%': { transform: 'translate(0px,0px) scale(1)' },
        }
      },
      animationDelay: {
        '4000': '4000ms',
      }
    },
  },
  plugins: [],
};
