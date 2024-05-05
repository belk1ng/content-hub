import type { FC } from "react";

import * as classes from "./ToggleTheme.module.scss";

import { useTheme } from "@/entities/theme";
import ThemeIcon from "@/shared/assets/icons/theme.svg";
import Button from "@/shared/ui/button";

const ToggleTheme: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button className={classes.toggle} onClick={toggleTheme} variant="action">
      <ThemeIcon />
    </Button>
  );
};

export default ToggleTheme;
