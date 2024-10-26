/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'mwhite':'#DBDDE0',
        'mblack':'#08090A',
        'mblue' : '#00A8B7',
        'mBrown' : '#9d8977',
      },
      animation: {
        'spin-slow':'spin 22s linear infinite',
        'mBounce':'myBounce 1s infinite 0.3s',
        'mBounce-long':'myBounceLong 1.5s infinite ',
      },
      
      keyframes:{
        myBounce:{
         ' 0%, 100%' :{
           transform: 'translateY(0%)',
           'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          
          },
          ' 50%' : {
            transform: 'translateY(-25%)',
            'animation-timing-function' : 'cubic-bezier(0.8,0,1,1)',
              
          }
      },
        myBounceLong:{
         ' 0%, 100%' :{
           transform: 'translateY(-30%) translateX(-50%)',
           'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          
          },
          ' 50%' : {
            transform: 'translateY(-60%) translateX(-50%)',
            'animation-timing-function' : 'cubic-bezier(0.8,0,1,1)'
              
          }
      },
      
      },
    
      screens:{
        'xsm' : '390px',
        '3xl':'1700px'
      },
    },
  },
  plugins: [],
};
