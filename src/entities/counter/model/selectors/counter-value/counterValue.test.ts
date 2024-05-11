import { counterValueSelector } from "./counterValue";

describe("CounterValue selector", () => {
  test("Should return counter value state", () => {
    const state: Partial<RootState> = {
      counter: {
        value: 10,
      },
    };

    expect(counterValueSelector(state as RootState)).toBe(10);
  });
});
