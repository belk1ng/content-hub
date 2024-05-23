import { loginPasswordSelector } from "./loginPassword";

describe("LoginError selector", () => {
  test("Should return an error message", () => {
    const state: DeepPartial<RootState> = {
      login: {
        password: "top-secret",
      },
    };

    expect(loginPasswordSelector(state as RootState)).toBe("top-secret");
  });
});
