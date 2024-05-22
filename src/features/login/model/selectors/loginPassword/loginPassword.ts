import { createSelector } from "@reduxjs/toolkit";

import { loginSelector } from "@/features/login/model";

export const loginPasswordSelector = createSelector(
  loginSelector,
  (selector) => selector.password
);
