import { createSelector } from "@reduxjs/toolkit";

import { loginSelector } from "@/features/login/model";

export const loginLoadingSelector = createSelector(
  loginSelector,
  (selector) => selector?.isLoading ?? false
);
