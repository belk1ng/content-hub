import type { FC } from "react";
import { useTranslation } from "react-i18next";

const ArticlesPage: FC = () => {
  const { t } = useTranslation();

  return <h2>{t("articles.title")}</h2>;
};

export default ArticlesPage;
