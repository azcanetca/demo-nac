/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      '2xl': {
        'max': '1479px'
      },
      'xl': {
        'max': '1099px'
      },
      'lg': {
        'max': '991px'
      },
      'md': {
        'max': '767px'
      },
      'sm': {
        'max': '566px'
      },
      'xs': {
        'max': '480px'
      },
    },
  },
  plugins: [],
};