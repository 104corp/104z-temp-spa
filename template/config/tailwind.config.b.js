const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    screens: {
      sm: { min: '360px' },
      md: { min: '1024px' },
      lg: { min: '1281px' },
      xl: { min: '1680px' }
    },
    colors: {
      lake: {
        100: '#39C8D0',
        200: '#00AFB8'
      },
      blue: {
        100: '#E6f9FA',
        200: '#DBE8FF',
        300: '#4E91FF',
        400: '#1654B9'
      },
      pink: {
        100: '#FFE9EC',
        200: '#EA475B'
      },
      orange: {
        100: '#FFEEDF',
        200: '#FFA573',
        300: '#FF843F'
      },
      green: {
        100: '#E9F6DC',
        200: '#70BE20'
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
      24: ['24px', '32px'],
      28: ['24px', '38px'],
      36: ['36px', '48px'],
      45: ['45px', '64px']
    }
  },
  corePlugins: {},
  variants: {},
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, config }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: '0 auto',
          '@screen sm': { maxWidth: '100%' },
          '@screen md': { maxWidth: '1024px' },
          '@screen lg': { maxWidth: '1168px' },
          '@screen xl': { maxWidth: '1440px' }
        }
      })
    })
  ]
}
