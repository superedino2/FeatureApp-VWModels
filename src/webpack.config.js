// @ts-check

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

/**
 * @type {webpack.Configuration[]}
 */
const webpackConfigs = [
  {
    mode: 'development',
    entry: './feature-hub/feature-app.js',
    output: {
      filename: 'feature-app.umd.js',
      libraryTarget: 'umd',
      libraryExport: 'default',
      publicPath: '/'
    }
  },
  {
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'feature-hub/integrator.html'),
        title: 'Angular Feature App'
      })
    ],
    devServer: {
      before: app => {
        app.get('/feature-hub/*', (req, res) =>
          res.sendFile(path.join(__dirname, '/', req.path))
        );
      }
    },
    entry: './feature-hub/integrator.js',
    output: {
      filename: 'integrator.js',
      publicPath: '/'
    }
  }
];

module.exports = webpackConfigs;
