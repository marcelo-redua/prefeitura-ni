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
        "gray-dark": "#C3C3C4",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        notosans: ['Noto Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem', // Adicione o preenchimento que você deseja
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '100%',
          'xl': '1320px', // Personalize o max-width para xl
          '2xl': '1320px', // Personalize o max-width para 2xl também
        },
      },
    },
  },
  plugins: [],
}
