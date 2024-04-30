import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {paths} from "../paths";

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(paths.public, "index.html")
})