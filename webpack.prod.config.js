const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const CssMinimiserPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    port: 7070,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimiserPlugin(),
    ]
  }
});
