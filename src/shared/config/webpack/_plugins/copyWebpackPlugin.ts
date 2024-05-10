import CopyPlugin from "copy-webpack-plugin";
import { paths } from "../paths";
import path from "path";

export const copyWebpackPlugin = new CopyPlugin({
  patterns: [
    {
      from: path.resolve(paths.public, "locales"),
      to: path.resolve(paths.build, "locales"),
    },
  ],
});
