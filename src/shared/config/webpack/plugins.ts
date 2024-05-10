import type { WebpackPluginInstance } from "webpack";

import {
  htmlWebpackPlugin,
  progressPlugin,
  miniCssExtractPlugin,
  definePlugin,
  hotModuleReplacement,
  bundleAnalyzerPlugin,
  copyWebpackPlugin,
} from "./_plugins";

export const plugins: WebpackPluginInstance[] = [
  htmlWebpackPlugin,
  progressPlugin,
  miniCssExtractPlugin,
  definePlugin,
  hotModuleReplacement,
  bundleAnalyzerPlugin,
  copyWebpackPlugin,
];
