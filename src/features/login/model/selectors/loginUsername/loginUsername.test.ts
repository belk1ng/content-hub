import { loginUsernameSelector } from "./loginUsername";

describe("LoginError selector", () => {
  test("Should return an error message", () => {
    const state: DeepPartial<RootState> = {
      login: {
        username: "user-username",
      },
    };

    expect(loginUsernameSelector(state as RootState)).toBe("user-username");
  });
});
