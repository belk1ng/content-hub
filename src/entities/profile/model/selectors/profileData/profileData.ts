import { createSelector } from "@reduxjs/toolkit";

import { profileSelector } from "../profile";

export const profileDataSelector = createSelector(
  profileSelector,
  (selector) => selector?.data
);
