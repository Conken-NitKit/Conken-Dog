module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        md: "520px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1400px",
      },
      color: {},
      transitionProperty: {
        height: "height",
        "max-height": "max-height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
