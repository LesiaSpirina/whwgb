const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
module.exports = {
    mode: 'development',
    entry: resolve(__dirname,'src','main.js'),
    output: {
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.s[ca]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.mp3$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
       new HtmlWebpackPlugin({
            template:resolve( __dirname,'src','index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'main.bundle.css'
        }),
        new BundleAnalyzerPlugin()

    ]  
}