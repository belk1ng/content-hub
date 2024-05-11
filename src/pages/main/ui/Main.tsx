import { useTranslation } from "react-i18next";

import { Counter } from "@/entities/counter";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("homepage.title")}</h2>
      <Counter />
    </div>
  );
};

export default MainPage;
