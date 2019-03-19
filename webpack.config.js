var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: {
          loader: "url-loader"
        }
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
