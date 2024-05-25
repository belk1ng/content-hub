import type { Reducer } from "@reduxjs/toolkit";
import type { PropsWithChildren } from "react";

type ModuleLoaderReducers = {
  [key in RootStateKey]?: Reducer;
};

export interface ModuleLoaderProps extends PropsWithChildren {
  reducers: ModuleLoaderReducers;
  clearOnUnmount?: boolean;
}
