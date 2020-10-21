const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const helpers = require('./helpers');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      alias: {
        layout: helpers.resolveFromRootPath('src/layout'),
        core: helpers.resolveFromRootPath('src/core'),
        scenes: helpers.resolveFromRootPath('src/scenes'),
        pods: helpers.resolveFromRootPath('src/pods'),
        common: helpers.resolveFromRootPath('src/common'),
        'common-app': helpers.resolveFromRootPath('src/common-app'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      app: ['regenerator-runtime/runtime', './index.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: 'assets/favicon.ico',
        template: 'app.html',
        filename: 'app.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: '../static/index.html', to: 'index.html' },
          { from: '../static/about.html', to: 'about.html' },
          { from: '../static/styles.css', to: 'styles.css' },
        ],
      }),
    ],
  }
);
