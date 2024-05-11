import type { FC, PropsWithChildren } from "react";
import { StrictMode } from "react";

import StoreProvider from "../store";

import { ThemeProvider } from "@/entities/theme";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StrictMode>
      <StoreProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </StoreProvider>
    </StrictMode>
  );
};

export default Providers;
