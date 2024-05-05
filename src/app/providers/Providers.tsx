import type { FC, PropsWithChildren } from "react";
import { StrictMode } from "react";

import { ThemeProvider } from "@/entities/theme";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StrictMode>
      <ThemeProvider>{children}</ThemeProvider>
    </StrictMode>
  );
};

export default Providers;
