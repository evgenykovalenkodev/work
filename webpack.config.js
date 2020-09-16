const localServer = {
    path: 'localhost/dist/',
    port: 3000,
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: './src/js/app.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue',
                options: {
                    // vue-loader options go here
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'images',
                    publicPath: '../images'
                }
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts',
                    publicPath: '../fonts'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            hash: false,
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: false,
            filename: 'index2.html',
            template: path.resolve(__dirname, 'src', 'index2.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src', 'images'), to: path.resolve(__dirname, 'dist', 'images')},
                {from: path.resolve(__dirname, 'src', 'fonts'), to: path.resolve(__dirname, 'dist', 'fonts')},
            ]
        })
    ]

};

module.exports = config;
