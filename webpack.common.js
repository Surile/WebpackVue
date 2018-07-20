const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.[hash:8].js',
        chunkFilename: '[name].[hash:8].chunk.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src')
        },
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Vue webpack',
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(['build']),
        new webpack.NamedModulesPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}
