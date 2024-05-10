import path from "path";

import CopyPlugin from "copy-webpack-plugin";

import { paths } from "../paths";

export const copyWebpackPlugin = new CopyPlugin({
  patterns: [
    {
      from: path.resolve(paths.public, "locales"),
      to: path.resolve(paths.build, "locales"),
    },
  ],
});
