import type { Reducer } from "@reduxjs/toolkit";
import type { PropsWithChildren } from "react";

export interface ModuleLoaderProps extends PropsWithChildren {
  reducerName: RootStateKey;
  reducer: Reducer;
}
