const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
/*   clean-webpack-plugin 3.0 以上的版本需要使用对象结构  */
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: '#source-map',
    /***
     * optimization提取公共代码
     */
    optimization: {
        splitChunks: {
            cacheGroups: {  //设置缓存组用来抽取满足不同规则的chunk,拆分模块
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\\/]node_modules[\\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        //将CSS提取为独立的文件的插件
                        loader: MiniCssExtractPlugin.loader
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
                NODE_ENV: 'production'
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new OptimizeCssnanoPlugin({
            sourceMap: true,
            cssnanoOptions: {
                preset: [
                    'default',
                    {
                        mergeLonghand: false,
                        cssDeclarationSorter: false
                    }
                ]
            }
        }),
        /**CopyWebpackPlugin: webpack中拷贝文件**/
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../dist')
            }
        ]),
        new CleanWebpackPlugin(), //删除打包文件
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ]
});

