const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/animations.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    }
};