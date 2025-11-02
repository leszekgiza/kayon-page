"use client";

import { SupportedLanguage, useLanguage } from "@/components/LanguageProvider";

const LANGUAGE_WORDS: Record<SupportedLanguage, string> = {
  pl: "Polski",
  en: "English",
  de: "Deutsch",
};

const LanguageIndicator = () => {
  const { language } = useLanguage();

  return (
    <div
      className="fixed bottom-4 right-4 z-50 rounded-full bg-neutral-gray-light/90 px-4 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur"
      aria-live="polite"
    >
      {LANGUAGE_WORDS[language]}
    </div>
  );
};

export default LanguageIndicator;
