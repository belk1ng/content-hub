import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "@/entities/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: __IS_DEV__,
});

export const createStore = (initialState?: Partial<RootState>) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
};
