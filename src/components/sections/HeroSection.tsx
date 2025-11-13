'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import useDetectScroll, {
  Axis,
  Direction
} from '@smakss/react-scroll-direction';
import KayonLogo from '@/components/ui/KayonLogo';
import { useContent } from '@/hooks/useContent';
import ButtonSimple from '@/components/ui/ButtonSimple';
import ScrollDownButton from '../ui/ScrollDownButton';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { hero } = useContent();
  const { scrollDir, scrollPosition } = useDetectScroll();

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  return (
    <section className="max-md:pt-8 relative min-h-screen lg:min-h-[800px] flex flex-col lg:flex-row items-center bg-black text-white">
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
      <div className="absolute z-0 inset-0 pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover object-left"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div id="hero-left-col" className='hidden xl:block xl:min-w-[50%]'></div>

      <ScrollDownButton />

      <div id="hero-right-col" className="hero-right-col lg:w-full px-8 xl:ps-16 xl:max-w-[550px] 2xl:max-w-[675px] absolute xl:relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <KayonLogo className="h-[50px] w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex w-full flex-col gap-10"
        >
          <h1 className="mt-12 text-lg lg:text-4xl font-bold text-left text-pretty text-white">
            {hero.headline}
          </h1>

          <div className="p-6 flex flex-col items-start gap-2 rounded-3xl border-2 border-[#484848] lg:flex-row lg:justify-between lg:items-center">
            <p className="lg:text-xl font-bold text-white text-pretty">
              {hero.body}
            </p>
            <ButtonSimple text={hero.ctaLabel} bgClass="bg-[#1d1d1b]" callbackFunction={() => setIsModalOpen(true)} />
          </div>

        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="hero-modal-title"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl rounded-[36px] bg-white px-10 py-12 text-primary shadow-[0_40px_80px_rgba(0,0,0,0.45)] md:px-16 md:py-14"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
                aria-label={hero.modalCloseAria}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
              {hero.modalTitle && (
                <h2 id="hero-modal-title" className="text-2xl font-semibold text-primary">
                  {hero.modalTitle}
                </h2>
              )}
              <p className="mt-6 text-base font-semibold leading-relaxed text-primary">{hero.modalLead}</p>
              {hero.modalBody.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-base leading-relaxed text-primary ${index === 0 ? 'mt-6' : 'mt-4'}`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
