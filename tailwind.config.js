const {fontFamily}=require('tailwindcss/defaultTheme')
const {colores}=require('tailwindcss/colores')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     container:{
      center:true,
      padding:'1.5rem',
      screens:{
        '2xl':'1360px'
      }
     }
  },
  extend: {
    fontFamily:{
      sans:['var(--font-inter)', ...fontFamily.sans]
    },
    colores:{
      ...colores,
      'light-gold':'#f5bc51',
      'dark-gold':'#533519'
    }
  },
  plugins: [require('tailwindcss-animate'),require('@tailwindcss/typography')],
}
