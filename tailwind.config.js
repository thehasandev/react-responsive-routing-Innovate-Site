/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif'],
        'nunito': ['Nunito Sans'],
      },
      colors: {
        'primary': '#8454F5',
        'secondary': '#29313D',
      },
      fontSize: {
        large: '64px',
        middle: '56px',
        small: '28px',
      },
      maxWidth: {
        'container': '1320px',
      }
    },
  },
  plugins: [],
}

