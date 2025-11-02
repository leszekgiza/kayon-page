'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';
import SectionLabel from './ui/SectionLabel';
import SectionDescription from './ui/SectionDescription';
import ButtonSimple from './ui/ButtonSimple';

const iconMap: Record<number, string> = {
  0: 'autorenew',
  1: 'shield_with_house',
  2: 'schedule',
  3: 'description',
  4: 'ac_unit',
};

const BenefitsSection = () => {
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const { benefits } = useContent();
  const benefitCards = benefits.items;

  useEffect(() => {
    if (activeBenefit === null) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveBenefit(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeBenefit]);

  return (
    <>
      <section id="jak-dzialamy" className="bg-[#f4b250] text-primary">
        <div className="mx-auto px-8 md:px-0 py-12 md:py-24 max-w-[1660px] lg:min-h-[800px] flex flex-col md:flex-row justify-between gap-8 md:gap-28">
          <div className="flex flex-col gap-8 md:gap-y-16">
            <SectionLabel label={benefits.label} bgClass="bg-[#fad8a8]" />
            <h2 className="text-3xl leading-tight md:text-[40px]">{parse(benefits.heading)}</h2>
            <SectionDescription text={benefits.description} textColorClass="text-[#1D1D1B]" />
          </div>

          <motion.div
            className="md:w-[55%] flex flex-wrap justify-between md:justify-normal gap-2 md:gap-x-[80px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="p-4 md:pb-4 w-full md:w-[242px] md:h-[242px] md:flex justify-center items-end text-3xl bg-[#c99446] rounded-2xl">{parse(benefits.listTitle)}</h3>
            {benefitCards.map((benefit, index) => (
              <div key={benefit.title} className="flex-1 md:flex-initial mt-8 md:mt-0 w-[180px] md:w-[250px] md:h-[242px] flex flex-col gap-2 md:gap-0 justify-between items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/20 text-white">
                  <span className="material-symbols-rounded text-2xl">
                    {iconMap[index] || 'help'}
                  </span>
                </div>
                <h4 className="text-lg md:text-2xl font-bold">{benefit.title}</h4>
                <ButtonSimple text={benefits.readMoreLabel} callbackFunction={() => setActiveBenefit(index)} bgClass="bg-[#1d1d1b]" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeBenefit !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveBenefit(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="benefits-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl rounded-[32px] bg-white px-8 py-10 text-primary shadow-[0_45px_90px_rgba(0,0,0,0.45)] md:px-14 md:py-12"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveBenefit(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
                aria-label={benefits.modalCloseAria}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
              <h2 id="benefits-modal-title" className="text-xl font-semibold text-primary md:text-2xl">
                {benefitCards[activeBenefit].title}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-primary/90 md:text-base">
                {benefitCards[activeBenefit].detail.map((paragraph) => (
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

export default BenefitsSection;
