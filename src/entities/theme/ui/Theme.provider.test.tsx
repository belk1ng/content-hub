import { render } from "@testing-library/react";

import { ThemeProvider } from "./Theme.provider";
import { LS_THEME_KEY, Theme } from "../config/Theme.context";

describe("ThemeProvider", () => {
  afterEach(() => {
    localStorage.clear();
    jest.resetAllMocks();
  });

  test("Should set localStorage value", () => {
    render(<ThemeProvider />);

    expect(localStorage.getItem(LS_THEME_KEY)).toBe(Theme.LIGHT);
  });

  test("Should set dark mode as default my media query", () => {
    window.matchMedia = jest
      .fn()
      .mockImplementationOnce(() => ({ matches: true }));

    render(<ThemeProvider />);

    expect(localStorage.getItem(LS_THEME_KEY)).toBe(Theme.DARK);
  });
});
