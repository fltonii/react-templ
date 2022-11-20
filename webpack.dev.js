const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devtool: "inline-source-map",
  mode: "development",
});
