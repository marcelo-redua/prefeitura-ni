/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#121B52",
        "blue-light": "#28305E",
        "orange": "#E06939",
        "gray": "#DDDDDD",
        "gray-light": "#F4F4F4",
        "gray-dark":"#C3C3C4",
      },
    },
  },
  plugins: [],
}

