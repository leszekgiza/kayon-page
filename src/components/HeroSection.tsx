'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import KayonLogo from './KayonLogo';
import { useContent } from '@/hooks/useContent';
import ButtonSimple from './ui/ButtonSimple';

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
    <section className="relative h-[900px] overflow-hidden bg-black text-white">
      {/* Background Image with overlay - Figma: combined layer */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Pattern overlay - top: 256px, height: 644px, opacity: 50% */}
      <div className="absolute left-0 top-[256px] h-[644px] w-full overflow-hidden opacity-50">
        {/* Pattern placeholder - można dodać pattern image tutaj jeśli potrzebny */}
      </div>

      {/* Gradient from right - from #040718 to transparent */}
      <div className="absolute right-0 top-0 h-full w-[946px] bg-gradient-to-l from-[#040718] to-transparent" />

      {/* Gradient from left - from #040718 to transparent, rotated 180° */}
      <div className="absolute left-0 top-0 h-full w-[390px]">
        <div className="h-full w-full rotate-180 bg-gradient-to-l from-[#040718] to-transparent" />
      </div>

      {/* Decorative large circle - Figma: left: -999px, top: -215px, rotated 180° */}
      <div className="pointer-events-none absolute left-[-999px] top-[-215px] hidden h-[626px] w-[1799px] md:block">
        <div className="h-full w-full rotate-180 rounded-[313px] border-2 border-[#eaeaea] opacity-[0.15]" />
      </div>

      {/* AIM Target - Figma: 1250x1041px, positioned at X:335 Y:-49 */}
      <div className="pointer-events-none absolute z-10 hidden 2xl:block" style={{ left: '335px', top: '-49px', width: '1250px', height: '1041px' }}>
        <Image
          src="/aim-target.svg"
          alt=""
          width={1250}
          height={1041}
          priority
        />
      </div>

      {/* Main Content - Figma: absolute positioning left: 1085px, top: 230px */}
      <div className="relative z-20 h-full">
        <div className="absolute left-4 top-[230px] flex flex-col items-start gap-20 md:left-[1085px]">
          {/* Logo KAYON - Figma: 300.9x50px */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <KayonLogo className="h-[50px] w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]" />
          </motion.div>

          {/* Frame 39 - Text + CTA box, GAP 40px */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex w-full flex-col gap-10"
          >
            {/* Headline Text - Figma: 40px, Bold (700), line-height 1.2, width 693px, left-aligned */}
            <h1 className="w-full text-[28px] font-bold leading-[1.2] text-left text-white md:w-[693px] md:text-[40px]">
              {hero.headline}
            </h1>

            {/* Frame 2 - Box with text + CTA button (horizontal on large screens) */}
            {/* Figma: corner radius 30px, padding 40px, gap 40px, border #484848 */}
            <div className="flex w-full flex-col items-start gap-10 rounded-[30px] border-2 border-[#484848] bg-white/10 p-10 backdrop-blur-md lg:flex-row lg:items-center">
              {/* Body text - Figma: 20px, Bold (700), line-height 1.2, width 437px on desktop */}
              <p className="w-full text-base font-bold leading-[1.2] text-white md:w-[437px] md:text-[20px]">
                {hero.body}
              </p>

              <ButtonSimple text={hero.ctaLabel} bgClass="bg-[#1d1d1b]" callbackFunction={() => setIsModalOpen(true)} />

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Icon - Figma: centered at bottom */}
      <motion.button
        type="button"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }}
        whileHover={{ y: -8 }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut"
          }
        }}
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-[57px] left-1/2 flex h-[57px] w-[57px] -translate-x-1/2 cursor-pointer items-center justify-center rounded-[30px] bg-[#bcb7b7] transition-colors duration-300 hover:bg-[#d0d0d0]"
        aria-label="Scroll down"
      >
        <span className="material-symbols-rounded text-[24px] text-white">
          arrow_cool_down
        </span>
      </motion.button>

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
