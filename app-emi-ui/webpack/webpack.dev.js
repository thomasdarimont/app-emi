const loaders = require("./loaders");
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/main/frontend/index.ts'],
    output: {
        filename: 'build.js',
        path: 'target/frontend'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "inline-eval-cheap-source-map",
    plugins: [
        new webpack.EnvironmentPlugin([
          "NODE_ENV"
        ]),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: './src/main/frontend/index.html',
            inject: 'body',
            hash: true
        }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 9090,
        server: {
          baseDir: 'target/frontend'

        },
        socket: {
          domain: 'localhost:9090'
        },
        startPath: '/ui',

        ui: false,
        online: false,
        notify: false,
        open: false
      }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],
    module:{
        loaders: loaders
    }
};
