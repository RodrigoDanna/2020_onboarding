const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.prod.tsx'
    },
    output: {
        filename: 'react_bundle.js',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['./', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.less$/i,
                use: [
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            implementation: require('less'),
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
};