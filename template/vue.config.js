const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
<%_ if (options.prerender) { _%>
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
<%_ } _%>

const resolve = (dir) => path.join(__dirname, '.', dir)

<%_ if (options.prerender && !options.isMKT) { _%>
const appendScript = (route, html) => {
  // 修改 html 內容, 例如 append GTM script
  const result = html.replace()

  return result
}
<%_ } _%>

module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: path.join(__dirname, `dist${process.env.BASE_URL}`),
  productionSourceMap: false,
  devServer: {
    // public: 'https://domain',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    extract: {
      filename: '[name].[hash:8].css',
      chunkFilename: '[name].[hash:8].css'
    },
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/style/config/_index.scss";'
      }
    }
  },
  configureWebpack: (config) => {
    const result = {
      mode: process.env.BUILD ? 'production' : 'development', // 相應地使用其內置優化
      output: {
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js'
      },
      resolve: {
        alias: {
          '~': resolve('src'),
          '@': resolve('src')
        }
      },
      plugins: [
        new StyleLintPlugin({
          files: ['src/**/*.{vue,scss}']
        })
      ],
      optimization: {}
    }

    if (process.env.BUILD) {
      <%_ if (options.prerender) { _%>
      // prerender
      result.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          outputDir: path.join(__dirname, `dist${process.env.BASE_URL}`),
          indexPath: path.join(__dirname, `dist${process.env.BASE_URL}/index.html`),
          routes: <%_ if (!options.isMKT) { _%>['/']<%_ } else { _%>['/index.html']<%_ } _%>,
          // 自己決定什麼時候要 render
          // renderer: new Renderer({
          //   renderAfterDocumentEvent: 'render-event'
          // }),
          postProcess (renderedRoute) {
            <%_ if (!options.isMKT) { _%>
            const formatHtml = appendScript(
              renderedRoute.route, renderedRoute.html
            )
            renderedRoute.html = formatHtml
            <%_ } else { _%>
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(
                __dirname,
                'dist',
                process.env.BASE_URL,
                renderedRoute.route
              )
            }
            <%_ } _%>

            return renderedRoute
          }
        })
      )
      <%_ } _%>

      // 壓縮 css
      result.optimization.minimize = true
      result.optimization.minimizer = [new CssMinimizerPlugin()]

      // gzip
      result.plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })
      )
    }

    return result
  }
}