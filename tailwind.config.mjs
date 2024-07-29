/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
        // sm: '2rem'
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      }
    },
    extend: {
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
