import { createSelector } from "@reduxjs/toolkit";

import { profileDataSelector } from "../profileData";

export const profileFirstNameSelector = createSelector(
  profileDataSelector,
  (selector) => selector?.firstName ?? ""
);
