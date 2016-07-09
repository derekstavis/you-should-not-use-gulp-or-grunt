const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(svg|ttf|otf|eot|woff|woff2|png|jpg|gif)$/,
        loader: "file"
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'index.html' }
    ])
  ]
}
