"use client";

import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, useLanguage } from "./LanguageProvider";

type Variant = "inline" | "menu";

const variantClasses: Record<Variant, string> = {
  inline: "flex items-center gap-1 rounded-full px-2 py-1",
  menu: "flex items-center gap-2",
};

const baseButtonClasses =
  "px-3 py-1 text-xs font-semibold transition-colors duration-200 rounded-full";
const activeButtonClasses = "bg-white text-primary";
const inactiveButtonClasses = "bg-transparent text-white/80 hover:bg-white/15";

interface LanguageSwitcherProps {
  variant?: Variant;
}

const LanguageSwitcher = ({ variant = "inline" }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={variantClasses[variant]}>
      {SUPPORTED_LANGUAGES.map((code) => {
        const stateClasses = language === code ? activeButtonClasses : inactiveButtonClasses;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            className={`${baseButtonClasses} ${stateClasses}`}
            aria-pressed={language === code}
          >
            {LANGUAGE_LABELS[code]}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
