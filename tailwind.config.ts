import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d1d1b',
          light: '#343432',
          lighter: '#747171',
        },
        accent: {
          blue: '#2cbceb',
          yellow: '#f4b250',
          green: '#77bb61',
          purple: '#8a38f5',
        },
        neutral: {
          white: '#ffffff',
          gray: {
            light: '#eaeaea',
            DEFAULT: '#bcb7b7',
          }
        }
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
