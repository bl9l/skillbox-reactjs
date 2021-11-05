const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {IS_DEV, IS_PROD, NODE_ENV, GLOBAL_SCSS_REGEXP} = require("./webpack.base.config");

function setupDevtool() {
    if(IS_DEV) return 'eval';
    if(IS_PROD) return false;
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr&timeout=2000'
    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                        }
                    },
                    'sass-loader'
                ],
                exclude: GLOBAL_SCSS_REGEXP,
            },
            {
                test: GLOBAL_SCSS_REGEXP,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    devtool: setupDevtool(),
    plugins: IS_DEV
        ? [
            new CleanWebpackPlugin(),
            new HotModuleReplacementPlugin(),
        ]
        : [],

    watchOptions: {
        ignored: /dist/,
    }
};
