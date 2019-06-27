const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
var hwp = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  },
  resolve: {
    alias: {
       '../../theme.config$': path.join(__dirname, "my-semantic-theme/theme.config")  
    }
 },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx"]
        }
      },
      // this handles .less translation
    {
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'less-loader']
      }),
      test: /\.less$/
    },
    // this rule handles images
    {
      test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
      use: 'file-loader?name=[name].[ext]?[hash]'
    },

    // the following 3 rules handle font extraction
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    
    {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
    test: /\.otf(\?.*)?$/,
    use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
    }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"]
  },
  plugins: [
    new hwp({ template: path.join(__dirname, "/public/index.html") }),
    // this handles the bundled .css output file
    new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
  }),
  ]
};
