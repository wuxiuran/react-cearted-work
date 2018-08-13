/**
 * Created by wuxiuran on 2018/8/10.
 */
const path = require('path');
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    })
  ],
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
    // publicPath: config.build.assetsPublicPath
  }
}
