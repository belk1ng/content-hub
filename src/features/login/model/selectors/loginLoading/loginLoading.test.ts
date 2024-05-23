import { loginLoadingSelector } from "./loginLoading";

describe("LoginError selector", () => {
  test("Should return an error message", () => {
    const state: DeepPartial<RootState> = {
      login: {
        isLoading: true,
      },
    };

    expect(loginLoadingSelector(state as RootState)).toBeTruthy();
  });
});
