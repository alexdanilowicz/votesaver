const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const env = process.env.NODE_ENV || 'development';
const finalCSSLoader = (env === 'production') ? MiniCssExtractPlugin.loader : { loader: 'style-loader' };

module.exports = {
  mode: env,
  output: { publicPath: '/' },
  entry: ['babel-polyfill', './src'],
  devtool: 'source-map',
  devServer: {
  	// Note: in the future, you might have to remove host and port settings for production
  	// currently (using firebase hosting), it works fine.
    host: '0.0.0.0',
    port: 8080, 
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.s?css/,
        use: [
          finalCSSLoader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              useRelativePath: true,
              name: '[name].[ext]',
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/img/favicons/favicon.ico',

    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './200.html',
      favicon: './src/img/favicons/favicon.ico',
    }),
  ],
};

if (env === 'development') {
  module.exports.serve = {
    content: [__dirname],
    add: (app, middleware, options) => {
      const historyOptions = {
        index: '/index.html',
      };
      app.use(convert(history(historyOptions)));
    },
  };
}
