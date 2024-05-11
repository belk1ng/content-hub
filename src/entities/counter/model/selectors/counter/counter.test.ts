import { counterSelector } from "./counter";

describe("Counter selector", () => {
  test("Should return counter state", () => {
    const state: Partial<RootState> = {
      counter: {
        value: 10,
      },
    };

    expect(counterSelector(state as RootState)).toEqual({ value: 10 });
  });
});
