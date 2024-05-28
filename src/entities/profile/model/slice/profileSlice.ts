import { createSlice } from "@reduxjs/toolkit";

import { getProfile } from "../services";
import type { ProfileSchema } from "../types/profileSchema";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
