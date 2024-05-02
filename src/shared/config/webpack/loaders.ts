import {typeScript, styles, files, svg} from "./_modules";
import type {RuleSetRule} from "webpack";

export const loaders: RuleSetRule[] = [
    typeScript, styles, files, svg
]
