import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

export const LANGUAGES = ['en', 'ru', 'sr', 'uk'];

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      if (language === 'dev') return;
      return import(`./locales/${language}/${namespace}.json`);
    }),
  )
  .init({
    debug: true,
    fallbackLng: 'en',  // Use English as the default fallback language
    supportedLngs: LANGUAGES,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18next;
