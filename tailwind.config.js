module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

],
  theme: {
    extend: {
      fontFamily: {
        'Blueberry': ['Blueberry', 'cursive'],
        'Pacifico' : ['Pacifico', 'cursive']
      },
      colors: {
        'customSky' : '#82fff4',
        'customSkyBright' : '#03FBE5',
        'customSkyDark': '#037B70',
      },

    },
  },
  plugins: [],
}
