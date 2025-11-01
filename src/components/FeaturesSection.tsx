'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const { features } = useContent();
  const featureCards = features.cards;

  useEffect(() => {
    if (activeFeature === null) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveFeature(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeFeature]);

  return (
    <>
      {/* 02 DLACZEGO - Figma: 1920x500px, 3 cards without gaps */}
      <section id="dla-kogo" className="relative h-auto w-full bg-[#eaeaea] shadow-[0px_40px_40px_0px_rgba(0,0,0,0.02)] md:h-[500px]">
        {/* Frame20 - flex container for 3 cards - NO GAPS */}
        <div className="flex w-full flex-col items-stretch leading-[0] md:flex-row">
          {featureCards.map((feature, index) => {
            // Figma colors for each card background
            const bgColors = ['bg-[#d9d9d9]', 'bg-[#cbcbcb]', 'bg-[#bcbcbc]'];

            return (
              <motion.div
                key={feature.title}
                className={`relative w-full flex-shrink-0 md:flex-1 ${bgColors[index]}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Content - Desktop: moved 55px up total, ml-[100px] mt-[45px], Mobile: padding */}
                <div className="box-border flex h-[400px] flex-col items-start justify-between p-8 md:ml-[100px] md:mt-[45px] md:h-[500px] md:w-auto md:pb-[155px] md:pr-0 md:pt-[45px]">
                  {/* Icon - Desktop: 57px, Mobile: 48px */}
                  <div className="relative flex size-[48px] shrink-0 items-center justify-center rounded-[30px] bg-[#747171] content-stretch md:size-[57px]">
                    <span className="material-symbols-rounded relative shrink-0 text-[20px] leading-none text-white md:text-[24px]">
                      check
                    </span>
                  </div>

                  {/* Title - Desktop: w-[364px] text-[32px], Mobile: responsive */}
                  <p className="relative shrink-0 w-full font-['Montserrat'] text-[24px] font-bold leading-[1.2] text-[#1d1d1b] md:max-w-[280px] md:text-[32px]">
                    {parse(feature.title)}
                  </p>

                  {/* Button - Desktop: px-[30px] py-[20px] text-[16px], Mobile: smaller */}
                  <button
                    type="button"
                    onClick={() => setActiveFeature(index)}
                    className="relative box-border flex shrink-0 items-center justify-center gap-[10px] rounded-[30px] bg-[#1d1d1b] px-[24px] py-[16px] content-stretch md:px-[30px] md:py-[20px]"
                  >
                    <p className="relative shrink-0 whitespace-pre font-['Montserrat'] text-[14px] font-bold leading-none text-white md:text-[16px]">
                      {features.readMoreLabel}
                    </p>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modal for "Read More" */}
      <AnimatePresence>
        {activeFeature !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveFeature(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="features-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl rounded-[32px] bg-white px-8 py-10 text-primary shadow-[0_45px_90px_rgba(0,0,0,0.45)] md:px-14 md:py-12"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveFeature(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
                aria-label={features.modalCloseAria}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
              <h2 id="features-modal-title" className="text-xl font-semibold text-primary md:text-2xl">
                {parse(featureCards[activeFeature].title)}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-primary/90 md:text-base">
                {featureCards[activeFeature].detail.map((paragraph) => (
                  <p key={paragraph}>{parse(paragraph)}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturesSection;
