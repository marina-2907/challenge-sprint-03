/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f97316', // laranja claro
          DEFAULT: '#ea580c', // laranja principal
          dark: '#c2410c',    // laranja escuro
        },
        accent: {
          light: '#3b82f6', // azul claro
          DEFAULT: '#1d4ed8', // azul principal
          dark: '#1e40af',    // azul escuro
        },
      },
    },
  },
  plugins: [],
};
