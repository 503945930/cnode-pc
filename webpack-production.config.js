const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};


const config = {
  entry: [path.join(__dirname, 'src/app/app.jsx')],
  //output config
  output: {
    path: PATHS.build, //Path of output file
    filename: 'js/app.js', //Name of output file
  },
  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: ["", ".js", ".jsx"],
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Render source-map file for final build
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.jsx$/, // All .js files
      loaders: ['babel-loader'], //react-hot is like browser sync and babel loads jsx and es6-7
      exclude: [nodeModulesPath],
    }],
  },
  plugins: [
    //Minify the bundle

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     //supresses warnings, usually from module minification
    //     warnings: false,
    //   },
    // }),

    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),

    new HtmlwebpackPlugin({
      filename:'./index.html',
      template: './src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin("css/[name].css")


    //Transfer Files
    // new TransferWebpackPlugin([
    //   {from: 'www'},
    // ], path.resolve(__dirname,"src")),
  ],
  //Eslint config
  eslint: {
    configFile: '.eslintrc', //Rules for eslint
  },
};
module.exports = config;
