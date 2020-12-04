module.exports = (api, options, rootOptions) => {

  let scriptBuild = ''
  scriptBuild += "env BUILD=true vue-cli-service build "
  if (!options.isMKT) scriptBuild += "--mode $NODE_ENV"

  api.extendPackage({
    "scripts": {
      "serve": "vue-cli-service serve --port 3000",
      "build": scriptBuild,
      "lint": "npm run lint:script && npm run lint:style",
      "lint:script": "vue-cli-service lint",
      "lint:style": "stylelint --cache src/**/*.{vue,scss} --fix"
    },
    "dependencies": {
      "axios": "^0.21.0",
      "detect-browser": "^5.2.0",
      "vue-router": "^3.2.0",
      "vuex": "^3.4.0"
    },
    "devDependencies": {
      "compression-webpack-plugin": "^5.0.1",
      "css-minimizer-webpack-plugin": "^1.1.5",
      "deepmerge": "^4.2.2",
      "lint-staged": "^9.5.0",
      "stylelint": "^13.7.2",
      "stylelint-config-recommended-scss": "^4.2.0",
      "stylelint-order": "^4.1.0",
      "stylelint-scss": "^3.18.0",
      "stylelint-webpack-plugin": "^2.1.0",
      "susy": "^3.0.6",
      "tailwindcss": "^1.8.10"
    },
    "gitHooks": {
      "pre-commit": "lint-staged"
    },
    "lint-staged": {
      "*.vue": [
        "npm run lint",
        "git add"
      ],
      "*.scss": [
        "npm run lint:style",
        "git add"
      ],
      "*.{js,ts}": [
        "npm run lint:script",
        "git add"
      ]
    }
  })

  // 安裝 prerender
  if (options.prerender) {
    api.extendPackage({
      "devDependencies": {
        "prerender-spa-plugin": "^3.4.0"
      }
    })
  }
  // 自動產憑證 script
  if(options.needDevContainer) { 
    api.extendPackage({
      "scripts": {
        "init": "sh script/generateKey.sh"
      }
    })
  }

  // 安裝額外 plugin
  const pluginMap = {
    axios: '^0.20.0',
    gsap: '^3.5.1',
    'vue-meta': '^2.4.0'
  }
  const pluginResult = {}
  for (let i = 0, max = options.plugins.length; i < max; i++) {
    let key = options.plugins[i]
    let value = pluginMap[key]
    if (value) pluginResult[key] = value
  }
  api.extendPackage({
    "dependencies": pluginResult
  })

  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') 
                    || path.startsWith('public/') 
                    || path.startsWith('.eslintrc.js'))
      .forEach(path => delete files[path])
  })

  api.render('./template')
}