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
        'mBrown' : '#918671',
      },
    
      screens:{
        'xsm' : '400px',
        '3xl':'1700px'
      },
    },
  },
  plugins: [],
};
