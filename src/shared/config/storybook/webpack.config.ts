import type { Configuration } from "webpack";

import { loaders, resolve } from "../webpack";

const config: Configuration = {
  module: {
    rules: loaders,
  },
  resolve: resolve,
};

export default config;
