const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: './bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg|JPG)$/, loader: 'file-loader'},
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }

    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin()
  ]
}
