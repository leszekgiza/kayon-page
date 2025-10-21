import { useLanguage } from '@/components/LanguageProvider';
import { CONTENT } from '@/translations/content';

export const useContent = () => {
  const { language } = useLanguage();
  return CONTENT[language];
};
