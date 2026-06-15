"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getTranslations, type Language } from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: ReturnType<typeof getTranslations>;
  isArabic: boolean;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "landing-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;

    if (saved === "en" || saved === "ar") {
      setLanguageState(saved);
    }

    setHasLoadedPreference(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    if (hasLoadedPreference) {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language, hasLoadedPreference]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      setLanguage,
      t: getTranslations(language),
      isArabic: language === "ar",
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
