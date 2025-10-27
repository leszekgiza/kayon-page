'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const GreenSection = () => {
  const { clients } = useContent();
  const baseCards = clients.cards;
  const baseLength = baseCards.length;
  const extendedCards = useMemo(() => [...baseCards, ...baseCards, ...baseCards], [baseCards]);
  const extendedLength = extendedCards.length;
  const GAP_SIZE = 24; // gap-6 in pixels
  const CARD_WIDTH = 245; // Fixed width from Figma
  const CARD_HEIGHT = 380; // Fixed height from Figma

  const [visibleCount, setVisibleCount] = useState(1);
  const [index, setIndex] = useState(baseLength);
  const [animateTransition, setAnimateTransition] = useState(true);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    const needsReset =
      index >= baseLength * 2 ? -baseLength : index < baseLength ? baseLength : 0;

    if (needsReset !== 0) {
      const timeout = setTimeout(() => {
        setAnimateTransition(false);
        setIndex((prev) => prev + needsReset);
      }, 450);
      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [index, baseLength]);

  useEffect(() => {
    if (!animateTransition) {
      const raf = requestAnimationFrame(() => setAnimateTransition(true));
      return () => cancelAnimationFrame(raf);
    }
    return undefined;
  }, [animateTransition]);

  const trackStyle = useMemo(() => {
    const offset = index * (CARD_WIDTH + GAP_SIZE);
    return {
      transform: `translateX(-${offset}px)`,
    };
  }, [index]);

  const cardStyle = {
    width: `${CARD_WIDTH}px`,
    height: `${CARD_HEIGHT}px`,
    minWidth: `${CARD_WIDTH}px`,
    flexShrink: 0,
  };

  const activeDot = useMemo(() => {
    const normalized = (index - baseLength) % baseLength;
    return (normalized + baseLength) % baseLength;
  }, [index, baseLength]);

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);
  const handleDot = (dotIndex: number) => setIndex(baseLength + dotIndex);

  const formatDotAria = (dotIndex: number) =>
    clients.dotAriaTemplate.replace('%d', String(dotIndex + 1));

  return (
    <section id="nasi-klienci" className="relative overflow-hidden bg-[#53923e] py-24 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="mx-auto h-full w-full max-w-5xl rounded-full border border-white/20 blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-max items-center rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-semibold">
              {clients.label}
            </div>
            <h2 className="text-3xl leading-tight md:text-[40px]">{clients.heading}</h2>
            <div className="w-full max-w-xl rounded-[40px] border border-white/30 bg-white/10 px-8 py-6 text-sm leading-relaxed md:text-base">
              {clients.highlight}
            </div>
          </div>
          <div className="min-w-0 space-y-8">
            <div className="min-w-0 max-w-full overflow-hidden">
              <motion.div
                style={trackStyle}
                className="flex min-w-0 gap-6"
                initial={false}
                animate={{ transform: trackStyle.transform }}
                transition={
                  animateTransition
                    ? { duration: 0.45, ease: 'easeInOut' }
                    : { duration: 0 }
                }
              >
                {extendedCards.map((card, cardIndex) => (
                  <div
                    key={`${card.title}-${cardIndex}`}
                    style={cardStyle}
                    className="rounded-[20px] bg-white px-[30px] py-[40px] text-primary shadow-lg"
                  >
                    <div className="min-w-0 flex flex-col">
                      <h3
                        className="text-[24px] font-bold leading-[120%] min-h-[57.6px]"
                        style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-base leading-[140%] text-primary/80 mt-4"
                        style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {baseCards.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    onClick={() => handleDot(dotIndex)}
                    className={`h-6 w-6 rounded-full transition-colors ${
                      dotIndex === activeDot ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={formatDotAria(dotIndex)}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-[57px] w-[57px] items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:bg-white/10"
                  aria-label={clients.previousAria}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 6 9 12l6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-[57px] w-[57px] items-center justify-center rounded-full border border-white bg-white text-primary transition-colors duration-200 hover:bg-white/80"
                  aria-label={clients.nextAria}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m9 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
