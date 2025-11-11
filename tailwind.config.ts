import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from Figma
        primary: {
          DEFAULT: 'rgb(29, 29, 27)',      // #1d1d1b - Main dark color
          light: 'rgb(52, 52, 50)',         // #343432 - Secondary dark
          lighter: 'rgb(116, 113, 113)',    // #747171 - Text gray
        },
        blue: 'rgb(44, 188, 235)',        // #2cbceb - Primary blue
        yellow: 'rgb(244, 178, 80)',        // #f4b250 - Gold/Orange
        green: 'rgb(119, 187, 97)',       // #77bb61 - Green
        accent: {
          blue: 'rgb(44, 188, 235)',        // #2cbceb - Primary blue
          gold: 'rgb(244, 178, 80)',        // #f4b250 - Gold/Orange
          green: 'rgb(119, 187, 97)',       // #77bb61 - Green
        },
        neutral: {
          white: 'rgb(255, 255, 255)',      // #ffffff - White
          gray: {
            light: 'rgb(234, 234, 234)',    // #eaeaea - Light gray bg
            DEFAULT: 'rgb(188, 183, 183)',  // #bcb7b7 - Medium gray
          }
        }
      },
      backgroundImage: {
        'multi-gradient-gray': 'linear-gradient(to right, #d9d9d9, #d9d9d9, #cbcbcb, #bcbcbc, #bcbcbc)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'hero': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'subheading': ['20px', { lineHeight: '1.4', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};
export default config;
