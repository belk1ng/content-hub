import type { PropsWithChildren } from "react";

export interface StoreProps extends PropsWithChildren {
  initialState?: Partial<RootState>;
}
