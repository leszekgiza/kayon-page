'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';
import SectionLabel from '@/components/ui/SectionLabel';
import './ProductsSection.css'
import SectionDescription from '@/components/ui/SectionDescription';

const ProductsSection = () => {
  const { products } = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 310; // Fixed width from Figma
  const gap = 40; // gap between cards from Figma
  const cardWithGap = cardWidth + gap; // 350px total
  const cardsPerView = 3; // Show 3 cards at a time on desktop
  const totalCards = products.groups.length;
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="produkty" className="relative h-[800px] bg-[#343432] text-white overflow-hidden">
      {/* Right background block - Figma: bg-[#484848], left-[640px], width: 1280px */}
      <div className="absolute left-0 top-0 h-full w-full bg-[#343432] lg:left-[640px] lg:w-[calc(100%-640px)] lg:bg-[#484848]" />

      {/* Left Column - Text Content - Figma: left-[100px], top-[100px], 477x631px */}
      <div className="absolute left-4 top-[50px] z-10 flex h-auto w-[calc(100%-2rem)] flex-col justify-between gap-8 md:left-[100px] md:top-[100px] md:h-[631px] md:w-[477px] md:gap-0">
        <SectionLabel label={products.label} bgClass="bg-[#EAEAEA]" />
        <h2 className="w-full text-[32px] font-bold leading-[1.3] text-white md:w-[477px] md:text-[40px]">
          {products.heading}
        </h2>
        <SectionDescription text={products.description} textColorClass="text-white" />
        <p className="w-full text-sm font-bold leading-[1.4] text-white md:w-[437px] md:text-base">
          {products.footnote}
        </p>
      </div>

      {/* Right Column - Carousel - Figma: left-[640px], top-[180px] */}
      <div className="absolute left-0 top-[500px] z-10 w-full lg:left-[740px] lg:top-[180px] lg:w-[calc(100%-740px)]">
        {/* Cards Container */}
        <div className="overflow-hidden px-4 lg:px-0">
          <motion.div
            className="flex gap-[40px]"
            animate={{ x: `-${currentIndex * cardWithGap}px` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {products.groups.map((group) => {
              const targetHref = group.slug ? `/produkty/${group.slug}` : '/produkty';

              return (
                <motion.div
                  key={group.title}
                  className="p-[30px] relative h-[441px] w-[310px] flex flex-col flex-shrink-0 rounded-[20px] bg-white"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-4 h-full flex flex-col justify-between">
                    <h3 className="text-2xl font-bold leading-[1.2] text-[#1D1D1B]">{group.title}</h3>
                    <ul className="mt-[30px] flex flex-col gap-[15px]">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-[10px]">
                          <span className="material-symbols-rounded shrink-0 text-2xl leading-none text-[#2CBCEB]">
                            arrow_right
                          </span>
                          <span className="text-base font-bold leading-[1.4] text-[#1D1D1B]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={targetHref}
                    className="mt-auto px-8 w-max min-h-[51px] inline-flex items-center rounded-full bg-[#1D1D1B] font-bold leading-none text-white transition-colors duration-200 hover:bg-[#2a2a27]"
                  >
                    {products.ctaLabel}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation - PROGRESS 01 (dots on left, arrows on right) */}
        <div className="mt-[70px] flex items-center justify-between px-4 lg:px-0">
          {/* Dot Navigation - PROGRESS 01 */}
          <div className="flex items-center gap-[13px]">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-6 w-6 flex justify-center items-center rounded-full bg-[#484848] border-2 border-[#747171] transition-all duration-200 ${index === currentIndex ? 'carousel-progress-is-current bg-[#484848]' : ''
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-[#1D1D1B] text-white transition-all duration-200 hover:bg-primary/30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
              </svg>

            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="ms-4 flex h-[57px] w-[57px] items-center justify-center rounded-full bg-[#1D1D1B] text-white transition-all duration-200 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
