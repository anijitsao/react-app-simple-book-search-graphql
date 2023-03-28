const path = require("path");
console.log("Path in webpack config file", __dirname);

module.exports = {
  // Context is most important when running webpack from package.json outside ./public
  context: path.resolve(__dirname, "./src"),

  devtool: "source-map",
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    assetModuleFilename: "images/[name][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico|png|svg|jpeg|jpg)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
    ],
  },
};
