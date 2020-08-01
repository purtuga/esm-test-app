const { VueLoaderPlugin } = require('vue-loader');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');

module.exports = {
    entry: {
        index: './vue/index.js',
        indexReplica: './vue/indexReplica.vue',
    },
    output: {
        library: 'LIB',
        libraryTarget: 'var',
        filename: '[name].js',
    },
    mode: 'production',
    optimization: {
        minimize: false, // For debugging purposes
        splitChunks: {
            automaticNameDelimiter: '~',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
    plugins: [new VueLoaderPlugin(), new EsmWebpackPlugin()],
};