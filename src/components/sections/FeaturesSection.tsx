'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';
import ButtonSimple from '@/components/ui/ButtonSimple';

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
      <section id="dla-kogo" className="bg-multi-gradient-gray">
        <div className="lg:px-10 xl:px-20 2xl:px-8 mx-auto max-w-[1700px] 2xl:h-[500px] flex flex-col md:flex-row">
          {featureCards.map((feature, index) => {
            const bgColors = ['bg-[#d9d9d9]', 'bg-[#cbcbcb]', 'bg-[#bcbcbc]'];

            return (
              <motion.div
                key={feature.title}
                className={`ps-4 lg:ps-12 lg:first:ps-0 xl:ps-16 2xl:ps-20 py-8 xl:py-20 flex flex-col flex-grow gap-2 items-start justify-between ${bgColors[index]}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[30px] bg-[#747171] content-stretch md:size-[57px]">
                  <span className="material-symbols-rounded relative shrink-0 text-[20px] leading-none text-white md:text-[24px]">
                    check
                  </span>
                </div>
                <p className="text-[24px] font-bold leading-[1.2] text-[#1d1d1b] md:max-w-[280px] md:text-[32px]">
                  {parse(feature.title)}
                </p>
                <ButtonSimple text={features.readMoreLabel} callbackFunction={() => setActiveFeature(index)} bgClass="bg-[#1d1d1b]" />
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
