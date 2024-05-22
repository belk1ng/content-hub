import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { login } from "../services/login";
import { LoginSchema } from "../types/loginSchema";

const initialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetState: (state) => {
      state.username = "";
      state.password = "";
      state.error = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
