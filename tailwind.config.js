/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      tomato: {
        100: '#FF9170',
        150: '#933319',
        200: '#AF350F',
        300: '#BA3F1C',
        400: '#903015',
        500: '#771F04',
        600: '#661000',
        700: '#550A00',
        800: '#3D1308',
        900: '#201411',
        950: '#18100E',
      },
      black: {
        100: '#B2B3BD',
        150: '#797B86',
        200: '#6C6E79',
        300: '#5F606A',
        400: '#46484F',
        500: '#393A40',
        600: '#303136',
        700: '#292A2E',
        800: '#222326',
        900: '#19191B',
        950: '#121214',
        transparent: '#11111300',
      },
      white: '#FDFBFA',
    },
    fontFamily: {
      sans: ['PT Sans', 'sans-serif'],
      quicksand: ['Quicksand', 'sand-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '3rem',
    },
    extend: {
      gridTemplateColumns: {
        'auto-fill-225': 'repeat(auto-fill, minmax(225px, 1fr))',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('search-cancel', '&::-webkit-search-cancel-button');
    }),
  ],
};
