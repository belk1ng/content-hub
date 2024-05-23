import { loginErrorSelector } from "./loginError";

describe("LoginError selector", () => {
  test("Should return an error message", () => {
    const state: DeepPartial<RootState> = {
      login: {
        error: "Error message",
      },
    };

    expect(loginErrorSelector(state as RootState)).toBe("Error message");
  });
});
