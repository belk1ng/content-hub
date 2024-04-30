import type {ResolveOptions} from "webpack"
import {paths} from "./paths";

export const resolve: ResolveOptions = {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
        "@": paths.src,
    }
}