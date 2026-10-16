import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, Translations, translations } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('batista_studio_lang') as Language | null;
      if (savedLang === 'es' || savedLang === 'en' || savedLang === 'fr') {
        return savedLang;
      }
      // Check browser preferred language
      const browserLang = navigator.language.slice(0, 2).toLowerCase();
      if (browserLang === 'en' || browserLang === 'fr') {
        return browserLang as Language;
      }
    }
    return 'es'; // Default language
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('batista_studio_lang', language);
    } catch {
      // localStorage may fail in restricted iframes
    }
  }, [language]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
