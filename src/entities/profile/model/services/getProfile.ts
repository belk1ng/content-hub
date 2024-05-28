import { createAsyncThunk } from "@reduxjs/toolkit";

import type { Profile } from "../types/profileSchema";

import i18nProduction from "@/shared/config/i18n/i18n.production";

export const getProfile = createAsyncThunk<Profile, void, ThunkConfig>(
  "profile/getProfile",
  async (_, { rejectWithValue, extra }) => {
    try {
      const { http } = extra;
      const response = await http.get<Profile>("/profile");

      if (!response.data) {
        throw new Error(i18nProduction.t("errors.api"));
      }

      return response.data;
    } catch (error) {
      console.log(error);
      const message =
        error.response.data.message ??
        error.message ??
        i18nProduction.t("errors.api");
      return rejectWithValue(message);
    }
  }
);
