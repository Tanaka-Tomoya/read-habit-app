const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: `${__dirname}./index.html`,
    port: 3000
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react']
            }
          }
        ]
      }
    ]
  }
};
