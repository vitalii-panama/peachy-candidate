const path = require("path")
const plugin = require("tailwindcss/plugin")

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontSize: {
        "heading1": "66px",
      },
      fontFamily: {
        "adorn-condensed-sans": ["Adorn Condensed Sans", "sans-serif"],
      },
      textShadow: {
        DEFAULT: "1px 2px #000",
      },
      boxShadow: {
        "atc-shadow": "5px 8px 0 0 #000",
      },
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(300px, 1fr))"
      },
      colors: {
        pink: "#FDF5F4",
        "dark-pink": "#FDE0DC",
        atc: "#FFD11F",
      },
    },
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      )
    }),
  ],
  content: [
    path.resolve(__dirname, "./src/**/*.{js,vue}"),
    path.resolve(__dirname, "./shopify/**/*.liquid"),
  ],
};
