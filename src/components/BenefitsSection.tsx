'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

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
      <section className="bg-[#f4b250] py-24 text-primary" id="jak-dzialamy">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
            <div className="space-y-6 text-black">
              <div className="inline-flex w-max items-center rounded-full border border-black/20 bg-white/40 px-6 py-2 text-sm font-semibold">
                {benefits.label}
              </div>
              <h2 className="text-3xl leading-tight md:text-[40px]">{benefits.heading}</h2>
              <div className="max-w-xl rounded-[40px] border border-black/30 bg-black/10 px-8 py-6 text-sm leading-relaxed text-black md:text-base">
                {benefits.description}
              </div>
            </div>
            <div>
              <motion.div
                className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                {benefitCards.map((benefit, index) => (
                  <div key={benefit.title} className="flex flex-col items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-black">
                      <span className="material-symbols-rounded text-2xl">
                        {iconMap[index] || 'help'}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-black">{benefit.title}</h3>
                    <button
                      type="button"
                      onClick={() => setActiveBenefit(index)}
                      className="inline-flex w-max items-center gap-2 rounded-full bg-black px-6 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-black/80"
                    >
                      {benefits.readMoreLabel}
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
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
