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
        {/* Frame20 - absolute flex container for 3 cards */}
        <div className="absolute left-0 top-0 flex w-full flex-col items-center leading-[0] md:flex-row md:w-[1920px]">
          {featureCards.map((feature, index) => {
            // Figma colors for each card background
            const bgColors = ['bg-[#d9d9d9]', 'bg-[#cbcbcb]', 'bg-[#bcbcbc]'];

            return (
              <motion.div
                key={feature.title}
                className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Background rectangle - no border radius, exact 640x500px on desktop */}
                <div className={`h-[400px] w-full [grid-area:1_/_1] md:h-[500px] md:w-[640px] ${bgColors[index]}`} />

                {/* Content overlay with padding from top-left */}
                <div className="box-border flex h-[350px] flex-col items-start justify-between p-8 [grid-area:1_/_1] md:ml-[100px] md:mt-[100px] md:h-[300px] md:p-0">
                  {/* Icon - rounded circle with check */}
                  <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[30px] bg-[#747171] md:size-[57px]">
                    <span className="material-symbols-rounded text-[20px] leading-none text-white md:text-[24px]">
                      check
                    </span>
                  </div>

                  {/* Title - Figma: 32px, w-[364px], leading-[1.2] */}
                  <p className="w-full font-['Montserrat'] text-[24px] font-bold leading-[1.2] text-[#1d1d1b] md:w-[364px] md:text-[32px]">
                    {feature.title}
                  </p>

                  {/* Button - Figma: rounded-[30px], bg-[#1d1d1b], 16px text */}
                  <button
                    type="button"
                    onClick={() => setActiveFeature(index)}
                    className="box-border flex shrink-0 items-center justify-center gap-[10px] rounded-[30px] bg-[#1d1d1b] px-[30px] py-[20px]"
                  >
                    <p className="font-['Montserrat'] text-[14px] font-bold leading-none text-white md:text-[16px]">
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
