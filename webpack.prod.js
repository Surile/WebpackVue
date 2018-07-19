const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJspugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  plugins: [
    new UglifyJspugin({
      sourceMap: true
    })
  ],
  mode: "production"
});
