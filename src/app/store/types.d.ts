import type {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
} from "@reduxjs/toolkit";

import { store } from "./config/store";

import type { CounterSchema } from "@/entities/counter";
import type { UserSchema } from "@/entities/user";
import type { LoginSchema } from "@/features/login/model";

declare global {
  interface RootState {
    counter: CounterSchema;
    user: UserSchema;
    login?: LoginSchema;
  }

  type RootStateKey = keyof RootState;

  interface ReducerManager {
    getReducerMap: () => ReducersMapObject<RootState>;
    reduce: (state: RootState, action: UnknownAction) => RootState;
    add: (key: RootStateKey, reducer: Reducer) => void;
    remove: (key: RootStateKey) => void;
  }

  interface StoreWithReducerManager extends EnhancedStore<RootState> {
    reducerManager: ReducerManager;
  }

  type AppDispatch = typeof store.dispatch;
}
