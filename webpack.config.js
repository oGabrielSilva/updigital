const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'src', 'browser', 'scripts', 'main.ts'),
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'client.tsconfig.json', // Especifique o tsconfig desejado aqui
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public', 'scripts'),
  },
};
