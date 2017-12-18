const path = require('path')

const plugins = require('./webpack-config/plugins')
const loaders = require('./webpack-config/loaders')

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development'

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    index: path.join(__dirname, '/src/index.js')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Src: path.join(__dirname, 'src'),
      Components: path.join(__dirname, 'src/components'),
      Containers: path.join(__dirname, 'src/containers'),
      Constants: path.join(__dirname, 'src/constants'),
      Utils: path.join(__dirname, 'src/utils')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 5090,
    stats: 'errors-only',
    open: true
  },
  module: {
    rules: [
      loaders.eslint,
      loaders.jsx,
      loaders.styles.css,
      loaders.styles.cssAntd,
      loaders.styles.less,
      loaders.styles.scss,
      loaders.assets,
      loaders.svg,
      loaders.json
    ]
  },
  externals: {
    window: 'window',
    jquery: '$'
  },
  plugins: __DEV__ ?
    [].concat(plugins.commonPlugins).concat(plugins.devPlugins) :
    [].concat(plugins.commonPlugins).concat(plugins.prodPlugins)
}
