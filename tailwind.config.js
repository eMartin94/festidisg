/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        annieuseyourtelescope: ['Annie Use Your Telescope', 'cursive'],
        balsamiq: ['Balsamiq Sans', 'cursive'],
        belleza: ['Belleza', 'sans-serif'],
        boska: ['Boska', 'serif'],
        cabinetgrotesk: ['Cabinet Grotesk', 'sans-serif'],
        chillax: ['Chillax', 'sans-serif'],
        comicneue: ['Comic Neue', 'cursive'],
        dancingscript: ['Dancing Script', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        mountainsofchristmas: ['Mountains of Christmas', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        pompiere: ['Pompiere', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        yanonekaffeesatz: ['Yanone Kaffeesatz', 'sans-serif'],
      },
      colors: {
        cornflower: {
          50: '#9CD6F4',
          100: '#85C1E2',
          500: '#63A2C8',
          800: '#4182AE',
        },
        wattle: {
          50: '#F1F676',
          100: '#DDE25D',
          500: '#BFC537',
          800: '#9DA310',
        },
        'title-one': '#153649',
        'title-two': '#3E6D64',
        'title-three': '#416B16',
        'title-four': '#27495D',
        'title-five': '#003D60',
        'title-six': '#416B16',
        'title-seven': '#8E603F',
        'paragraph-one': '#545454',
        'paragraph-two': '#55837A',
        'paragraph-three': '#487619',
        'paragraph-four': '#467693',
        'paragraph-five': '#50667B',
        'paragraph-six': '#4E7F1C',
        'paragraph-seven': '#C59163',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #4182AE, #9DA310)',
        'basic-rigth':
          'linear-gradient(to right, #ffffff,#ffffff,#ffffff,#ffffff, #f1f676)',
        'basic-bottom':
          'linear-gradient(to bottom, #ffffff,#ffffff,#ffffff,#ffffff, #f1f676)',
      },
      screens: {
        '2xl': '1536px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '420px',
      },
      boxShadow: {
        custom: '0px 0px 10px rgba(0, 0, 0, 1)',
      },
      dropShadow: {
        custom: '10px 10px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
