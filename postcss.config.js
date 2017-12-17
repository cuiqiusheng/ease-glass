const variables = require('./src/styles/variables')

module.exports = () => ({
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables
        }
      }
    }
  }
})

