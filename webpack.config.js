// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'production', // Set mode to 'production'
    entry: './src/index.js',// Update this to your actual entry file
    output: {
        filename: 'bundle.[contenthash].js', // Add contenthash to ensure unique filenames
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Match .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Add presets for React
                    },
                },
            },
            {
                test: /\.css$/, // Match .css files
                use: [
                    'style-loader', // Injects styles into the DOM
                    'css-loader',   // Translates CSS into CommonJS
                ],
            },
            {
                test: /\.svg$/, // Match .svg files
                use: {
                    loader: 'file-loader', // Use file-loader to handle SVG files
                    options: {
                        name: '[name].[hash].[ext]', // Customize output file name
                        outputPath: 'images/', // Specify output directory for images
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Resolve .js and .jsx extensions
        alias: {
            '@': path.resolve(__dirname, 'src'), // Add alias for '@' to point to 'src' directory
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://171.22.25.164',
                changeOrigin: true,
            },
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // Split all chunks
            minSize: 20000, // Minimum size, in bytes, for a chunk to be generated
            maxSize: 70000, // Maximum size, in bytes, for a chunk to be generated
            minChunks: 1, // Minimum number of chunks that must share a module before splitting
            maxAsyncRequests: 30, // Maximum number of parallel requests when loading async chunks
            maxInitialRequests: 30, // Maximum number of parallel requests at the initial loading
            automaticNameDelimiter: '~', // Delimiter for naming chunks
            name: false, // Set to false to disable naming of chunks
        },
    },
};