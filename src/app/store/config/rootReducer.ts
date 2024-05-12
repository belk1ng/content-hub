import { combineReducers } from "@reduxjs/toolkit";

import { counterReducer } from "@/entities/counter";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
