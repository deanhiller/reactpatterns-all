const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    static: '../reactpatterns/src/dist/react',
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../reactpatterns/src/dist/react"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.tsx?$/, use: "ts-loader" },
    ],
  },
  optimization: {
    nodeEnv: 'development',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.html', '.scss'],
    modules: ['node_modules'],
  },
};
