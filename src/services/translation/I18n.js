import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { pl } from 'utils/languages/pl';
import { en } from 'utils/languages/en';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
    },
    lng: 'pl',
    fallbackLng: 'pl',
    interpolation: { escapeValue: false },
  });

const I18n = ({ trans }) => {
  const { t } = useTranslation();
  return t(trans);
};

export default I18n;
