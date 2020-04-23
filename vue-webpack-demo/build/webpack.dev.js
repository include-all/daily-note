// build/webpack.dev.js
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            /**样式loader,loader顺序从下到上，从右到左*/
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ]
});
