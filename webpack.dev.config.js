const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const { ProgressPlugin } = require('webpack');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new ProgressPlugin(),
  ],
});
