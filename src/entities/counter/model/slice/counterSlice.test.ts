import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("Counter slice", () => {
  test("Should increment counter value", () => {
    const state: CounterSchema = {
      value: 0,
    };

    const updatedState = counterReducer(state, counterActions.increment());

    expect(updatedState).toEqual({ value: 1 });
  });

  test("Should decrement counter value", () => {
    const state: CounterSchema = {
      value: 0,
    };

    const updatedState = counterReducer(state, counterActions.decrement());

    expect(updatedState).toEqual({ value: -1 });
  });

  test("Should increment counter value with empty state", () => {
    const updatedState = counterReducer(undefined, counterActions.increment());

    expect(updatedState).toEqual({ value: 1 });
  });
});
