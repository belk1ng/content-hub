import type { FC, SyntheticEvent } from "react";
import { useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import * as classes from "./LoginForm.module.scss";
import {
  loginActions,
  loginPasswordSelector,
  loginUsernameSelector,
  loginErrorSelector,
  loginLoadingSelector,
  login,
  loginReducer,
} from "../../model";

import ModuleLoader from "@/shared/lib/module-loader";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(loginActions.resetState());
    };
  }, [dispatch]);

  const { t } = useTranslation();

  const reducers = useMemo(
    () => ({
      login: loginReducer,
    }),
    []
  );

  const error = useAppSelector(loginErrorSelector);

  const isLoading = useAppSelector(loginLoadingSelector);

  const username = useAppSelector(loginUsernameSelector);

  const password = useAppSelector(loginPasswordSelector);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      login({
        username,
        password,
      })
    );
  };

  return (
    <ModuleLoader clearOnUnmount reducers={reducers}>
      <form className={classes.form} onSubmit={onSubmit}>
        {error && <p className={classes.form__error}>{error}</p>}
        <Input
          label={t("login.labels.username")}
          name="username"
          onChange={handleChangeUsername}
          placeholder={t("login.placeholders.username")}
          type="text"
          value={username}
        />
        <Input
          label={t("login.labels.password")}
          name="password"
          onChange={handleChangePassword}
          placeholder={t("login.placeholders.password")}
          type="password"
          value={password}
        />
        <Button disabled={isLoading} type="submit">
          {t("login.action")}
        </Button>
      </form>
    </ModuleLoader>
  );
};

export default LoginForm;
