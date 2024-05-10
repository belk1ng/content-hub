import type { StoryContext, StoryFn } from "@storybook/react";
import { useEffect, Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import i18nProduction from "@/shared/config/i18n/i18n.production";

export const TranslationDecorator = (Story: StoryFn, context: StoryContext) => {
  const {
    globals: { locale },
  } = context;

  useEffect(() => {
    void i18nProduction.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider defaultNS="translation" i18n={i18nProduction}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
