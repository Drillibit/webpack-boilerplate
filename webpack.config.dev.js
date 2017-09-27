const config = require('./webpack.config.js');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = merge(config, {
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "build")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
