import { createSelector } from "@reduxjs/toolkit";

import { loginSelector } from "@/features/login/model";

export const loginUsernameSelector = createSelector(
  loginSelector,
  (selector) => selector.username
);
