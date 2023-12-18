import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "./locale/en.json"
import arabicTranslation from "./locale/ar.json"
import rusianTranslation from "./locale/ru.json"
import LanguageDetector from 'i18next-browser-languagedetector'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation:englishTranslation
  },
  ar: {
    translation:arabicTranslation
  },
  ru: {
    translation: rusianTranslation
  }
};

i18n
.use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react :{
        useSuspense:false
    }
  });

  export default i18n;