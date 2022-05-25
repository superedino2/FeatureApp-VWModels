// @ts-check
const path = require('path');
const webpack = require('webpack');

/**
 * @type {webpack.Configuration[]}
 */
const webpackConfigs = [
  {
    mode: 'production',
    entry: './feature-hub/feature-app.js',
    output: {
      filename: 'feature-app.umd.js',
      libraryTarget: 'umd',
      libraryExport: 'default',
      publicPath: '/'
    }
  },
];

module.exports = webpackConfigs;
