const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src_dir = path.resolve(__dirname, 'src');
const public_dir = path.resolve(__dirname, 'public');
const vendor_libs = [
  'axios',
  'bootstrap',
  'jquery',
  'react',
  'react-dom'
];

module.exports = {
  entry: {
    bundle: src_dir + '/index.js',
    vendor: vendor_libs
  },
  output: {
    path: public_dir + '/build',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
        use: 'babel-loader',
        test: /\.js?$/,
        exclude: '/node_modules/'
      },
      {
        use: [
          'style-loader',
          'css-loader'
        ],
        test: /\.css?$/
      },
      {
        loader: 'file-loader',
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|mp3|mp4|ico)$/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: src_dir + '/index.html'
    })
  ],
  devServer: {
    port: 9999,
    open: true
  }
};