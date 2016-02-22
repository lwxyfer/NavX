var Webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./public/",
        publicPath: "/public/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader?limit=10000&name=static/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            '$': 'jquery',
            'jQuery': 'jquery'
        },
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};