const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const baseConfig = require("./webpack.base");

const joinRoot = path.join.bind(path, __dirname, "..");

module.exports = merge(baseConfig, {
  mode: "production",
  entry: [joinRoot("src/plugins/overscroll/index.ts")],
  output: {
    path: joinRoot("dist/plugins/"),
    filename: "overscroll.js",
    library: "OverscrollPlugin",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
  },
  externals: {
    "smooth-scrollbar-deluxe": {
      commonjs: "smooth-scrollbar-deluxe",
      commonjs2: "smooth-scrollbar-deluxe",
      amd: "smooth-scrollbar-deluxe",
      root: "Scrollbar",
    },
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
});
