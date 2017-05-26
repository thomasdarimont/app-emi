const loaders = require("./loaders");
const webpack = require('webpack');
const preloaders = require("./preloaders");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles/[name].scss');

module.exports = {
  entry: ['./src/main/frontend/index.ts'],
  output: {
    filename: 'build.js',
    path: 'target/dist'
  },
  devtool: 'source-map',
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ]),
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin(
      {
        warning: false,
        mangle: true,
        comments: false
      }
    ),
    new HtmlWebpackPlugin({
      template: './src/main/frontend/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
  module: {
    preLoaders: preloaders,
    loaders: loaders
  },

  tslint: {
    emitErrors: true,
    failOnHint: true
  }
};