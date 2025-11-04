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
    extend: {
      animation: {
        'marquee': 'marquee 400s linear infinite',
        'marquee-reverse': 'marquee-reverse 250s linear infinite',
        marquee1: 'marquee 120s linear infinite',
        marquee2: 'marquee2 120s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        'marquee-reverse': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
        marquee1: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        marquee2: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
      },
    },

  },
  plugins: [require('@tailwindcss/typography'), ],
};