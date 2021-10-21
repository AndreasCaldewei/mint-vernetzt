// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{pages,app,components}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#154194",
      primary2: "rgb(0,68,176)",
      primary3: "#2D6BE1",
      primary4: "#C7D1E2",
      primary5: "rgba(219,225,234,0.8)",
      secondary: "#B16FAB",
      tertiary: "#EFE8E6",
      tertiary2: "#F7F3F2",
      success: "#00A87A",
      warning: "#FCC433",
      danger: "#e83d3c",
      danger2: "#F5ADAC",
      white: "#FFFFFF",
    },
    stroke: (theme) => ({
      primary: "#154194",
      primary2: "rgb(0,68,176)",
      primary3: "#2D6BE1",
      primary4: "#C7D1E2",
      primary5: "rgba(219,225,234,0.8)",
      secondary: "#B16FAB",
      tertiary: "#EFE8E6",
      tertiary2: "#F7F3F2",
      success: "#00A87A",
      warning: "#FCC433",
      danger: "#e83d3c",
      danger2: "#F5ADAC",
      white: "#FFFFFF",
    }),
    fontFamily: {
      title: ["Bebas Neue"],
    },
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
