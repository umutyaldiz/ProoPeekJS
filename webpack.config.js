
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  return {
    mode: !env.dev ? "production" : "development",
    entry: ['./src/js/index.js', './src/scss/styles.scss'],
    output: {
      path: path.resolve('dist'),
      clean: true,
      filename: 'proopeek.min.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/transform-runtime"
              ]
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin()
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'proopeek.min.css'
      })
    ]
  }
};
