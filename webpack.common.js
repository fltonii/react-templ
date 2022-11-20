const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    assetModuleFilename: "[name].[hash][ext]",
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.{svg|png|jpg}$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/i,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".css", ".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Magik",
      template: "src/index.html",
      minify: "auto",
    }),
  ],
};
