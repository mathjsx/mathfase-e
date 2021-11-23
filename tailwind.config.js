module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.{js, ts, tsx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
