import { createSelector } from "@reduxjs/toolkit";

import { profileDataSelector } from "../profileData";

export const profileLastNameSelector = createSelector(
  profileDataSelector,
  (selector) => selector?.lastName ?? ""
);
