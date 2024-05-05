import path from "path";

import type { Configuration } from "webpack";

import { loaders, plugins, resolve, paths } from "./index";

export const common: Configuration = {
  entry: path.resolve(paths.src, "index.tsx"),
  module: {
    rules: loaders,
  },
  resolve,
  output: {
    filename: "[name].[contenthash].js",
    path: paths.build,
    clean: true,
  },
  plugins,
};
