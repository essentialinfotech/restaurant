/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter' : ['Inter', 'sans-serif']
      },
      colors:{
        'dark' : '#0D0C0C',
        'yellow' : '#FCAE01',
      }
    },
  },
  plugins: [],
}

