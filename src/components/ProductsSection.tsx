'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import './ProductsSection.css'

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
    <section id="produkty" className="flex bg-[#343432] text-white">
      {/*<div className="container-custom bg-green-700">*/}
        {/*<div className="flex ">*/}
          {/* Left Column - Text Content - Figma: 477x631px, gap 40px SPACE_BETWEEN */}
          <div className="py-24 px-16 flex flex-col justify-between lg:min-h-[631px]">
            <div className="mb-4 inline-flex w-max items-center rounded-full border border-primary/20 bg-neutral-gray-light px-6 py-2 text-sm font-semibold text-primary">
              {products.label}
            </div>
            <h2 className="text-3xl font-bold text-white md:text-[36px] md:leading-[52px]">
              {products.heading}
            </h2>
            <div className="my-8 max-w-[477px] rounded-[30px] border-2 border-[#747171] p-10">
              <p className="leading-[26px] text-white">
                {products.description}
              </p>
            </div>
            <p className="w-[437px] text-base font-bold leading-[22.4px] text-white">{products.footnote}</p>
          </div>

          {/* Right Column - Carousel */}
          <div className="ps-16 flex flex-col justify-center bg-[#484848]">
            {/* Cards Container */}
            <div className="overflow-hidden w-[990px]">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentIndex * cardWithGap}px` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {products.groups.map((group) => {
                  const targetHref = group.slug ? `/produkty/${group.slug}` : '/produkty';

                  return (
                    <motion.div
                      key={group.title}
                      className="flex w-[250px] h-[441px] flex-shrink-0 flex-col justify-between rounded-[20px] bg-white px-6 py-8 text-primary"
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
            <div className="mt-8 max-w-[800px] flex justify-between">
              {/* Dot Navigation - PROGRESS 01 */}
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-6 w-6 flex justify-center items-center rounded-full bg-[#484848] border-2 border-[#747171] transition-all duration-200 ${
                      index === currentIndex ? 'carousel-progress-is-current bg-[#484848]' : ''
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-[#1D1D1B] text-white transition-all duration-200 hover:bg-primary/30 disabled:cursor-not-allowed"
                  aria-label="Previous"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className="ms-4 flex h-[57px] w-[57px] items-center justify-center rounded-full bg-[#1D1D1B] text-white transition-all duration-200 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        {/*</div>*/}
      {/*</div>*/}
    </section>
  );
};

export default ProductsSection;
