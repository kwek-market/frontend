module.exports = {
  prefix: "tw-",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          kwek100: "#BFA5A3",
          review: "#C7C0BF",
          kwek200: "#1D1616",
          kwek300: "#18191f",
        },
        white: {
          100: "#FFF",
          light: "#f4f1f0",
        },
        black: {
          kwek100: "#000000",
          stock: "#574240",
        },
        brown: {
          kwek100: "#A88C8A",
          kwek200: "#BFA5A3",
          kwek300: "rgb(87, 66, 64)",
        },
        yellow: {
          filled: "#ffc107",
          secondary: "#E9A501",
        },
        green: {
          success: "#009D19",
        },
        red: {
          kwek100: "#AF1328",
          kwek200: "rgba(175, 19, 40, 0.6)",
        },
        error: "#FF2D1A",
      },
      gridTemplateColumns: {
        "kwek-1": "repeat(auto-fit, minmax(350px, 1fr))",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      display: ["responsive", "hover", "focus", "group-hover, active"],
      border: ['active', 'hover'],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
