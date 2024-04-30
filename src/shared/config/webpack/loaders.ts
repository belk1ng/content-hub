import { typeScript, styles } from "./_modules";
import type { RuleSetRule } from "webpack";

export const loaders: RuleSetRule[] = [
    typeScript,
    styles
]
