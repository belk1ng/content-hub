export { counterReducer } from "./model/slice/counterSlice";
export { default as Counter } from "./ui/Counter";
export type { CounterSchema } from "./model/types/Counter.schema";
export { counterSelector } from "./model/selectors/counter";
export { counterValueSelector } from "./model/selectors/counter-value";