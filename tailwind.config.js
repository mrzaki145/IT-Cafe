/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    fontFamily: {
      almarai: ["Almarai", "sans-serif"],
      inter: ["Inter Variable", "sans-serif"],
    },

    colors: {
      transparent: "transparent",
      white: "#ffffff",
      gold: "#FECE25",

      gray: {
        50: "#f6f7f8",
        100: "#eaecef",
        200: "#dadee3",
        300: "#bdc4cd",
        400: "#a2abb8",
        500: "#8b94a6",
        600: "#7a8296",
        700: "#6d7388",
        800: "#5c6071",
        900: "#4c4f5c",
        950: "#31333a",
        DEFAULT: "#8B96A5",
      },

      black: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        DEFAULT: "#000000",
      },

      green: {
        DEFAULT: "#09A31C",
        50: "#effef0",
        100: "#d9ffdd",
        200: "#b6fcbd",
        300: "#7df88b",
        400: "#3deb52",
        500: "#14d32b",
        600: "#09a31c",
        700: "#0c891c",
        800: "#0f6c1b",
        900: "#0e591a",
        950: "#013209",
      },

      red: {
        50: "#fff0f0",
        100: "#ffdddd",
        200: "#ffc1c1",
        300: "#ff9595",
        400: "#ff5959",
        500: "#ff2626",
        600: "#fc0606",
        700: "#ea0000",
        800: "#af0505",
        900: "#900c0c",
        950: "#500000",
        DEFAULT: "#EA0000",
      },

      primary: {
        DEFAULT: "#0065ff",
        25: "#EFF6FF",
        50: "#edf8ff",
        100: "#d6eeff",
        200: "#b5e4ff",
        300: "#83d5ff",
        400: "#48bcff",
        500: "#1e99ff",
        600: "#0679ff",
        700: "#0065ff",
        800: "#084dc5",
        900: "#0d459b",
        950: "#212844",
      },
    },

    extend: {
      //   borderRadius: {},
      boxShadow: {
        section: "0px 4px 16px rgba(0, 0, 0, 0.08)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("preline/plugin"),
  ],
};
