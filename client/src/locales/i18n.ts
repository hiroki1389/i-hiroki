import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enHomePage from './en/homePage.json';
import jaHomePage from './ja/homePage.json';
import enCareer from './en/career.json';
import jaCareer from './ja/career.json';

i18n
  .use(LanguageDetector) // ブラウザの言語を自動で検出
  .use(initReactI18next) // Reactとの連携
  .init({
    resources: {
      en: {
        homePage: enHomePage,
        career: enCareer
      },
      ja: {
        homePage: jaHomePage,
        career: jaCareer
      }
    },
    fallbackLng: 'en', // 言語が検出できない場合は英語をデフォルトにする
    interpolation: {
      escapeValue: false, // XSS対策のために値をエスケープしない
    },
    detection: {
      order: ['localStorage', 'navigator'],  // 言語検出順序
      caches: ['localStorage'],  // 言語をlocalStorageに保存して次回以降使用
    }
  });

export default i18n;
