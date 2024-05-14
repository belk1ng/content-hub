import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__,
});

export const createStore = (initialState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};
