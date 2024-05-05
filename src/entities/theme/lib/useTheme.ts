import { useContext } from "react";

import { ThemeContext } from "../config/Theme.context";

const useTheme = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};

export default useTheme;
