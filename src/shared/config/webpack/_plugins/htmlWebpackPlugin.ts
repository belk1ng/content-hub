import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";

import { paths } from "../paths";

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(paths.public, "index.html"),
});
