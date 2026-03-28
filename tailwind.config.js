/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f8f7",
          100: "#dcebe7",
          200: "#b9d7ce",
          300: "#90bfaf",
          400: "#63a28e",
          500: "#468773",
          600: "#356a5a",
          700: "#2d554a",
          800: "#27453d",
          900: "#233a34"
        }
      }
    }
  },
  plugins: []
};
