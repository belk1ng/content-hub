import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "./assets/css/[name].[contenthash].css",
})