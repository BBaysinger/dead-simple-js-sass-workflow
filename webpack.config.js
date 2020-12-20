const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: `./src/index.js`,
  },
  target: "web",
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].min.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
};
