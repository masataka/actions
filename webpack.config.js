module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: __dirname,
        filename: 'build/index.js',
    },
    module: {
        rules: [{ test: /\.ts$/, use: 'ts-loader' }],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
