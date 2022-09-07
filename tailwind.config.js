const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      listStyleType: {
        square: "square",
        roman: "upper-roman",
        georgian: "georgian",
        lowerAlpha: "lower-alpha",
        upperAlpha: "upper-alpha",
      },
      colors: {
        white: colors.white,
        trueGray: colors.trueGray,
        lime: colors.lime,
        emerald: colors.emeral,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        indigo: colors.indigo,
      },
      height: (theme) => ({
        konten: "82vh",
        latihan: "84vh",
        latihan1: "75vh",
        latihansm: "40vh",
        kontenguru: "90vh",
        side: "93vh",
        kontenSmall: "74vh",
      }),
      spacing: {
        "120": "30rem",
        "128": "32rem",
        "130": "34rem",
        "144": "36rem",
        "166": "38rem",
      },
      width: (theme) => ({
        latihansm: "100vh",
        latihan: "150vh",
      }),
    },
    textIndent: (theme, { negative }) => ({
      ...{
        xs: "0.8rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "6.6rem",
      },
      ...negative({
        xs: "0.8rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "6.6rem",
      }),
    }),

    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    textIndent: ["responsive"],
    extend: {},
  },
  plugins: [require("tailwindcss-text-indent")()],
};
