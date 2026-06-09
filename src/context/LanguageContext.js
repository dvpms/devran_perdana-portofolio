"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getDictionary } from "@/i18n";

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LOCALE = "id";

const LanguageContext = createContext(null);

/**
 * Provides locale state, the matching UI dictionary (`t`), and a setter.
 *
 * Reads the saved preference from localStorage on mount and keeps
 * `<html lang>` in sync whenever the locale changes.
 */
export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") {
      setLocaleState(saved);
    }
  }, []);

  // Keep <html lang> in sync
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((newLocale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  const t = getDictionary(locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to access the current locale, dictionary, and setter.
 *
 * @returns {{ locale: "id"|"en", setLocale: (l: string) => void, t: object }}
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
