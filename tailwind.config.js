/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "deep-black": "#000000",
        "hamid-bg-title": "#C7B299",
        "hamid-bg-hero": "#BDBDBD",
      },

      fontFamily: {
        ambroise: ["ambroise", "sans-serif"],
        impact: ["impact", "sans-serif"],
        grotesk: ["grotesk", "serif"],
        ocr: ["ocr", "sans-serif"],
      },
    },
  },
  plugins: [],
};
