import { userActions, userReducer } from "./userSlice";
import type { UserSchema } from "../types/userSchema";

import { LS_USER } from "@/shared/constants/localStorage";

describe("User slice", () => {
  afterEach(() => {
    localStorage.clear();
  });

  const user = {
    id: 1,
    username: "belk1ng",
    access_token: "123",
    refresh_token: "123",
  };

  const state: UserSchema = {
    user: null,
  };

  test("Should get user from LS", () => {
    localStorage.setItem(LS_USER, JSON.stringify(user));

    const updatedState = userReducer(state, userActions.initAuth());

    expect(updatedState.user).toEqual(user);
  });

  test("Should set user", () => {
    const updatedState = userReducer(state, userActions.setUser(user));

    expect(updatedState.user).toEqual(user);
    const storageUser = JSON.parse(localStorage.getItem(LS_USER));
    expect(storageUser).toEqual(user);
  });

  test("Should logout", () => {
    userReducer(state, userActions.setUser(user));

    const updatedState = userReducer(state, userActions.logout());

    expect(updatedState.user).toBeNull();
    expect(localStorage.getItem(LS_USER)).toBeNull();
  });
});
