import { act, renderHook } from "@testing-library/react";
import type { PropsWithChildren } from "react";

import useTheme from "./useTheme";
import { LS_THEME_KEY, Theme } from "../config/Theme.context";
import { ThemeProvider } from "../ui/Theme.provider";

describe("useTheme", () => {
  afterEach(() => {
    localStorage.clear();
  });

  const wrapper = ({ children }: PropsWithChildren) => {
    return <ThemeProvider>{children}</ThemeProvider>;
  };

  test("Should toggleTheme", () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe(Theme.DARK);
    expect(localStorage.getItem(LS_THEME_KEY)).toBe(Theme.DARK);
  });

  test("Should setTheme", () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.setTheme(Theme.DARK);
    });

    expect(result.current.theme).toBe(Theme.DARK);
    expect(localStorage.getItem(LS_THEME_KEY)).toBe(Theme.DARK);
  });
});
