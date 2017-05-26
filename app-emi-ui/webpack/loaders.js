const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {test: /\.ts(x?)$/, loader: 'ts-loader'},
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      "style",
      "css!sass")
  }, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  }, {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  }, {
    test: '\.jpg$',
    exclude: /node_modules/,
    loader: 'file'
  }, {
    test: '\.png$',
    exclude: /node_modules/,
    loader: 'url'
  }
];
