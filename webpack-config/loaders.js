const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')

const __DEV__ = (process.env.NODE_ENV || 'development') === 'development'

exports.eslint = {
  enforce: 'pre',
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'eslint-loader'
}

exports.jsx = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [ 'babel-loader' ]
}

const moduleCSSLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    importLoaders: 1,
    localIdentName: '[name]__[local]--[hash:base64:5]'
  }
}

const postCSSLoader = {
  loader: require.resolve('postcss-loader')
}

exports.styles = {
  css: {
    test: /\.css$/,
    use: __DEV__ ?
      [ 'style-loader', moduleCSSLoader, postCSSLoader ] :
      ExtractTextPlugin.extract({
        use: [ moduleCSSLoader, postCSSLoader ]
      }),
    exclude: path.resolve(__dirname, '../node_modules')
  },
  cssAntd: {
    test: /\.css$/,
    include: path.resolve(__dirname, '../node_modules'),
    use: [
      {
        loader: require.resolve('style-loader')
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1
        }
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9' // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      }
    ]
  },
  less: {
    test: /\.less$/,
    use: __DEV__ ?
      [ 'style-loader', 'css-loader', postCSSLoader, 'less-loader' ] :
      ExtractTextPlugin.extract({
        use: [ 'css-loader', postCSSLoader, 'less-loader' ]
      })
  },
  scss: {
    test: /\.(sass|scss)$/,
    use: __DEV__ ?
      [ 'style-loader', 'css-loader', postCSSLoader, 'sass-loader' ] :
      ExtractTextPlugin.extract({
        use: [ 'css-loader', postCSSLoader, 'sass-loader' ]
      })
  }
}

exports.assets = {
  test: /\.(eot|woff|woff2|ttf|otf|png|jpe?g|gif|mp4|webm)$/,
  use: [ {
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: 'assets/[name].[ext]'
    }
  } ]
}

exports.svg = {
  test: /\.svg/,
  loader: 'file-loader',
  options: {
    outputPath: 'assets/svg/'
  }
}

exports.json = {
  test: /\.json$/,
  loader: 'json-loader'
}
