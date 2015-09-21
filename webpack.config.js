'use strict';

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: './public',
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader' },
            { test: /\.css$/,
              loaders: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader?{browsers:["last 2 versions", "IE >= 9"]}'
              ]
            }
        ]
    }
};
