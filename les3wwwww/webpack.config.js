const {resolve}= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'), 
        filename: 'main.[contenthash].js' 
    },
    module: {
        rules: [
           
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }, 
            { test: /\.s[ac]ss$/i, 
              use: [
                MiniCssExtractPlugin.loader,'css-loader','sass-loader'
            ]
            },
            {test: /\.(png|jpe?g|gif|)$/i,
                use: [
                {
                    loader: `img-optimize-loader`,
                    options: {
                        compress: {
                           mode: 'high', 
                           disableOnDevelopment: false,
                           webp: true,
                           gifsicle: true
                        }
                    }
                }]
            },
            {test: /\.(mp[3|4])$/i,
             use: ['file-loader']
            }        
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename:'main.[contenthash].css'
        })
    ]
        
}