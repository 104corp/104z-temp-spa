const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    screens: {
      sm: { min: '360px' },
      md: { min: '1024px' },
      lg: { min: '1366px' },
      xl: { min: '1680px' }
    },
    colors: {
      pink: {
        100: '#FFE9EC',
        200: '#EA475B'
      },
      orange: {
        100: '#FFEEDF',
        200: '#FFD6B2',
        300: '#FF9100',
        400: '#FF7800'
      },
      lake: {
        100: '#39C8D0',
        200: '#00AFB8'
      },
      green: {
        100: '#92CF53',
        200: '#6FB827'
      },
      yellow: {
        100: '#FFC31B'
      },
      blue: {
        100: '#4E91FF',
        200: '#1654B9'
      },
      purple: {
        100: '#78269F'
      }
    },
    fontSize: {
      12: ['12px', '18px'],
      14: ['14px', '20px'],
      16: ['16px', '22px'],
      base: ['16px', '28px'],
      18: ['18px', '24px'],
      20: ['20px', '28px'],
      24: ['24px', '32px']
    }
  },
  corePlugins: {},
  variants: {},
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, config }) {
      addComponents({
        '.container': {
          maxWidth: '360px',
          margin: '0 auto',
          '@screen sm': { maxWidth: '360px' },
          '@screen md': { maxWidth: '960px' },
          '@screen lg': { maxWidth: '1200px' },
          '@screen xl': { maxWidth: '1320px' }
        }
      })
    })
  ]
}
