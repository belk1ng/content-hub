import type { FC } from "react";
import { Provider } from "react-redux";

import { StoreProps } from "./Store.props";
import { store, createStore } from "../config/store";

const StoreProvider: FC<StoreProps> = ({ children, initialState }) => {
  const appStore = initialState ? createStore(initialState) : store;

  return <Provider store={appStore}>{children}</Provider>;
};

export default StoreProvider;
