import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"

export default (env: {}, argv: {mode: string}) => {
  const dev = argv.mode !== "production"

  return {
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ],
    },
    output: {
      filename: "[name]_[contenthash].js",
      chunkFilename: "[name]_[contenthash].js",
      path: path.resolve("out"),
    },
    devtool: dev ? "eval-source-map" : undefined,
    plugins: [
      new CleanWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "nhooyr.io",
      }),
      new CopyPlugin([{from: "public/", to: "."}]),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      historyApiFallback: true,
    },
  }
}
