import type { FC } from "react";

import * as classes from "./Header.module.scss";

import ToggleLanguage from "@/features/toggle-language";
import ToggleTheme from "@/features/toggle-theme";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <ToggleLanguage />
      <ToggleTheme />
    </header>
  );
};

export default Header;
