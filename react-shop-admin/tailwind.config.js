/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'], // purge es reemplazado por content
  theme: {
    extend: {
      color: {
        ...colors,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
