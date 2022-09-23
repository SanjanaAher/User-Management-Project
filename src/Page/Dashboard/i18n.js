import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

//create object and pass it info
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    backend: {
        loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",

    },
    fallbackLng: "en", //if lang is not chosen, chose eng by default
    debug: false,
    ns: ["home"],    // We can have multiple directories
    interpolation:{      
        escapeValue: false, //escapes passed in values to avoid XSS injection
        formatSeparator: ',', //it is used to separate format from interpolation value
    },
    react: {
        wait: true,
    },
});

export default i18n