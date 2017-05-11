var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
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
        notify: false
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
