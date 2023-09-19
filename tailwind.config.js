export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-colour": "#E420E8",
        "deep-dark-purple": "#150E28",
        "dark-purple": "#903AFF",
        "light-purple": "#D434FE",
      },
      // fontFamily:{
      //   Roboto: ["Roboto, sans-serif"],
      // },
      // container: {
      //   padding: "2rem",
      //   center: true,
      // },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [],
}