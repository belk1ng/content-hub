import type { WebpackPluginInstance } from "webpack";

import {
  htmlWebpackPlugin,
  progressPlugin,
  miniCssExtractPlugin,
  definePlugin,
  dotenvPlugin,
  hotModuleReplacement,
  bundleAnalyzerPlugin,
  copyWebpackPlugin,
} from "./_plugins";
import { config } from "./config";

export const plugins: WebpackPluginInstance[] = [
  htmlWebpackPlugin,
  progressPlugin,
  miniCssExtractPlugin,
  definePlugin,
  dotenvPlugin,
  config.IS_DEV ? hotModuleReplacement : undefined,
  config.IS_DEV ? bundleAnalyzerPlugin : undefined,
  copyWebpackPlugin,
];
