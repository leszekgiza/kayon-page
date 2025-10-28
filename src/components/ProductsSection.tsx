'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const ProductsSection = () => {
  const { products } = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 310; // Fixed width from Figma
  const gap = 24; // gap-6 = 24px
  const cardWithGap = cardWidth + gap; // 334px total
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
    <section id="produkty" className="bg-[#474747] py-24 text-white">
      <div className="container-custom">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left Column - Text Content - Figma: 477x631px, gap 40px SPACE_BETWEEN */}
          <div className="flex flex-col justify-between lg:w-[477px] lg:h-[631px]">
            <div className="inline-flex w-max items-center rounded-full bg-[#EAEAEA] px-[30px] py-5 text-2xl font-bold text-[#1D1D1B]">
              {products.label}
            </div>
            <h2 className="text-3xl font-bold text-white md:text-[40px] md:leading-[52px]">
              {products.heading}
            </h2>
            <div className="w-[467px] rounded-[30px] border-2 border-[#747171] p-10">
              <p className="text-[20px] leading-[26px] text-white">
                {products.description}
              </p>
            </div>
            <p className="w-[437px] text-base font-bold leading-[22.4px] text-white">{products.footnote}</p>
          </div>

          {/* Right Column - Carousel */}
          <div className="relative min-w-0 flex-1">
            {/* Cards Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 -mr-[2000px]"
                animate={{ x: `-${currentIndex * cardWithGap}px` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {products.groups.map((group) => {
                  const targetHref = group.slug ? `/produkty/${group.slug}` : '/produkty';

                  return (
                    <motion.div
                      key={group.title}
                      className="flex w-[310px] h-[441px] flex-shrink-0 flex-col justify-between rounded-[20px] bg-white px-6 py-8 text-primary"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-[#1D1D1B]">{group.title}</h3>
                        <ul className="mt-4 flex flex-col gap-[10px]">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-center gap-[10px]">
                              <span className="material-symbols-rounded text-2xl text-[#2CBCEB]">arrow_right</span>
                              <span className="text-base font-bold leading-[22.4px] text-[#1D1D1B]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={targetHref}
                        className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
                      >
                        {products.ctaLabel}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Navigation - PROGRESS 01 (dots on left, arrows on right) */}
            <div className="mt-8 flex items-center justify-between">
              {/* Dot Navigation - PROGRESS 01 */}
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-6 w-6 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-primary/20 text-white transition-all duration-200 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-primary/20 text-white transition-all duration-200 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

export default ProductsSection;
