import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

import tokenStyles from './src/shared/lib/tokens'

const config: Config = {
  content: [
    // TODO: 수정필요
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '600px',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        '*, *::before, *::after': {
          'box-sizing': 'border-box',
        },
        body: {
          'font-family': theme('fontFamily.sans'),
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        'img, picture, video, canvas, svg': {
          display: 'block',
          'max-width': '100%',
        },
        'input, button, textarea, select': {
          font: 'inherit',
        },
        '#root, #__next': {
          isolation: 'isolate',
        },
      })
      addComponents(tokenStyles)
    }),
  ],
}

export default config
