"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const SUPPORTED_LANGUAGES = ["pl", "en", "de"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  pl: "PL",
  en: "EN",
  de: "DE",
};

const LANGUAGE_STORAGE_KEY = "kayon-language";
const FALLBACK_LANGUAGE: SupportedLanguage = "pl";

const isSupportedLanguage = (value: string | undefined): value is SupportedLanguage =>
  value !== undefined && SUPPORTED_LANGUAGES.includes(value as SupportedLanguage);

const normalizeLanguage = (value: string | undefined): SupportedLanguage | undefined => {
  if (!value) return undefined;
  const primaryTag = value.toLowerCase().split(/[-_]/)[0];
  return isSupportedLanguage(primaryTag) ? primaryTag : undefined;
};

const detectPreferredLanguage = (): SupportedLanguage => {
  if (typeof navigator === "undefined") {
    return FALLBACK_LANGUAGE;
  }

  const candidates = [
    ...(navigator.languages ?? []),
    navigator.language,
  ];

  for (const candidate of candidates) {
    const normalized = normalizeLanguage(candidate);
    if (normalized) {
      return normalized;
    }
  }

  return FALLBACK_LANGUAGE;
};

interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: FALLBACK_LANGUAGE,
  // no-op placeholder; replaced in provider
  setLanguage: () => undefined,
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(FALLBACK_LANGUAGE);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedPreference = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isSupportedLanguage(storedPreference ?? undefined)) {
      setLanguageState(storedPreference as SupportedLanguage);
      return;
    }

    const preferred = detectPreferredLanguage();
    setLanguageState(preferred);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  const setLanguage = useCallback((nextLanguage: SupportedLanguage) => {
    setLanguageState(nextLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
