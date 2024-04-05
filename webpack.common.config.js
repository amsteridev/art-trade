const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-throw-expressions',
                    ],
                    exclude: [/node_modules/]
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: 'compressed'
                        }
                    }
                }
            ]
        }]
    },
    resolve: {
        extensions: [
            '.js', '.scss'
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name]/css/[name].css',
            chunkFilename: './[name]/css/[name].[chunkhash].css'
        })
    ]
}

module.exports = config
