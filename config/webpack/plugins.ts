import type { WebpackPluginInstance } from "webpack";
import { htmlWebpackPlugin, progressPlugin, miniCssExtractPlugin } from "./_plugins";

export const plugins: WebpackPluginInstance[] = [
    htmlWebpackPlugin,
    progressPlugin,
    miniCssExtractPlugin
]
