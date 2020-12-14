const deepMerge = require('deepmerge')
const configDefault = require('./config/tailwind.config.default')
const clientConfig = require('./config/tailwind.config.c')
const config = {
  theme: {},
  corePlugins: {
    container: false,
    animation: false
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.BUILD === 'true',
    content: ['./src/**/*.html', './src/**/*.vue']
  },
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}

module.exports = deepMerge.all([
  configDefault, 
  clientConfig,  // B & C 各別設定
  config
])
