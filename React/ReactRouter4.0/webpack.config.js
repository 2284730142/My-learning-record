const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        page: path.resolve('./src/demo11/app.js')
    },
    output: {
        /*
        *	这是编译的路径另一种写法：path.resolve(__dirname, 'build')
        *
        * */
        path: path.resolve('./build/demo11'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015', 'react'
                        ]
                    }
                },
            },//支持es6
            /*// {test:/\.jsx?$/,exclude: /node_modules/,loader:'jsx-loader?harmony'},//支持react
            // {test:/\.jsx?$/,exclude: /node_modules/,loader:'babel?presets[]=react,presets[]=es2015'},//同时支持es6 react或者
            {test:/\.jsx?$/,exclude: /node_modules/,loader: 'babel', query: {presets: ['es2015', 'react']}},//同时支持es6 react
            {test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url?limit=8192'},
            /!*下面两行的作用是分离css*!/
            /!*{ test: /\.css$/, loader:ExtractTextPlugin.extract("style-loader", "css-loader") },
             { test: /\.scss$/, loader:ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }, //sass加载器*!/
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" }, //sass加载器*/
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.json']
    },
    plugins: [
        // new ExtractTextPlugin("output/[name].css"),//独立css文件
        new webpack.NoEmitOnErrorsPlugin(),
        //添加一个快速生成html文件的插件
        //参数：chunks - 只包含指定的文件（打包后输出的JS/CSS）,不指定的话，它会包含生成的所有js和css文件
        new HtmlwebpackPlugin({
            filename:"index.html",//输出文件名，相对路径output.path
            template: path.resolve('./src/index.html'),//html模版地址,相对配置文件目录
            hash:true
        })
    ],
    //node服务器，实时预览
    devServer: {
        contentBase: path.resolve('./src'),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//当源文件改变时会自动刷新页面
        port: 8181//端口
    }
    /*devtool: 'source-map'*/
};