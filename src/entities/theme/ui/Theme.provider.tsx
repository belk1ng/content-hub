import type { FC, PropsWithChildren } from "react";
import { useState, useMemo, useEffect } from "react";

import {
  Theme,
  ThemeContext,
  LS_THEME_KEY,
  ThemeContextValues,
} from "../config/Theme.context";

interface ThemeProviderProps extends PropsWithChildren {
  value?: Partial<ThemeContextValues>;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  const defaultTheme =
    (localStorage.getItem(LS_THEME_KEY) as Theme) ??
    (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? Theme.DARK
      : Theme.LIGHT);

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    localStorage.setItem(LS_THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  const providerValue = useMemo(
    () =>
      Object.assign(
        {
          theme,
          setTheme,
          toggleTheme,
        },
        value
      ),
    [theme, value]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};
