const {DefinePlugin} = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_SCSS_REGEXP = /\.global.(css|scss|sass)$/

module.exports = {
    NODE_ENV,
    IS_DEV,
    IS_PROD,
    GLOBAL_SCSS_REGEXP,
}

module.exports.webpackDefinePlugin = new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`})

module.exports.cssLoader = {
    loader: 'css-loader',
    options: {
        modules: {
            mode: 'local',
            localIdentName: '[name]__[local]--[hash:base64:5]'
        },
    }
};

module.exports.fileLoader = {
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[hash]-[name].[ext]',
                publicPath: 'static',
            },
        },
    ],
};
