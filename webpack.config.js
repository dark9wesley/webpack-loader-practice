const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true,
    publicPath: '/dist'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: './loaders/test-loader.js'
      // },
      // {
      //   test: /\.js$/,
      //   use: [
      //     './loaders/demo/test1',
      //     './loaders/demo/test2',
      //     './loaders/demo/test3',
      //     './loaders/demo/test4',
      //   ]
      // }
      {
        test: /\.js$/,
        use: [
          './loaders/clean-log-loader',
          {
            loader: './loaders/banner-loader',
            options: {
              author: 'pengyw',
            }
          },
          {
            loader: './loaders/babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        loader: './loaders/file-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ['./loaders/style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    })
  ],
  devServer: {
    port: 8000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  mode: 'development'
}
