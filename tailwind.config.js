module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#BFBFBF",
          100: "#B0B0B0",
          200: "#969696",
          300: "#7A7A7A",
          400: "#5E5E5E",
          500: "#434343",
          600: "#383838",
          700: "#2E2E2E",
          800: "#242424",
          900: "#171717",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sedgwick: ['"Sedgwick Ave"', "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
