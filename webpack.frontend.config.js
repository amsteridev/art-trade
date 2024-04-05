const common = require('./webpack.common.config')
const { frontend: entry } = require('./webpack.entry')
const { frontend: output } = require('./webpack.output')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')



const config = merge(common, {
    entry: entry,
    output: {
        path: output.output,
        publicPath: '/',
        filename: './[name]/js/[name].js',
        chunkFilename: './[id]/js/[id].hash.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                }
            }
        }
    }
})

module.exports = config
