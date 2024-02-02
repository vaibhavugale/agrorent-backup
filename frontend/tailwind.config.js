/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: {
  extend: {
    colors: {
      OR: {
        50: '#FFB534',
      },
      johnYellow:{
        100:'#F4D103'
      },
      formBg:{
        100:'#E2EBF0'
      }
    },
    keyframes:{

    },
    animation:{

    },
    backgroundImage:{
       'tractor':"url('../src/assets/wheat-farm-filed.jpg')"
    }
  },
},
}
