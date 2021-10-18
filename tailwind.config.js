// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app,components}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#154194",
      primary2: "#1B54C0",
      primary3: "#2D6BE1",
      primary4: "#C7D1E2",
      primary5: "#DBE1EA",
      secondary: "#B16FAB",
      tertiary: "#EFE8E6",
      success: "#00A87A",
      warning: "#FCC433",
      danger: "#EE7775",
      white: "#FFFFFF",
    },
    fontFamily: {
      title: ["Bebas Neue"],
    },
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
