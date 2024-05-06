import type { FC } from "react";
import { useTranslation } from "react-i18next";

import * as classes from "./UnexpectedError.module.scss";

import ReloadPage from "@/features/reload-page";

const UnexpectedError: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.error}>
      <h2 className={classes.error__title}>{t("errors.global")}</h2>
      <ReloadPage />
    </section>
  );
};

export default UnexpectedError;
