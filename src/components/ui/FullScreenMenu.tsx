'use client';

import Link from 'next/link';
import Image from 'next/image';
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
          id='fullscreen-menu'
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#343432] text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            className="w-full max-w-[1250px] h-auto absolute z-10 top-[-40px] left-1/2 -translate-x-1/2 pointer-events-none"
            src="/top-shapes.svg"
            alt=""
            width={375}
            height={50}
            priority
            draggable={false}
          />

          <button
            id='fullscreen-menu-close-button'
            type="button"
            className="fixed top-[10px] right-4 md:top-[60px] md:right-[60px] lg:top-[20px] lg:right-[20px] z-50 flex h-[57px] w-[57px] items-center justify-center rounded-[30px] bg-[#1d1d1b] text-white transition-colors hover:bg-[#2d2d2b]"
            onClick={onClose}
            aria-label={menuOverlay.closeAria}
          >
            <span className="material-symbols-rounded text-2xl">close</span>
          </button>

          <motion.div
            id='fullscreen-menu-cols'
            className="md:pt-28 w-screen flex flex-col md:flex-row gap-16 justify-center md:justify-between lg:items-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
          >
            <div
              id='fullscreen-menu-left-col'
              className="py-8 md:py-16 2xl:py-24 md:px-[5vw] 2xl:pe-52 w-full lg:w-1/2 max-w-[700px] md:h-[400px] relative flex flex-col items-center justify-center border-y-2 border-e-2 border-[#747171] rounded-r-full">
              <KayonLogo className="h-10 md:h-[40px] lg:h-[76px] w-auto lg:max-w-[350px] 2xl:max-w-[457px]" />
            </div>

            <div
              id='fullscreen-menu-right-col'
              className="mx-auto px-[5vw] max-2xl:pb-8 2xl:pe-52 md:w-[50%] lg:flex flex-col gap-2 2xl:gap-[40px] justify-around">
              <nav className="flex flex-col gap-8">
                {menuOverlay.items.map((item) => (
                  <Link
                    key={item.href}
                    href={resolveHref(item.href)}
                    onClick={onClose}
                    className="group flex items-center gap-10 text-xl md:text-[3vw] 2xl:text-5xl font-bold leading-[1.2]"
                  >
                    <div className="flex h-[13px] w-[47px] items-center justify-center flex-shrink-0">
                      <div className="rotate-90 scale-y-[-1]">
                        <div className="relative h-[47px] w-[13px]">
                          <img
                            alt=""
                            className="block size-full transition-opacity duration-200 group-hover:opacity-0"
                            src="https://www.figma.com/api/mcp/asset/55620f11-e657-4f94-af14-a817a7a4f6e2"
                            width={13}
                            height={47}
                          />
                          <div className="absolute inset-0 bg-[#2CBCEB] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="my-4 2xl:my-0 flex items-center gap-[10px]">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className="px-[30px] py-5 flex items-center justify-center rounded-[30px] bg-[#1d1d1b] text-base font-bold leading-none transition-colors hover:bg-[#2d2d2b]"
                    aria-label={`Switch to ${LANGUAGE_LABELS[lang]}`}
                  >
                    {LANGUAGE_LABELS[lang]}
                  </button>
                ))}
              </div>

              <div className="my-8 lg:my-2 h-px w-[338px] bg-[#747171]" />

              <Link
                href={resolveHref(menuOverlay.cta.href)}
                onClick={onClose}
                className="mt-4 2xl:mt-0 block text-center rounded-full bg-[#2cbceb] md:px-[30px] py-4 md:py-5 text-xl md:text-2xl font-bold leading-[1.2] text-white transition-colors hover:bg-[#2cbceb]/80"
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
