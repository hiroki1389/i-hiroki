import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const enModules = import.meta.glob('./en/*.json', { eager: true });
const jaModules = import.meta.glob('./ja/*.json', { eager: true });

// resourcesを初期化
const resources: any = { en: {}, ja: {} };

// enフォルダ
for (const path in enModules) {
  const fileName = path.split('/').pop()?.replace('.json', '');
  if (fileName) {
    resources.en[fileName] = (enModules[path] as any).default;
  }
}

// jaフォルダ
for (const path in jaModules) {
  const fileName = path.split('/').pop()?.replace('.json', '');
  if (fileName) {
    resources.ja[fileName] = (jaModules[path] as any).default;
  }
}

// i18n初期化
i18n
  .use(LanguageDetector) // ブラウザの言語を自動で検出
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // 言語が検出できない場合は英語をデフォルトにする
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
