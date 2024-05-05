import type { FC } from "react";
import { useTranslation } from "react-i18next";

import * as classes from "./ToggleLanguage.module.scss";

import useLanguage from "@/shared/lib/i18n";
import Button from "@/shared/ui/button";

const ToggleLanguage: FC = () => {
  const { t } = useTranslation();

  const { toggleLanguage } = useLanguage();

  return (
    <Button
      className={classes.toggle}
      onClick={toggleLanguage}
      variant="action"
    >
      {t("language")}
    </Button>
  );
};

export default ToggleLanguage;
