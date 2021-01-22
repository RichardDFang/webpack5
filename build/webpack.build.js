const webpack = require('webpack');
const {merge} = require('webpack-merge');

const commonConfig = require('./webpack.common');

webpack(merge(commonConfig, {
    mode: 'production'
}), (err, stats) => {
    console.log(err, stats)
})