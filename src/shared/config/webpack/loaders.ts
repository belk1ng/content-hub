import type { RuleSetRule } from "webpack";

import { typeScript, styles, files, svg } from "./_modules";

export const loaders: RuleSetRule[] = [typeScript, styles, files, svg];
