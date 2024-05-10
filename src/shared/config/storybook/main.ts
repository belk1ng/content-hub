import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Configuration } from "webpack";
import webpack from "webpack";

import webpackConfiguration from "./webpack.config";

import { miniCssExtractPlugin } from "@/shared/config/webpack/_plugins";

const config: StorybookConfig = {
  stories: ["../../../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../../../../public"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: Configuration) => {
    config.plugins.push(new webpack.DefinePlugin({ __IS_DEV__: true }));
    config.plugins.push(miniCssExtractPlugin);

    return {
      ...config,
      ...webpackConfiguration,
    };
  },
};
export default config;
