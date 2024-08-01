/** @type {import('tailwindcss').Config} */

// import {defaultConfig} from 'tailwindcss/defaultConfig'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem'
      }
    },
    extend: {
      fontFamily: {
        display: ['Caprasimo', 'sans-serif'],
        mono: ['Roboto Mono Variable', 'monospace'],
        heading: ['Lilita One', 'sans-serif'],
        body: ['Open Sans Variable', 'sans-serif']
      },
      colors: {
        white: {
          DEFAULT: 'rgb(var(--white))'
        },
        black: {
          DEFAULT: 'rgb(var(--black))'
        },
        purple: {
          DEFAULT: 'rgb(var(--purple))',
          light: 'rgb(var(--purple-light))'
        },
        green: {
          DEFAULT: 'rgb(var(--green))',
          light: 'rgb(var(--green-light))'
        },
        primary: 'rgb(var(--primary))',
        'primary-light': 'var(--primary-light)',
        secondary: 'rgb(var(--secondary))',
        'secondary-light': 'var(--secondary-light)'
      },
      fontSize: {
        xxs: '.65rem'
      },
      animation: {
        flash: 'flash 1s ease-in-out infinite'
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
