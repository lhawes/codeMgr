var path = require('path');
var webpack = require('webpack');

//common configuration for the two builds
var config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015'], ['react']]
        }
      }
    ]
  },
  stats: {
    colors: true
   },
  devtool: 'source-map'
};

var firstApp = Object.assign({}, config, {
    name: "react",
    entry: "./build/reactapp/app.js",
    output: {
       path: path.resolve(__dirname, './public/javascripts/reactapp/'),
       filename: "react.bundle.js"
    },
});
// var secondApp = Object.assign({}, config, {
//     name: "assessment",
//     entry: "./build/assessment/app.js",
//     output: {
//        path: path.resolve(__dirname, './public/assessment/compiled/'),
//        filename: "assessment.bundle.js"
//     },
// });

// Return Array of Configurations

// module.exports = [firstApp, secondApp];
module.exports = firstApp;
// module.exports = secondApp;
