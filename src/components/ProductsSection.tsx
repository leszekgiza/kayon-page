'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const ProductsSection = () => {
  const { products } = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section id="produkty" className="bg-[#3C3C3C] py-24 text-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-flex w-max items-center rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-white">
              {products.label}
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-[40px]">
              {products.heading}
            </h2>
            <div className="max-w-lg rounded-[24px] border border-white/30 px-6 py-6">
              <p className="text-sm leading-relaxed text-white/90">
                {products.description}
              </p>
            </div>
            <p className="text-xs uppercase tracking-wide text-white/60">{products.footnote}</p>
          </div>

          {/* Right Column - Carousel */}
          <div className="relative">
            {/* Cards Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {products.groups.map((group) => {
                  const targetHref = group.slug ? `/produkty/${group.slug}` : '/produkty';

                  return (
                    <motion.div
                      key={group.title}
                      className="flex min-w-[calc(33.333%-16px)] flex-col justify-between rounded-[24px] bg-white px-6 py-8 text-primary shadow-lg"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{group.title}</h3>
                        <ul className="mt-4 space-y-2 text-sm text-primary/80">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                              <span>{item}</span>
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

            {/* Navigation Arrows */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-white transition-all duration-200 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dot Navigation */}
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-white transition-all duration-200 hover:bg-primary/30 disabled:opacity-30 disabled:cursor-not-allowed"
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
    </section>
  );
};

export default ProductsSection;
