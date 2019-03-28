const webpack = require('webpack');

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: '.bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/react']
            }
        }]
    }
}