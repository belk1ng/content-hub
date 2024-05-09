import "@testing-library/jest-dom";

import { cleanup } from "@testing-library/react";

import i18nTests from "@/shared/config/i18n/i18n.tests";

afterEach(() => {
  cleanup();
});

afterEach(async () => {
  await i18nTests.changeLanguage("ru");
});
