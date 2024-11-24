/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', // Add this line
  content: ['./views/**/*.ejs'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F43F5E',
        accent: '#FBBF24',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};