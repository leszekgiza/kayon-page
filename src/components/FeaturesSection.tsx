'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

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
      <section id="dla-kogo" className="relative h-auto bg-[#eaeaea] shadow-[0px_40px_40px_0px_rgba(0,0,0,0.02)] md:h-[500px]">
        {/* Frame20 - flex container for 3 cards - responsive */}
        <div className="flex w-full flex-col items-stretch leading-[0] md:flex-row">
          {featureCards.map((feature, index) => {
            // Figma colors for each card background
            const bgColors = ['bg-[#d9d9d9]', 'bg-[#cbcbcb]', 'bg-[#bcbcbc]'];

            return (
              <motion.div
                key={feature.title}
                className="relative inline-grid w-full shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start md:w-1/3"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Background square - aspect ratio 1:1 to maintain square shape */}
                <div className={`aspect-square w-full [grid-area:1_/_1] ${bgColors[index]}`} />

                {/* Content overlay - responsive positioning */}
                <div className="[grid-area:1_/_1] relative box-border flex h-full flex-col content-stretch items-start justify-between p-8 md:p-12 lg:p-16">
                  {/* Icon - rounded circle with check */}
                  <div className="relative flex size-[48px] shrink-0 items-center justify-center rounded-[30px] bg-[#747171] content-stretch md:size-[57px]">
                    <span className="material-symbols-rounded relative shrink-0 text-[20px] leading-none text-white md:text-[24px]">
                      check
                    </span>
                  </div>

                  {/* Title - responsive width and font size */}
                  <p className="relative w-full shrink-0 font-['Montserrat'] text-[24px] font-bold leading-[1.2] text-[#1d1d1b] md:w-[90%] md:text-[28px] lg:text-[32px]">
                    {feature.title}
                  </p>

                  {/* Button - responsive */}
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
                {featureCards[activeFeature].title}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-primary/90 md:text-base">
                {featureCards[activeFeature].detail.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
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
