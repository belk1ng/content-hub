import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { config } from "../config";

export const styles = {
    test: /\.scss$/,
    use: [
        config.IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resourcePath: string) => Boolean(resourcePath.includes(".module.")),
                    localIdentName: config.IS_DEV
                        ? "[path][name]__[local]--[hash:base64:5]"
                        : "[hash:base64:8]",
                },
            },
        },
        "sass-loader",
    ],
}