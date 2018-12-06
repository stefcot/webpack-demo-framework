const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      // bundle the client for hot reloading
      'webpack/hot/only-dev-server',
      // bundle the client for config-dev-server
      'webpack-dev-server/client?http://localhost:8080'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // allows Module naming in developpement mode
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    hot: true
  }
};
