const path = require("path"); // using path from Node

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // Read product => production
  devtool: "eval", // fast
  resolve: {
    extensions: [".js", ".jsx"]
  }, // Webpack will put extensions for us

  entry: {
    app: ["./client"]
    // Since client.jsx will require WordRelay, we do not need to call wordrelay
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, // 정규표현식으로 js와 jsx 파일에 rule 적용,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"), // __dirname = current folder, dist folder inside of __dirname
    filename: "app.js"
  } // entry 받고 modules 적용해서 output에 빼도록 한다.
};
