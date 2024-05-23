import axios from "axios";

import { login } from "./login";

import { userActions } from "@/entities/user";
import { TestThunk } from "@/shared/lib/test/test-thunk";

describe("Login Service", () => {
  const mockedAxios = jest.spyOn(axios, "post");

  afterEach(() => {
    mockedAxios.mockReset();
  });

  test("Should receive user from server and setup it to user slice", async () => {
    const data = {
      id: 1,
      username: "belk1ng",
      access_token: "access_token",
      refresh_token: "refresh_token",
    };
    mockedAxios.mockResolvedValue({
      data,
    });

    const thunk = new TestThunk(login);
    const response = await thunk.call({
      username: "belk1ng",
      password: "12345",
    });

    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(response.meta.requestStatus).toBe("fulfilled");
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(data));
  });

  test("Should catch 401 error", async () => {
    mockedAxios.mockRejectedValue({
      status: 401,
      response: {
        data: {
          message: "Auth error",
        },
      },
    });

    const thunk = new TestThunk(login);
    const response = await thunk.call({
      username: "belk1ng",
      password: "12345",
    });

    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(response.meta.requestStatus).toBe("rejected");
    expect(response.payload).toBe("Auth error");
  });
});
