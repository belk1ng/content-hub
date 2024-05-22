import { combineReducers } from "@reduxjs/toolkit";

import { counterReducer } from "@/entities/counter";
import { userReducer } from "@/entities/user";
import { loginReducer } from "@/features/login";

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  login: loginReducer,
});
