import type { Configuration } from "webpack";
import { common, devServer, config as env } from "./config/webpack";

const isDevMode = env.IS_DEV

const config: Configuration = {
    mode: isDevMode ? "development" : "production",
    devServer: isDevMode ? devServer : undefined,
    devtool: isDevMode ? 'inline-source-map' : undefined,
    ...common
}

export default config;
