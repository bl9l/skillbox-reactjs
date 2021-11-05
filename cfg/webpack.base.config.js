const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_SCSS_REGEXP = /\.global.scss$/

module.exports = {
    NODE_ENV,
    IS_DEV,
    IS_PROD,
    GLOBAL_SCSS_REGEXP,
}
