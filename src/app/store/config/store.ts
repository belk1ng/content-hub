import { configureStore } from "@reduxjs/toolkit";

import { createReducerManager } from "@/app/store/config/reducerManager";
import { counterReducer } from "@/entities/counter";
import { userReducer } from "@/entities/user";

export const createStore = (initialState?: Partial<RootState>) => {
  const staticReducers = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(staticReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });

  // @ts-expect-error Need to extend default store type
  store.reducerManager = reducerManager;

  return store;
};

export const store = createStore();
