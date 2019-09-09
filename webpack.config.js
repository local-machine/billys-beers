const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // react-hot-loader/patch activates hot module replacement
  // webpack-dev-server/client?http://localhost:8080' connects to the necessary endpoint
  // webpack/hot/only-dev-server instructs Webpack to bundle code
  // entry specifying the file where the bundling process starts
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    resolve(__dirname, "src", "index.jsx")
  ],

  // output its bundle into a build/app.bundle.js file
  output: {
    filename: "app.bundle.js",
    path: resolve(__dirname, "build"),
    publicPath: "/"
  },

  // option tells Webpack to locate files with specific extensions
  // we can later import files without explicitly listing an extension in their import statement
  resolve: {
    extensions: [".js", ".jsx"]
  },

  // #source-map option tells Webpack to reference line numbers from our individual component files,
  // not the big app.bundle.js file
  devtool: "#source-map",

  // hot: true enables HMR on the local server.
  // contentBase points to the source code it will serve in the browser.
  // publicPath should always match the publicPath option in output
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "build"),
    publicPath: "/"
  },

  // Webpack, use this babel-loader tool to transpile our JSX into ES5 in this React project.
  // You can find the JSX in files with a .jsx extension.
  // But ignore .jsx files in the nodemodules directory.
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
          presets: [["es2015", { modules: false }], "react"],
          plugins: [
            "react-hot-loader/babel",
            "styled-jsx/babel"
          ]
        }
      }
    ]
  },

  // enables HMR globally
  // prints HMR status updates to the console
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "template.ejs",
      appMountId: "react-app-root",
      title: "Billy's Beers",
      filename: resolve(__dirname, "build", "index.html")
    })
  ]
};
