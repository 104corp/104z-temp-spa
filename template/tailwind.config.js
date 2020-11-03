const deepMerge = require('deepmerge')
const configDefault = require('./config/tailwind.config.default')
// const clientConfig = require('./config/tailwind/tailwind.config.c')
const config = {
  theme: {},
  corePlugins: {
    container: false,
    animation: false
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
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
  // clientConfig, 需要用 c style 的話, 再引用
  config
])
