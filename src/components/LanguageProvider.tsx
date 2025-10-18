"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const SUPPORTED_LANGUAGES = ["pl", "en", "de"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

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
  const [language, setLanguage] = useState<SupportedLanguage>(FALLBACK_LANGUAGE);

  useEffect(() => {
    const preferred = detectPreferredLanguage();
    setLanguage(preferred);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
