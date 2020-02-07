const path = require('path');

module.exports = {
    mode: "production",
    entry: ["@babel/polyfill", './src/js/script.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/js'),
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },

};

