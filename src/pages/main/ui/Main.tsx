import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("homepage.title")}</h2>
    </div>
  );
};

export default MainPage;
