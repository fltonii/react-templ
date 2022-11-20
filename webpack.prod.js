const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const TerserJs = require("terser-webpack-plugin");

module.exports = merge(common, {
  output: {
    filename: "[name]-[contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },

  optimization: {
    minimizer: [new TerserJs()],
  },

  mode: "production",
});
