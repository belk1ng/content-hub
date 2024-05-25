import { login } from "./login";

import { userActions } from "@/entities/user";
import { TestThunk } from "@/shared/lib/test/test-thunk";

describe("Login Service", () => {
  test("Should receive user from server and setup it to user slice", async () => {
    const data = {
      id: 1,
      username: "belk1ng",
      access_token: "access_token",
      refresh_token: "refresh_token",
    };
    const thunk = new TestThunk(login);
    thunk.http.post.mockResolvedValue({ data });

    const response = await thunk.call({
      username: "belk1ng",
      password: "12345",
    });

    expect(thunk.http.post).toHaveBeenCalledTimes(1);
    expect(response.meta.requestStatus).toBe("fulfilled");
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(data));
  });

  test("Should catch 401 error", async () => {
    const thunk = new TestThunk(login);
    thunk.http.post.mockRejectedValue({
      status: 401,
      response: {
        data: {
          message: "Auth error",
        },
      },
    });

    const response = await thunk.call({
      username: "belk1ng",
      password: "12345",
    });

    expect(thunk.http.post).toHaveBeenCalledTimes(1);
    expect(response.meta.requestStatus).toBe("rejected");
    expect(response.payload).toBe("Auth error");
  });
});
