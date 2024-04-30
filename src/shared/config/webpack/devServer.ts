import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { config } from "./config";

export const devServer: DevServerConfiguration = {
    port: config.PORT,
    open: false,
    historyApiFallback: true,
};