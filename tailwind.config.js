// const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // plugins: [
  // plugin(function ({ addComponents, theme }) {
  //   addComponents({
  //     '.5.5xl': {
  //       fontSize: '2.5rem'
  //     },
  //   })
  // })
  // ],
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary-200': 'var(--primary-200)',
        'primary-400': 'var(--primary-400)',
        'secondary-600': '#141F31',
        regular: '#ffffff',
      },
      height: {
        header: '90px'
      },
      fontFamily: {
        ttFirsNeue: ['TT Firs Neue']
      },
      fontSize: {
        big: '10rem',
        '10xl': '8rem',
        '5.5xl': '2.5rem'
      }
    },
  },
  plugins: [],
}