const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
// entry specifying the file where the bundling process starts
  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],
// output its bundle into a build/app.bundle.js file
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },
// option tells Webpack to locate files with specific extensions
// we can later import files without explicitly listing an extension in their import statement
  resolve: {
    extensions: ['.js', '.jsx']
  },

// Webpack, use this babel-loader tool to transpile our JSX into ES5 in this React project. 
// You can find the JSX in files with a .jsx extension. 
// But ignore .jsx files in the nodemodules directory.
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "es2015",
            "react"
          ]
        }
      },
    ],
  }
};