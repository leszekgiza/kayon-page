'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import KayonLogo from '@/components/ui/KayonLogo';
import { useContent } from '@/hooks/useContent';
import { useLanguage, SUPPORTED_LANGUAGES, LANGUAGE_LABELS } from '@/components/LanguageProvider';

interface FullScreenMenuProps {
  open: boolean;
  onClose: () => void;
}

const FullScreenMenu = ({ open, onClose }: FullScreenMenuProps) => {
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
          <div className="absolute left-[335px] top-[-49.15px] w-[1250px] h-[1041.295px] pointer-events-none hidden lg:block">
            {/* Blue diagonal line - top left */}
            <div className="absolute left-0 top-0 right-[86.79%] bottom-[84.24%]">
              <img
                alt=""
                className="block size-full object-fill"
                src="https://www.figma.com/api/mcp/asset/15264cd8-9e66-4b4c-8322-6535113f01de"
              />
            </div>
            {/* Orange diagonal line - top right */}
            <div className="absolute left-[86.88%] top-0 right-0 bottom-[84.24%]">
              <img
                alt=""
                className="block size-full object-fill"
                src="https://www.figma.com/api/mcp/asset/06d724e8-d9e0-4856-b84c-e1e4bb65f27a"
              />
            </div>
            {/* Green indicator - bottom center */}
            <div className="absolute left-[48.04%] right-[48.04%] top-[82.96%] bottom-0">
              <img
                alt=""
                className="block size-full object-fill"
                src="https://www.figma.com/api/mcp/asset/3ca00548-19f2-4a0e-bbfd-8259c3eac34e"
              />
            </div>
          </div>

          {/* Decorative circle */}
          <div className="absolute left-[-555px] top-[240px] w-[1420px] h-[494px] pointer-events-none hidden lg:block">
            <div className="w-full h-full rounded-[247px] border-2 border-[#747171]" />
          </div>

          <button
            type="button"
            className="absolute left-[1823px] top-[41px] flex h-[57px] w-[57px] items-center justify-center rounded-[30px] bg-[#1d1d1b] text-white transition-colors hover:bg-[#2d2d2b]"
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
              <KayonLogo className="h-[90px] w-auto drop-shadow-[0_18px_60px_rgba(0,0,0,0.35)]" />
            </div>

            <div className="absolute left-[1205px] top-[185px] hidden lg:flex flex-col gap-[60px]">
              <nav className="space-y-[60px]">
                {menuOverlay.items.map((item) => (
                  <Link
                    key={item.href}
                    href={resolveHref(item.href)}
                    onClick={onClose}
                    className="group flex items-center gap-10 text-5xl font-bold leading-[1.2]"
                  >
                    <div className="flex h-[13px] w-[47px] items-center justify-center flex-shrink-0">
                      <div className="rotate-90 scale-y-[-1]">
                        <div className="relative h-[47px] w-[13px]">
                          <img
                            alt=""
                            className="block size-full transition-opacity duration-200 group-hover:opacity-0"
                            src="https://www.figma.com/api/mcp/asset/55620f11-e657-4f94-af14-a817a7a4f6e2"
                          />
                          <div className="absolute inset-0 bg-[#2CBCEB] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>
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
                    className="flex items-center justify-center rounded-[30px] bg-[#1d1d1b] px-[30px] py-5 text-base font-bold leading-none transition-colors hover:bg-[#2d2d2b]"
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

export default FullScreenMenu;
