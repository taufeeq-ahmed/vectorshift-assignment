/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#5d7f9e",
        hover: "#6563e4",
      },
      boxShadow: {
        custom: "0px 1px 4px rgba(0, 0, 0, 0.16)",
        contrast: "0px 7px 29px 0px rgba(100, 100, 111, 0.2) ",
      },
    },
  },
  plugins: [],
};
