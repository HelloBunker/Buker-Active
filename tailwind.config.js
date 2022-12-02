/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      'primary': '#7DAB2E',
      'primary-100': '#7DAB2E7F',
      'secondary' : '#fff',
      "secondary-100" : '#767676',
      "danger" : '#ff0000',
      
      
    },
    background:{
      'transparent':'transparent',
      
    },
    extend: {
      backgroungImage:{
        'banner': " url('./assets/banner1.jpg')",
       
      }
    },
  },
  plugins: [
   require('@tailwindcss/forms')
  ],
}
