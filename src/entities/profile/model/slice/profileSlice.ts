import { createSlice } from "@reduxjs/toolkit";

import { ProfileSchema } from "../types/profileSchema";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
