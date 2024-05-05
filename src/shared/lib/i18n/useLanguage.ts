import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const setLanguage = (language: string) => {
    void i18n.changeLanguage(language);
  };

  return {
    toggleLanguage,
    setLanguage,
  };
};

export default useLanguage;
