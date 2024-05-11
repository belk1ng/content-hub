import type { FC } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import type { TestProvidersProps } from "./TestProviders.props";

import StoreProvider from "@/app/store";
import i18nTests from "@/shared/config/i18n/i18n.tests";

const TestProviders: FC<TestProvidersProps> = ({
  routerProps,
  initialState,
  children,
}) => {
  return (
    <StoreProvider initialState={initialState}>
      <I18nextProvider i18n={i18nTests}>
        <MemoryRouter {...routerProps}>{children}</MemoryRouter>
      </I18nextProvider>
    </StoreProvider>
  );
};

export default TestProviders;
