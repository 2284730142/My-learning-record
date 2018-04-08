const webpack = require('webpack');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
// --output-public-path=dist --port=8181 --inline --hot
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: {
            rewrites: [
                {from: /./, to: '/404.html'}
            ]
        },
        overlay: true,
        inline: true,// 自动刷新
        hot: true,// 热模块替换
        port: 8282
    }
};