const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {

    mode: 'development',
    devServer: {
        port: 4300,
    },
    plugins: [
        new FederationPlugin(
            {
                name: 'header',
                filename: 'header.js',
                exposes: {
                    './headerIndex': './src/index'
                }
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
            }
        )
    ]

}