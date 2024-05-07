import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

import i18nTest from "@/shared/config/i18n/i18n.tests";

const withTranslation = (component?: ReactNode) => {
  return <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>;
};

export default withTranslation;
