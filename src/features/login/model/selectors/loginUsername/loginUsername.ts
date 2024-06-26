import { createSelector } from "@reduxjs/toolkit";

import { loginSelector } from "../login";

export const loginUsernameSelector = createSelector(
  loginSelector,
  (selector) => selector?.username ?? ""
);
