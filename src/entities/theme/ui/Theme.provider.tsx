import type { FC, PropsWithChildren } from "react";
import { useState, useMemo, useEffect } from "react";

import { Theme, ThemeContext, LS_THEME_KEY } from "../config/Theme.context";

const defaultTheme =
  (localStorage.getItem(LS_THEME_KEY) as Theme) ??
  (window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? Theme.DARK
    : Theme.LIGHT);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    localStorage.setItem(LS_THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  const providerValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};
