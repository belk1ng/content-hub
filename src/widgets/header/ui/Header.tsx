import type { FC } from "react";
import { memo } from "react";

import * as classes from "./Header.module.scss";

import { userActions, userSelector } from "@/entities/user";
import LoginButton from "@/features/login";
import ToggleLanguage from "@/features/toggle-language";
import ToggleTheme from "@/features/toggle-theme";
import { useAppDispatch, useAppSelector } from "@/shared/model";

const Header: FC = () => {
  const user = useAppSelector(userSelector);

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <header className={classes.header}>
      <ToggleLanguage />
      <ToggleTheme />
      {user ? <p onClick={onLogout}>{user.username}</p> : <LoginButton />}
    </header>
  );
};

export default memo(Header);
