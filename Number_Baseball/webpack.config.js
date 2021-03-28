const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "NumberBaseball-setting",
  mode: "development",
  devtool: "eval", // hidden-source-map (production)
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    app: ["./client"]
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: [" > 5% in CA"]
                },
                debug: true
              }
            ],
            "@babel/preset-react"
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel"
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/" // app.use('/dist', express.static(__dirname, 'dist')), 가상경로
  },
  // entry -> module -> output
  devServer: {
    publicPath: "/dist/",
    hot: true
  }
};
