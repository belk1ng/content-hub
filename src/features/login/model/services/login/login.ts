import { createAsyncThunk } from "@reduxjs/toolkit";

import type { User } from "@/entities/user";
import { userActions } from "@/entities/user";
import i18nProduction from "@/shared/config/i18n/i18n.production";

interface LoginSubmitValues {
  username: string;
  password: string;
}

export const login = createAsyncThunk<User, LoginSubmitValues, ThunkConfig>(
  "login/loginSubmit",
  async ({ username, password }, { rejectWithValue, dispatch, extra }) => {
    try {
      const { http } = extra;
      const response = await http.post<User>("/auth/login", {
        username,
        password,
      });

      if (!response.data) {
        throw new Error(i18nProduction.t("errors.api"));
      }

      dispatch(userActions.setUser(response.data));

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
