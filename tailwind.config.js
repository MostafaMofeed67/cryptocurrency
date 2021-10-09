module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        Nunito: ["Nunito, sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#403134", light: "#88666c" },
        secondary: { DEFAULT: "#e2c2b3", dark: "#b1998e" },
        bodyColor: "#f7f3f5",
      },
      boxShadow: {
        coin: "#e9c4cb 5px 5px, #f1cad1 10px 10px ",
        news: "#c9acb1 5px 5px, #e7cbd1 10px 10px ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
