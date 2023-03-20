/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A2238",
        secondary: "#F4DB7D",
        accent: "#9DAAF2",
        highlight: "#FF6A3D",
        urgencyTip: "rgba(255, 152, 0, 0.1)",
        urgencyTipB: "#FF9800",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

