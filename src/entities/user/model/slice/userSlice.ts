import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types/userSchema";
import type { UserSchema } from "../types/userSchema";

import { LS_USER } from "@/shared/constants/localStorage";

const initialState: UserSchema = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initAuth: (state) => {
      const user = localStorage.getItem(LS_USER);
      if (user) {
        state.user = JSON.parse(user);
      }
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem(LS_USER, JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(LS_USER);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
