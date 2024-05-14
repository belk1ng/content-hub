import type { FC } from "react";
import { useTranslation } from "react-i18next";

import * as classes from "./LoginForm.module.scss";

import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";

const LoginForm: FC = () => {
  const { t } = useTranslation();

  return (
    <form className={classes.form}>
      <Input
        label={t("login.labels.username")}
        name="username"
        placeholder={t("login.placeholders.username")}
        type="text"
      />
      <Input
        label={t("login.labels.password")}
        name="password"
        placeholder={t("login.placeholders.password")}
        type="password"
      />
      <Button type="submit">{t("login.action")}</Button>
    </form>
  );
};

export default LoginForm;
