const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
})
