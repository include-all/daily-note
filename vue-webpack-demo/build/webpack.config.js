const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',  //mode 模式
    entry: {
        // 配置入口文件
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        // 配置打包文件输出的目录
        path: path.resolve(__dirname, '../dist'),
        // 生成的 js 文件名称
        /**http://react-china.org/t/webpack-output-filename-output-chunkfilename/2256/2**/
        filename: 'js/[name].[hash:8].filename.js',  //filename应该比较好理解，就是对应于entry里面生成出来的文件名
        // 生成的 chunk 名称
        chunkFilename: 'js/[name].[hash:8].js',  //chunkname我的理解是未被列在entry中，却又需要被打包出来的文件命名配置。
        // 资源引用的路径
        publicPath: '/'
    },
    devServer: {
        open: true, //在DevServer第一次构建完成时，自动用浏览器打开网页，默认是true
        hot: true,
        port: 3000,
        contentBase: './dist'
    },
    resolve: {
        /**resolve.alias  配置项通过别名来把原导入路径映射成一个新的导入路径
         resolve:{
                alias:{
                    components: './src/components/'
                }
         }
         当你通过  import Button from 'components/button 导入时，实际上被 alias 等价替换成了  import Button from './src/components/button' 。

         这样做可能会命中太多的导入语句，alias 还支持 $ 符号来缩小范围到只命中以关键字结尾的导入语句：

        resolve:{
            alias:{
                    'react$': '/path/to/react.min.js'
            }
        }
         react$  只会命中以  react  结尾的导入语句，即只会把  import 'react'  关键字替换成  import '/path/to/react.min.js' 。
         *
         * */
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js'
        },
        /**在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。  resolve.extensions 用于配置在尝试过程中用到的后缀列表*/
        extensions: [
            '.js',
            '.vue'
        ]
    },
    module: {
        rules: [  //配置loader
            /**
             * vue-loader 用于解析.vue文件
             * vue-template-compiler 用于编译模板
             * cache-loader 用于缓存loader编译的结果
             * thread-loader 使用 worker 池来运行loader，每个 worker 都是一个 node.js 进程。
             */
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'thread-loader'
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            },
                        }
                    }
                ]
            },
            /**babel-loader 用来编译解析js文件*/
            {
                test: /\.jsx?$/,   //正则匹配，.js或.jsx文件
                exclude: /node_modules/,  //排除node_modules下的文件
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            /**样式loader,loader顺序从下到上，从右到左*/
            // {
            //     test: /\.less$/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader'
            //         },
            //         {
            //             loader: 'less-loader'
            //         },
            //         {
            //             loader: 'postcss-loader'
            //         }
            //     ]
            // },
            /**
             * file-loader 解析文件url，并将文件复制到输出的目录中
             * url-loader 功能与 file-loader 类似，如果文件小于限制的大小。则会返回 base64 编码，否则使用 file-loader 将文件复制到输出的目录中
             * limit  单位是B  下面是4KB
             * **/
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        /**最经典，最关键的plugin,创建html,并引入js*/
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        /**这个插件的作用是在热加载时直接返回更新文件名，而不是文件的id**/
        new webpack.NamedModulesPlugin(),
        /**模块热替换插件,绝对不可用于生产环境**/
        new webpack.HotModuleReplacementPlugin(),
        /**Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的**/
        new VueLoaderPlugin(),
        /**定义全局环境变量*/
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         VUE_APP_BASE_URL: JSON.stringify('http://localhost:3000')
        //     }
        // }),
    ]
};