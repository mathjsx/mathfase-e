module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.{js, ts, tsx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
