module.exports = {
   content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            primary: 'Poppins',
            secondary: 'Open Sans',
         },
         gridTemplateColumns: {
            footer: 'auto 160px 210px 320px',
         },
      },
   },
   plugins: [],
};

