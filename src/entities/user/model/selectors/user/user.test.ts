import { userSelector } from "@/entities/user";

describe("User selector", () => {
  test("Should return user state", () => {
    const state: Partial<RootState> = {
      user: {
        user: {
          id: 1,
          username: "belk1ng",
          access_token: "token",
          refresh_token: "token",
        },
      },
    };

    expect(userSelector(state as RootState)).toEqual({
      id: 1,
      username: "belk1ng",
      access_token: "token",
      refresh_token: "token",
    });
  });
});
