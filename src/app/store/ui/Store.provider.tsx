import type { FC } from "react";
import { Provider } from "react-redux";

import type { StoreProps } from "./Store.props";
import { createStore } from "../config/store";

const StoreProvider: FC<StoreProps> = ({ children, initialState }) => {
  const appStore = createStore({
    initialState,
  });

  return <Provider store={appStore}>{children}</Provider>;
};

export default StoreProvider;
