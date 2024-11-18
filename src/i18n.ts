import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./locales/en.json";
import portuguese from "./locales/pt-BR.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: english,
    },
    pt: {
      translation: portuguese,
    },
  },
  lng: "pt-BR",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
