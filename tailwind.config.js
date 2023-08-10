/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#49a4ac',
        textprimary: '#81b6c4',
        textsecondary: '#38b4be',
      },
    },
  },
  plugins: [],
}
