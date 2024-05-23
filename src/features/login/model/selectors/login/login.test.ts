import { loginSelector } from "./login";

describe("LoginError selector", () => {
  test("Should return an error message", () => {
    const login = {
      username: "belk1ng",
      password: "213123123",
      error: "Error message",
      isLoading: false,
    };
    const state: DeepPartial<RootState> = {
      login,
    };

    expect(loginSelector(state as RootState)).toEqual(login);
  });
});
