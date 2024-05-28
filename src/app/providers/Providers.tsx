import type { FC, PropsWithChildren } from "react";

import StoreProvider from "../store";

import { ThemeProvider } from "@/entities/theme";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
