const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const helpers = require('./helpers');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      alias: {
        layout: helpers.resolveFromRootPath('src/layout'),
        assets: helpers.resolveFromRootPath('src/assets'),
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
    output: {
      path: helpers.resolveFromRootPath('dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: 'assets/favicon/favicon.ico',
        template: 'app.html',
        filename: 'app.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: '../static/index.html', to: 'index.html' },
          { from: '../static/styles.css', to: 'styles.css' },
          { from: '../static/assets', to: 'assets' },
        ],
      }),
    ],
  }
);
