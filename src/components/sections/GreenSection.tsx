'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionDescription from '@/components/ui/SectionDescription';

const GreenSection = () => {
  const { clients } = useContent();
  const baseCards = clients.cards;
  const baseLength = baseCards.length;
  const extendedCards = useMemo(() => [...baseCards, ...baseCards, ...baseCards], [baseCards]);
  const extendedLength = extendedCards.length;
  const GAP_SIZE = 40; // gap-10 in pixels (Figma)
  const CARD_WIDTH = 305; // Fixed width from Figma
  const CARD_HEIGHT = 460; // Fixed height from Figma

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
    <section id="nasi-klienci" className="bg-[#77bb61] bg-gradient-to-r from-[#53923e] via-[#53923e] to-[#77bb61] text-white">
      <div id='green-section-cols' className="px-0 2xl:flex flex-col 2xl:flex-row items-center relative bg-[#53923e]">
        <div id='green-section-left-col' className="kayon-ps-fix p-8 md:py-24 lg:ps-8 2xl:min-h-[800px] md:min-w-[50%] flex flex-col justify-between gap-8 bg-[#53923e]">
          <SectionLabel label={clients.label} bgClass="bg-[#EAEAEA]" />
          <h2 className="text-3xl leading-tight md:text-[40px]">{parse(clients.heading)}</h2>
          <SectionDescription text={clients.highlight} textColorClass="text-white" />
        </div>
        <div id='green-section-right-col' className="ps-8 md:ps-16 2xl:ps-10 py-8 md:py-24 2xl:min-h-[800px] md:min-w-[50%] flex flex-col justify-between gap-8 bg-[#77bb61] overflow-hidden">
          <div>
            <motion.div
              style={trackStyle}
              className="flex min-w-0 gap-10 -mr-[2000px]"
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
                  className="rounded-[20px] bg-white px-[30px] py-[40px] text-primary shadow-lg flex flex-col justify-between"
                >
                  <h3
                    className="text-[24px] font-bold leading-[120%]"
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                  >
                    {parse(card.title)}
                  </h3>
                  <p
                    className="text-base leading-[140%] text-primary/80"
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                  >
                    {parse(card.description)}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          <div
            id='greensection-carousel-controls'
            className="2xl:pe-[122px] w-[80vw] max-w-[826px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {baseCards.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => handleDot(dotIndex)}
                  className={`h-6 w-6 flex justify-center items-center rounded-full bg-[#77bb61] border-2 border-[#5f904f] transition-all duration-200 ${dotIndex === activeDot ? 'carousel-progress-is-current border-green bg-[#77bb61]' : ''
                    }`}
                  aria-label={formatDotAria(dotIndex)}
                />
              ))}
            </div>

            <div className="flex items-center">
              <button
                onClick={handlePrev}
                className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-[#53923F] text-white transition-all duration-200 hover:bg-[#437633] disabled:cursor-not-allowed"
                aria-label={clients.previousAria}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="ms-4 flex h-[57px] w-[57px] items-center justify-center rounded-full bg-[#53923F] text-white transition-all duration-200 hover:bg-[#437633] disabled:cursor-not-allowed"
                aria-label={clients.nextAria}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
