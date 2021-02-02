const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: '/\.vue$/',
                use: 'vue-loader'
            }
        ]
    }
}