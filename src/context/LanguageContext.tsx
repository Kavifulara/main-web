"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import en from "@/locales/en";
import hi from "@/locales/hi";

type Language = "en" | "hi";

const translations = {
  en,
  hi,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>("en");

  useEffect(() => {
    const saved =
      localStorage.getItem("language") as Language;

    if (saved) {
      setLanguageState(saved);
      document.documentElement.lang =
        saved;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    localStorage.setItem(
      "language",
      lang
    );
  
    document.documentElement.lang = lang;
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used within LanguageProvider"
    );
  }

  return context;
}