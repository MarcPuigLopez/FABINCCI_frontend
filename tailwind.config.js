/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Bebas": ["Bebas Neue", "sans-serif"],
        "Roboto": ["Roboto Condensed", "sans-serif"],

      },
      spacing: {
        "home-width": "1917px",
        "aboutUs-width": "1917px",
        "fabincci-width": "1917px",
        "reservas-width": "1917px",
        "contact-width": "1917px",
        84: "22rem",
        128: "32rem",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
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
      );
    }),
  ],
};
