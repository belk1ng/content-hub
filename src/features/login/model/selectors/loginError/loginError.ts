import { createSelector } from "@reduxjs/toolkit";

import { loginSelector } from "../login";

export const loginErrorSelector = createSelector(
  loginSelector,
  (selector) => selector?.error ?? ""
);
