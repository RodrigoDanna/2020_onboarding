const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'core_bundle.js',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}