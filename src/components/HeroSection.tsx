'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useContent } from '@/hooks/useContent';

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
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image - z-index 0 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-top.png"
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/45 to-black/15" />
      </div>

      {/* Giant AIM Symbol (Y) - z-index 1, behind everything except background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        <Image
          src="/aim-symbol.svg"
          alt=""
          width={1395}
          height={1162}
          priority
          className="opacity-20"
        />
      </div>

      {/* Decorative Pattern SVG - z-index 2 */}
      <div className="pointer-events-none absolute inset-0 z-[2] hidden items-start justify-center md:flex">
        <Image
          src="/hero-pattern.svg"
          alt=""
          width={1120}
          height={933}
          priority
          className="mt-10 w-[90vw] max-w-[1120px] opacity-85"
        />
      </div>

      {/* Decorative large circle - z-index 3, Figma: 1799x626px, corner radius 313px */}
      <div className="pointer-events-none absolute left-1/2 top-32 z-[3] hidden h-[626px] w-[1799px] -translate-x-1/2 rounded-[313px] border border-white/25 md:block" />

      {/* Main Content - z-index 10, centered vertically */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-custom w-full py-24">
          {/* Frame 1 - main content container, exact width 709px from Figma */}
          <div className="ml-auto flex w-full max-w-[709px] flex-col items-start gap-20 text-left">
            {/* Logo KAYON - Figma: 300.9x50px - using PNG from layout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/kayon-logo-white.png"
                alt="KAYON"
                width={301}
                height={50}
                priority
                className="h-[50px] w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              />
            </motion.div>

            {/* Frame 39 - Text + CTA box, gap 40px */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex w-full flex-col gap-10"
            >
              {/* Headline Text */}
              <h1 className="text-[28px] font-semibold leading-snug text-white md:text-[36px] md:leading-tight lg:text-[42px]">
                {hero.headline}
              </h1>

              {/* Frame 2 - Box with text + CTA button (horizontal layout) */}
              {/* Figma: corner radius 30px, padding 40px, gap 40px, horizontal */}
              <div className="flex w-full flex-col items-start gap-10 rounded-[30px] border border-white/20 bg-white/10 p-10 backdrop-blur-md lg:flex-row lg:items-center">
                {/* Body text */}
                <p className="flex-1 text-base leading-relaxed text-white/90 md:text-lg">
                  {hero.body}
                </p>

                {/* CTA Button - Figma: black #1d1d1b, corner radius 30px, padding 20px 30px */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#1d1d1b] px-[30px] py-[20px] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#2a2a27]"
                >
                  {hero.ctaLabel}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
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
