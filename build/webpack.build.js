const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

webpack(merge(commonConfig, {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
}), (err, stats) => {
    console.log(err)
})