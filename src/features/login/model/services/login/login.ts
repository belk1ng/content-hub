import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { userActions } from "@/entities/user";
import type { User } from "@/entities/user";
import i18nProduction from "@/shared/config/i18n/i18n.production";

interface LoginSubmitValues {
  username: string;
  password: string;
}

export const login = createAsyncThunk<
  User,
  LoginSubmitValues,
  {
    rejectValue: string;
  }
>(
  "login/loginSubmit",
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    try {
      // TODO: Create an axios instance
      const response = await axios.post<User>(
        "http://localhost:8000/auth/login",
        {
          username,
          password,
        }
      );

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
