import type { PropsWithChildren } from "react";
import { MemoryRouterProps } from "react-router-dom";

export interface TestProvidersProps extends PropsWithChildren {
  initialState?: Partial<RootState>;
  routerProps?: MemoryRouterProps;
}
