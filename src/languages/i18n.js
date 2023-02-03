import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import vn from './vn.json';

// Configuration
i18n.use(initReactI18next).init({
   lng: 'en',
   resources: {
      en: {
         translation: en,
      },
      vn: {
         translation: vn,
      },
   },
   fallbackLng: ['en', 'vn'],
   interpolation: {
      escapeValue: false,
      formatSeparator: ',',
   },
   react: {
      wait: true,
   },
   debug: false,
});

export default i18n;
