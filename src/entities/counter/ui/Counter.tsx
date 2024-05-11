import type { FC } from "react";

import { counterValueSelector } from "../model/selectors/counter-value";
import { counterActions } from "../model/slice/counterSlice";

import { useAppDispatch, useAppSelector } from "@/shared/model";
import Button from "@/shared/ui/button";

const Counter: FC = () => {
  const dispatch = useAppDispatch();

  const counterValue = useAppSelector(counterValueSelector);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <section>
      <Button onClick={decrement}>-</Button>
      <h2>{counterValue}</h2>
      <Button onClick={increment}>+</Button>
    </section>
  );
};

export default Counter;
