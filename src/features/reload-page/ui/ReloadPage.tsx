import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Button from "@/shared/ui/button";

// FIXME: Add Button props without children
const ReloadPage: FC = () => {
  const { t } = useTranslation();

  const handleReload = () => {
    window.location.reload();
  };

  return <Button onClick={handleReload}>{t("actions.reload")}</Button>;
};

export default ReloadPage;
