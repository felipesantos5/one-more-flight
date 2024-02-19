/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1000px" },
      md: { max: "750px" },
      sm: { max: "450px" },
      xsm: { max: "350px" },
    },
    extend: {
      colors: {
        loginCard: "#FFF8E1",
        loginBg: "#2F5566",
        gray1: "#4E4E4E",
        gray2: "#727171",
        gray3: "#A4A4A4",
        lightgray: "#D9D9D9",
        lightestgray: "#ECECEC",
        title: "#1A202C",
        subtitle: "#2D3748",
        footerBg: "#C2CFF0",
      },
      backgroundImage: {
        homeBg: "url('./src/assets/homeBackground.svg')",
      },
      backgroundColor: {
        footerBg: "#C2CFF0",
      },
    },
  },
  plugins: [],
};
