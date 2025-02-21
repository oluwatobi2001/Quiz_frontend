const { wedgesTW } = require("@lemonsqueezy/wedges");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b80b6',
        secondary: '#fafafa',
        question: '#fba52a',
        textAnswer: '#2f384d'

      },

      backgroundImage: {
        
      },
      fontFamily: {
        primary: "Cabinet Grotesk",
        home: "LuckiestGuy"
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT : '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        "2xl": '6rem'
      },
      screens: {
       
        xl: '1304px',
        md: '768px',
        sm: '640px'
        
      },
    },
  },
  darkMode: "class",
  plugins: [wedgesTW()],
};
