import webpack from "webpack";
import {config} from "../config";

export const definePlugin = new webpack.DefinePlugin({
    __IS_DEV__: config.IS_DEV
})
