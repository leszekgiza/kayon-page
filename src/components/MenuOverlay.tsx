'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import KayonLogo from './KayonLogo';
import { useContent } from '@/hooks/useContent';
import { useLanguage, SUPPORTED_LANGUAGES, LANGUAGE_LABELS } from './LanguageProvider';

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

const MenuOverlay = ({ open, onClose }: MenuOverlayProps) => {
  const { menuOverlay } = useContent();
  const { language, setLanguage } = useLanguage();
  const resolveHref = (href: string) => (href.startsWith('#') ? `/${href}` : href);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#343432] px-4 text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* AIM decorative graphic */}
          <div className="absolute left-[17.5%] top-[-49px] w-[65%] h-[1041px] pointer-events-none hidden lg:block">
            {/* Blue shape - top left diagonal */}
            <div className="absolute left-0 top-0 w-[165px] h-[164px]">
              <svg className="w-full h-full" viewBox="0 0 165 164" fill="none">
                <path d="M0 164L165 0V164H0Z" fill="#2CBCEB"/>
              </svg>
            </div>
            {/* Orange shape - top right diagonal */}
            <div className="absolute right-0 top-0 w-[165px] h-[164px]">
              <svg className="w-full h-full" viewBox="0 0 165 164" fill="none">
                <path d="M165 164L0 0V164H165Z" fill="#F4B250"/>
              </svg>
            </div>
            {/* Green indicator - bottom center */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[49px] h-[178px]">
              <svg className="w-full h-full" viewBox="0 0 49 178" fill="none">
                <rect width="49" height="178" rx="24.5" fill="#77BB61"/>
              </svg>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="absolute left-[-555px] top-[240px] w-[1420px] h-[494px] pointer-events-none hidden lg:block">
            <div className="w-full h-full rounded-[247px] border-2 border-[#747171]" />
          </div>

          <button
            type="button"
            className="absolute right-[40px] top-[41px] flex h-[57px] w-[57px] items-center justify-center rounded-[30px] bg-[#1d1d1b] text-white transition-colors hover:bg-[#2d2d2b]"
            onClick={onClose}
            aria-label={menuOverlay.closeAria}
          >
            <span className="material-symbols-rounded text-2xl">close</span>
          </button>

          <motion.div
            className="grid w-full max-w-[1720px] gap-10 lg:grid-cols-[minmax(0,458px)_minmax(0,1fr)]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative flex flex-col items-center justify-center lg:ml-[100px]">
              <KayonLogo className="h-[76px] w-auto drop-shadow-[0_18px_60px_rgba(0,0,0,0.35)]" />
            </div>

            <div className="flex flex-col justify-center gap-[60px] lg:pl-[1205px] lg:ml-[-458px]">
              <nav className="space-y-[60px]">
                {menuOverlay.items.map((item) => (
                  <Link
                    key={item.href}
                    href={resolveHref(item.href)}
                    onClick={onClose}
                    className="group flex items-center gap-10 text-5xl font-bold leading-[1.2]"
                  >
                    <svg width="13" height="47" viewBox="0 0 13 47" fill="none" className="flex-shrink-0 rotate-90 scale-y-[-1]">
                      <path d="M6.5 0L13 47H0L6.5 0Z" fill="#77BB61" className="transition-colors duration-200 group-hover:fill-[#2CBCEB]"/>
                    </svg>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-[10px]">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className="flex items-center justify-center rounded-[30px] bg-[#1d1d1b] px-[30px] py-5 text-base font-bold uppercase transition-colors hover:bg-[#2d2d2b]"
                    aria-label={`Switch to ${LANGUAGE_LABELS[lang]}`}
                  >
                    {LANGUAGE_LABELS[lang]}
                  </button>
                ))}
              </div>

              <div className="h-px w-[338px] bg-[#747171]" />

              <Link
                href={resolveHref(menuOverlay.cta.href)}
                onClick={onClose}
                className="flex w-[338px] items-center justify-center rounded-[30px] bg-[#2cbceb] px-[30px] py-5 text-2xl font-bold leading-[1.2] text-white transition-colors hover:bg-[#2cbceb]/80"
              >
                {menuOverlay.cta.label}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
