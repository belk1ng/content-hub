import { createSelector } from "@reduxjs/toolkit";

import { counterSelector } from "../counter";

export const counterValueSelector = createSelector(
  counterSelector,
  (selector) => selector.value
);
