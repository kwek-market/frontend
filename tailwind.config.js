module.exports = {
  mode: "jit",
  prefix: "tw-",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FCF7F8",
        gray: {
          kwek100: "#BFA5A3",
          review: "#C7C0BF",
          kwek200: "#1D1616",
          kwek300: "#18191f",
          kwek400: "#8B8B8B",
          kwek500: "#796866",
          kwek600: "rgba(0,0,0,0.21)",
          kwek700: "rgba(191, 165, 163, 0.5)",
          kwek800: "#c4c4c4",
          kwek200a: "rgba(29, 22, 22, 0.7)",
          kwek900: "#574240",
          input: "#745858",
        },
        white: {
          100: "#FFF",
          light: "#f4f1f0",
          200: "rgba(255,255,255,0.25)",
          300: "rgba(175, 19, 40, 0.1)",
          400: "#EDEDED"
        },
        black: {
          kwek100: "#000000",
          stock: "#574240",
        },
        brown: {
          kwek100: "#A88C8A",
          kwek200: "#BFA5A3",
          kwek300: "rgb(87, 66, 64)",
          kwek400: "#DFD2D1",
        },
        yellow: {
          filled: "#ffc107",
          secondary: "#E9A501",
          primary: "#E6AC00",
          kwek100: "#F7E249",
        },
        green: {
          success: "#009D19",
        },
        orange: {
          kwek100: "#DC8823",
        },
        red: {
          notif: "#FC476E",
          kwek100: "#AF1328",
          kwek200: "rgba(175, 19, 40, 0.6)",
        },
        error: "#FF2D1A",
      },
      gridTemplateColumns: {
        "kwek-1": "repeat(auto-fit, minmax(350px, 1fr))",
        "kwek-2": "repeat(2, 150px)",
        "kwek-3": "2fr 6fr",
        "kwek-4": "repeat(auto-fit, minmax(50px, 1fr))",
        "kwek-5": "repeat(auto-fit, minmax(200px, 1fr))",
        "kwek-6": "repeat(auto-fit, minmax(250px, 350px))",
        "kwek-7": "repeat(2, 60px)",
      },
      backgroundImage: {
        "seller-header":
          "linear-gradient(rgba(87, 66, 64, 0.7), rgba(87, 66, 64, 0.7)), url('/images/user-photo.svg')",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
