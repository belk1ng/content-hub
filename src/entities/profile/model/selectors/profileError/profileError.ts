import { createSelector } from "@reduxjs/toolkit";

import { profileSelector } from "../profile";

export const profileErrorSelector = createSelector(
  profileSelector,
  (selector) => selector?.error
);
