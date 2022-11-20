const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { main: "./src/index.js" },

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
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Magik",
      template: "src/index.html",
      minify: "auto",
    }),
  ],
};
