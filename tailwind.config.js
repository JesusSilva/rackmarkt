/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{html,js,jsx,ts,tsx}', './components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      },
      green: {
        100: '#e6fff3',
        200: '#a3ffd6',
        300: '#7affc8',
        400: '#52ffbd',
        500: '#27f2ab',
        600: '#00e59e',
        700: '#00bf89',
        800: '#009973',
        900: '#00735a'
      },
      emerald: {
        100: '#e6fff2',
        200: '#a4f5ce',
        300: '#76e8b5',
        400: '#4ddba0',
        500: '#27cf8e',
        600: '#06c17e',
        700: '#009c6a',
        800: '#007554',
        900: '#004f3b'
      },
      blue: {
        100: '#839091',
        200: '#557d85',
        300: '#3a6c78',
        400: '#225b6b',
        500: '#0f4b5e',
        600: '#003a51',
        700: '#001e2b',
        800: '#000305',
        900: '#000000'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
