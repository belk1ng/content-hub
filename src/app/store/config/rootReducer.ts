import { combineReducers } from "@reduxjs/toolkit";

import { counterReducer } from "@/entities/counter";
import { userReducer } from "@/entities/user";

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});
