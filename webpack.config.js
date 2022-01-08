const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    //development/production
    entry: __dirname + '/art-quiz/src/script.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: false}
                    }
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            },
            {
                test: /\.(png|gif|svg|eot|ttf|json)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            },
            {
                test: /\.(mp3|ogg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'audio/[hash][ext][query]'
                }
            },
            {
                test: /full.jpg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'full/[hash][ext][query]'
                }
            },
            {
                test: /[0-9].jpg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext][query]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //create style nodes from js string
                    "style-loader",
                    //translates css into commonjs
                    "css-loader",
                    //compiles sass to css
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources:[
                                './art-quiz/src/styles/vars.scss',
                            ]
                        }
                    }
                ],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'art-quiz/dist'),
        filename: 'main.js',
        assetModuleFilename: 'assets/[name].[ext]'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./art-quiz/src/index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        compress: true,
        port: 3000,
    },
};
