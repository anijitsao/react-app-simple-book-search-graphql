module.exports = {
  devtool: "source-map",
  output: {
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
