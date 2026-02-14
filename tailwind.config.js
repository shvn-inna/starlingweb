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
      primary: '#1E40AF',
      secondary: '#2563EB',
      accent: '#FBBF24',
      green: "#6FAE95",
    },
  },
  },
  plugins: [],
}
