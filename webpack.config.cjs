// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/scripts/main.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     clean: true,
//   },
//   devServer: {
//     static: './dist',
//     open: true,
//     port: 3000,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.scss$/i,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//     ],
//   },
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // Імпортуємо плагін

module.exports = {
  mode: 'development',
  entry: './src/scripts/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
   devServer: {
    static: './dist',
    open: true,
    port: 3000,
  },
  module: {
    rules: [
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Мій Webpack Проєкт',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyPlugin({ // Додаємо цей плагін
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets', 'images'), // Звідки копіювати
          to: path.resolve(__dirname, 'dist', 'assets', 'images'), // Куди копіювати
          noErrorOnMissing: true, // Не видавати помилку, якщо джерело відсутнє
        },
      ],
    }),
  ],
};
