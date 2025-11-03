'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import KayonLogo from '@/components/ui/KayonLogo';
import { useContent } from '@/hooks/useContent';
import ButtonSimple from '@/components/ui/ButtonSimple';
import ScrollDownButton from '../ui/ScrollDownButton';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { hero } = useContent();

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
    <section className="relative min-h-[800px] h-screen 2xl:max-h-[1280px] flex flex-col xl:flex-row items-center bg-black text-white">
      <Image
        className="w-full max-w-[1250px] h-auto absolute z-10 top-0 lg:top-[-40px] left-1/2 -translate-x-1/2 pointer-events-none"
        src="/top-shapes.svg"
        alt=""
        width={375}
        height={50}
        priority
        draggable={false}
      />
      <div className="absolute z-0 inset-0 pointer-events-none">
        <Image
          src="/hero-top.png"
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div id="hero-left-col" className='hidden xl:block xl:min-w-[50%]'></div>

      <ScrollDownButton />

      <div id="hero-right-col" className="px-8 xl:ps-16 xl:max-w-[550px] 2xl:max-w-[675px] absolute xl:relative translate-y-24 lg:translate-y-52 xl:translate-y-8 z-10">
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
          <h1 className="mt-12 w-full font-bold leading-[1.2] text-left text-pretty text-white md:max-w-[693px] text-[28px] md:text-[40px] xl:text-[28px] 2xl:text-[40px]">
            {hero.headline}
          </h1>

          <div className="flex w-full flex-col items-start gap-10 rounded-[30px] border-2 border-[#484848] bg-white/10 p-10 backdrop-blur-xs lg:flex-row lg:items-center">
            <p className="w-full text-base font-bold leading-[1.2] text-white md:w-[437px] md:text-[20px]">
              {hero.body}
            </p>

            <ButtonSimple text={hero.ctaLabel} bgClass="bg-[#1d1d1b]" callbackFunction={() => setIsModalOpen(true)} />

          </div>
        </motion.div>
      </div>

      {/* Gradient from left - from #040718 to transparent, rotated 180° */}
      <div className="absolute left-0 top-0 h-full lg:w-[390px]">
        <div className="h-full w-full rotate-180 bg-gradient-to-l from-[#040718] to-transparent" />
      </div>

      {/* Gradient from right - from #040718 to transparent */}
      <div className="absolute right-0 top-0 h-full w-[300px] lg:w-[946px] opatity-25 lg:opacity-0 bg-gradient-to-l from-[#040718] to-transparent" />

      {/* Decorative large circle - Figma: left: -999px, top: -215px, rotated 180° */}
      <div className="absolute left-1/2 translate-x-[-50%] hidden h-[626px] w-[1799px] md:block pointer-events-none">
        <div className="h-full w-full rotate-180 rounded-[313px] border-2 border-[#eaeaea] opacity-[0.15]" />
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
