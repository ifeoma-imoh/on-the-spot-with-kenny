module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          100: "#FFFFFF",
          200: "#EC058E", //pink
          300: "#BBBBBB", // light grey
          400: "#252525", // light black
          500: "#16161A", //black
          600: "#F3A712", //yellow
          700: "#D89DFC", //
          800: "#2C5AFF", //blue
          900: "#A40606", //red
          1000: "#0D090A",
        },
      },
    },
  },
  plugins: [],
};
