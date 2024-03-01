const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode : "development",
    devServer : {
        port: 4000
    },
    plugins: [
        new FederationPlugin({
            name: 'container',
            remotes: {
                list: 'list@http://localhost:4200/list.js',
                header: 'header@http://localhost:4300/header.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}