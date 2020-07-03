const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = ({ context, onGetWebpackConfig }) => {
    onGetWebpackConfig((config) => {
        config.optimization
            .splitChunks({
                chunks: "all",
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 5,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    'react-vendor': {
                        test: (module, chunks) => /react/.test(module.context),
                        priority: 20,
                    },
                    'alifd-vendor': {
                        test: (module, chunks) => /alifd/.test(module.context),
                        priority: 15,
                    },
                    'moment-vendor': {
                        minChunks: 1,
                        test: (module, chunks) => /moment/.test(module.context),
                        priority: 10,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    },
                },
            });
        config.plugin('CircularDependencyPlugin')
            .use(CircularDependencyPlugin, [{
                // exclude detection of files based on a RegExp
                exclude: /node_modules/,
                // include specific files based on a RegExp
                include: /src/,
                // add errors to webpack instead of warnings
                failOnError: false,
                // allow import cycles that include an asyncronous import,
                // e.g. via import(/* webpackMode: "weak" */ './file.js')
                allowAsyncCycles: false,
                // set the current working directory for displaying module paths
                cwd: process.cwd(),
            }]);
    });
}