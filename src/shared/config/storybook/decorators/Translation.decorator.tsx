import { useEffect, Suspense } from "react";
import i18nProduction from "@/shared/config/i18n/i18n.production";
import { I18nextProvider } from "react-i18next";
import type { StoryContext, StoryFn } from "@storybook/react";

export const TranslationDecorator = (Story: StoryFn, context: StoryContext) => {
  const { locale } = context.globals;

  useEffect(() => {
    void i18nProduction.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18nProduction} defaultNS="translation">
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
