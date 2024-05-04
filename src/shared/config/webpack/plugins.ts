import type {WebpackPluginInstance} from "webpack";
import {htmlWebpackPlugin, progressPlugin, miniCssExtractPlugin, definePlugin} from "./_plugins";

export const plugins: WebpackPluginInstance[] = [
    htmlWebpackPlugin,
    progressPlugin,
    miniCssExtractPlugin,
    definePlugin
]
