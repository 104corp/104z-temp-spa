import { detect } from 'detect-browser'

const detectBrowser = function () {
  const browser = detect()
  return browser
}

export default {
  install (Vue, options) {
    Vue.prototype.$detectBrowser = detectBrowser
  }
}
