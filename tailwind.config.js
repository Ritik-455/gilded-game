const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': "'Poppins',sans-serif",
        'Josefin': "'Josefin Sans',sans-serif",
        'Montserrat': "'Montserrat',sans-serif",
      },
      colors: {
        lightblue: "#1BABFE",
      },
      screens: {
        'sm': '576px',

        'md': '768px',

        'lg': '992px',

        'xl': '1200px',

        '2xl': '1400px',
      },
      container: {
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "1022px",
          xl: "1344px",
        },
        padding: {
          DEFAULT: "12px",
        },
      },
    }
  },
  plugins: [
    
  ],
});
