const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: './src/main.js',
    devServer: {
        port: 8088,
        compress: true
    }
})