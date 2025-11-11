'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import KayonLogo from '@/components/ui/KayonLogo';
import { useContent } from '@/hooks/useContent';
import { useLanguage, SUPPORTED_LANGUAGES, LANGUAGE_LABELS } from '@/components/LanguageProvider';
import './FullScreenMenu.css';

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
          <div className='kayon-top-shapes absolute z-10 top-0 left-1/2 -translate-x-1/2 flex pointer-events-none'>
            <Image
              className=""
              src="/ts-shape.svg"
              alt=""
              width={150}
              height={115}
              priority
              draggable={false}
            />
            <Image
              className=""
              src="/te-shape.svg"
              alt=""
              width={150}
              height={115}
              priority
              draggable={false}
            />
          </div>

          <Image
            className="max-md:w-[40px] w-[50px] h-auto absolute z-10 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            src="/bottom-shape.svg"
            alt=""
            width={50}
            height={85}
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
              className="mx-auto px-[5vw] max-2xl:pb-8 lg:flex flex-col gap-2 2xl:gap-[40px] justify-around">
              <nav className="flex flex-col gap-8">
                {menuOverlay.items.map((item) => (
                  <Link
                    key={item.href}
                    href={resolveHref(item.href)}
                    onClick={onClose}
                    className="fullscreen-menu__link group flex items-center gap-10 text-xl md:text-[3vw] 2xl:text-5xl font-bold leading-[1.2]"
                  >
                    <div className="fullscreen-menu__li-ellipse w-[47px] h-[13px] bg-green rounded-full transition-colors duration-150 ease-in-out"></div>
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
                    className="px-[30px] py-5 h-[51px] flex items-center justify-center rounded-[30px] bg-[#1d1d1b] text-base font-bold leading-none transition-colors hover:bg-[#2d2d2b]"
                    aria-label={`Switch to ${LANGUAGE_LABELS[lang]}`}
                  >
                    {LANGUAGE_LABELS[lang]}
                  </button>
                ))}
              </div>

              <div className="my-8 lg:my-2 h-px w-[338px] bg-[#747171]" />
              <a
                className="mt-4 2xl:mt-0 w-[338px] block text-center rounded-full bg-blue py-4 md:py-5 text-xl md:text-2xl font-bold leading-[1.2] text-white transition-colors hover:bg-[#2cbceb]/80"
                href="https://openmetering.co/"
                rel='nofollow noreferrer noopener'
                title='Login'>
                {menuOverlay.cta.label}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
