const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
    return {
        target: 'web',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true,
            writeToDisk: true
        },
        module: {
            rules: [
                { test: /\.(md)/, use: "raw-loader" },
                { test: /\.(js)|.(jsx)$/, use: 'babel-loader' },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader',] },
                {
                    test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: './public/fonts'
                        }
                    }]
                }
            ]
        },
        mode: "development",
        plugins: [
            new htmlPlugin({
                template: './index.html'
            }),
            new CopyPlugin([
                { from: './assets', to: './assets' },
            ])
        ],
        watch: true
    }
}