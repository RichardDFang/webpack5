const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const webpackDevConfig = merge(commonConfig, {
    mode: 'development',
    entry: './src/main.js',
    devtool: 'eval-cheap-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        port: 8088,
        compress: true,
        contentBase: './dist'
    },
    plugins: [
    ]
})

module.exports = webpackDevConfig