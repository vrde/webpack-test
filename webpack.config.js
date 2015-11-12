module.exports = {
    context: __dirname + '/client',
    entry: {
        javascript: './app.js',
        html: './index.html'
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/dist',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader?presets[]=react&presets[]=es2015']
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }]
    }
};
