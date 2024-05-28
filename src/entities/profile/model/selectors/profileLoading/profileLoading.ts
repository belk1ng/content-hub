import { createSelector } from "@reduxjs/toolkit";

import { profileSelector } from "../profile";

export const profileLoadingSelector = createSelector(
  profileSelector,
  (selector) => selector?.isLoading
);
