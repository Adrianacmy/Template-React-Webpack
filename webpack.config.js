const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  devtool: '#source-map',// tells Webpack to reference line numbers from our individual component files, not the big app.bundle.js file.
  devServer: {
    hot: true,//enables HMR on the local server.
    contentBase: resolve(__dirname, 'build'),//points to the source code it will serve in the browser.
    publicPath: '/' //specifies where hot-reloaded modules should be loaded. This should always match the publicPath option in output.
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
          }
        },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],// Babel organizes code into a format called CommonJS by default. But CommonJS doesn't support hot module replacement. This configuration turns off CommonJS formatting.
            "react",
          ],
          plugins: [
            "react-hot-loader/babel"
          ]
        }
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template:'template.ejs',// tells the plugin which file to use as a template when creating an index.html in the build directory.
      appMountId: 'react-app-root',//provides the name of our HTML's root DOM node
      title: 'React Help Queue',//sets our new indexs <title> tags.
      filename: resolve(__dirname, "build", "index.html"),// is the location we're placing our programmatically-generated index.html.
    }),
  ]
};