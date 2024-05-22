import { loginReducer, loginActions } from "./loginSlice";
import type { LoginSchema } from "../types/loginSchema";

describe("Login slice", () => {
  const state: LoginSchema = {
    username: "",
    password: "",
    error: "",
    isLoading: false,
  };

  test("Should update username", () => {
    const updatedState = loginReducer(
      state,
      loginActions.setUsername("belk1ng")
    );

    expect(updatedState.username).toBe("belk1ng");
  });

  test("Should update password", () => {
    const updatedState = loginReducer(
      state,
      loginActions.setPassword("password")
    );

    expect(updatedState.password).toBe("password");
  });

  test("Should reset login state", () => {
    const updatedState = loginReducer(
      {
        username: "belk1ng",
        password: "password",
        error: "Error here",
        isLoading: false,
      },
      loginActions.resetState()
    );

    expect(updatedState).toEqual({
      username: "",
      password: "",
      error: "",
      isLoading: false,
    });
  });
});
