const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: 'http://localhost:3000/build',
    hot: true,
    open: true,
    stats: 'minimal',
    clientLogLevel: 'error'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
