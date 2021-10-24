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
        },
        black: {
          kwek100: "#000000",
          stock: "#574240",
        },
        yellow: {
          filled: "#ffc107",
          secondary: "#E9A501",
        },
        green: {
          success: "#009D19",
        },
        error: "#FF2D1A",
      },
      gridTemplateColumns: {
        "kwek-1": "repeat(auto-fit, minmax(350px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
