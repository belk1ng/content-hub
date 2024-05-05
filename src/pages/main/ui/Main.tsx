import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return <h2>{t("homepage.title")}</h2>;
};

export default MainPage;
