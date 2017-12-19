const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development'
const __DEBUG__ = (process.env.DEPLOY_ENV || 'development') !== 'production'

exports.commonPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(__DEV__ ? 'development' : 'production')
    },
    __DEBUG__: JSON.stringify(__DEBUG__),
    __DEV__: JSON.stringify(__DEV__)
  }),
  new webpack.ProvidePlugin({
    _: 'lodash'
  })
]

exports.devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: true,
    options: {
      context: '/'
    }
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  })
]

const prodPlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    names: [ 'common', 'vendor' ],
    minChunks: Infinity
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
      context: '/'
    }
  }),
  new ExtractTextPlugin('[name].[contenthash:8].css'),
  new UglifyJSPlugin({
    sourceMap: false,
    uglifyOptions: {
      compress: true
    }
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    hash: true,
    filename: '../index.html'
  })
]

exports.prodPlugins = prodPlugins
