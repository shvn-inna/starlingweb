/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      body: ['Roboto', 'serif'],
      heading: ['Mulish', 'sans-serif'],
    },
    colors: {
        green: "#7B9669",
        teal: "#6C8480",
        dark: "#404E3B",
        light: "#BAC8B1",
        gray: "#E6E6E6",
      },
  },
  },
  plugins: [],
}
