module.exports = {
  mode: "jit",
  purge: [
    "./domains/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      md: "520px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1400px",
    },
    colors: {
      white: {
        a100: "#fff",
        a95: "rgba(255, 255, 255, .95)",
        a90: "rgba(255, 255, 255, .9)",
        a50: "rgba(255, 255, 255, .5)",
        a40: "rgba(255, 255, 255, .4)",
        a35: "rgba(255, 255, 255, .35)",
        a32: "rgba(255, 255, 255, .32)",
        a20: "rgba(255, 255, 255, .2)",
        a16: "rgba(255, 255, 255, .16)",
        a10: "rgba(255, 255, 255, .1)",
      },
      whiteSmoke: {
        a100: "#f5f5f5",
        a95: "rgba(245, 245, 245, .95)",
        a90: "rgba(245, 245, 245, .9)",
        a50: "rgba(245, 245, 245, .5)",
        a40: "rgba(245, 245, 245, .4)",
        a35: "rgba(245, 245, 245, .35)",
        a32: "rgba(245, 245, 245, .32)",
        a20: "rgba(245, 245, 245, .2)",
        a16: "rgba(245, 245, 245, .16)",
        a10: "rgba(245, 245, 245, .1)",
      },
      dimGray: {
        a100: "#696969",
        a95: "rgba(105, 105, 105, .95)",
        a90: "rgba(105, 105, 105, .9)",
        a50: "rgba(105, 105, 105, .5)",
        a40: "rgba(105, 105, 105, .4)",
        a35: "rgba(105, 105, 105, .35)",
        a32: "rgba(105, 105, 105, .32)",
        a20: "rgba(105, 105, 105, .2)",
        a16: "rgba(105, 105, 105, .16)",
        a10: "rgba(105, 105, 105, .1)",
      },
      black: {
        a100: "#2b546a",
        a95: "rgba(48, 84, 106, .95)",
        a90: "rgba(48, 84, 106, .9)",
        a50: "rgba(48, 84, 106, .5)",
        a40: "rgba(48, 84, 106, .4)",
        a35: "rgba(48, 84, 106, .35)",
        a32: "rgba(48, 84, 106, .32)",
        a20: "rgba(48, 84, 106, .2)",
        a16: "rgba(48, 84, 106, .16)",
        a10: "rgba(48, 84, 106, .1)",
      },
      limeGreen: {
        a100: "#46b04a",
        a95: "rgba(70, 176, 74, .95)",
        a90: "rgba(70, 176, 74, .9)",
        a50: "rgba(70, 176, 74, .5)",
        a40: "rgba(70, 176, 74, .4)",
        a35: "rgba(70, 176, 74, .35)",
        a32: "rgba(70, 176, 74, .32)",
        a20: "rgba(70, 176, 74, .2)",
        a16: "rgba(70, 176, 74, .16)",
        a10: "rgba(70, 176, 74, .1)",
      },
    },
    extend: {
      backgroundColor: (theme) => ({
        "primary-regular": theme("colors.white.a100"),
        "secondary-regular": theme("colors.whiteSmoke.a100"),
        "accent-primary-regular": theme("colors.limeGreen.a100"),
      }),
      textColor: (theme) => ({
        "primary-regular": theme("colors.black.a100"),
        "primary-inverted": theme("colors.white.a100"),
        "secondary-regular": theme("colors.dimGray.a100"),
        "secondary-inverted": theme("colors.whiteSmoke.a100"),
        "accent-primary-regular": theme("colors.limeGreen.a100"),
      }),
      width: {
        240: "60rem",
      },
      maxWidth: {
        240: "60rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
