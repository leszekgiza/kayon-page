'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import HeroSimple from '@/components/sections/HeroSimple';
import parse from 'html-react-parser';

interface ProductListProps {
  slug: string;
}

const ProductList = ({ slug }: ProductListProps) => {
  const { productCategories, productDetails } = useContent();
  const category = productCategories?.find((item) => item.slug === slug);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  if (!category) {
    return null;
  }

  const items = category.items
    .map((itemSlug) => productDetails?.[itemSlug])
    .filter((detail): detail is NonNullable<typeof detail> => Boolean(detail));

  return (
    <>
      <HeroSimple title={category.title} desc={category.description} />

      {/* Products Section */}
      <section className="mx-auto px-8 md:px-0 py-12 md:py-24 max-w-[1440px]">
        {items.map((detail, index) => {
          const hasDownloads = detail.downloads && detail.downloads.length > 0;
          const visibleFeatures = detail.features.slice(0, 3);
          const hasMoreFeatures = detail.features.length > 3;

          // Default layout for other categories
          return (
            <article key={detail.slug} className="py-16 last:pb-0 flex justify-between lg:gap-12 border-b-2 last:border-none">

              {/* Left Column - Product Name and Buttons */}
              <div className="md:min-w-[400px] flex flex-col justify-between">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{parse(detail.title)}</h2>
                <div className="flex flex-col gap-3">
                  {hasDownloads ? (
                    <>
                      {detail.downloads!.map((download) => (
                        <a
                          key={download.href}
                          href={download.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 w-max text-sm font-bold bg-[#747171] text-white transition hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                          {download.label}
                          <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64592 4.49996L0.208415 1.06246C0.13897 0.993014 0.083415 0.92357 0.0417485 0.854126C0.0139708 0.770792 8.18968e-05 0.687458 8.18968e-05 0.604125C8.18968e-05 0.451348 0.0556374 0.312459 0.166748 0.187459C0.291748 0.0624588 0.444526 -4.1008e-05 0.625082 -4.1008e-05H7.95842C8.13897 -4.1008e-05 8.2848 0.0694032 8.39592 0.208292C8.52092 0.333292 8.58342 0.472181 8.58342 0.624959C8.58342 0.666626 8.51397 0.812459 8.37508 1.06246L4.93758 4.49996C4.85425 4.58329 4.75008 4.64579 4.62508 4.68746C4.51397 4.72913 4.40286 4.74996 4.29175 4.74996C4.18064 4.74996 4.06258 4.72913 3.93758 4.68746C3.82647 4.64579 3.72925 4.58329 3.64592 4.49996Z" fill="white" />
                          </svg>

                        </a>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={`/produkty/${detail.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 w-max text-sm font-bold bg-[#747171] text-white transition hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {category.moreButtonLabel}
                    </Link>
                  )}
                </div>
              </div>

              {/* Center Column - Description Card */}
              <div className="md:w-[500px] rounded-[30px] border-2 border-[#EAEAEA] text-primary px-8 py-8 md:px-10 md:py-10">
                {/* <h3 className="text-base text-primary md:text-lg">{parse(detail.featuresHeading)}</h3> */}
                <p className="mt-2 text-xl font-bold">{parse(detail.intro)}</p>
                <ul className="mt-5 space-y-3 text-sm md:text-base">
                  {visibleFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="material-symbols-rounded mt-0.5 text-[20px] leading-none text-[#77bb61]">
                        arrow_right
                      </span>
                      {/* <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary" /> */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {hasMoreFeatures && (
                  <button
                    type="button"
                    onClick={() => setExpandedProduct(detail.slug)}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {category.moreButtonLabel}
                  </button>
                )}
              </div>

              {/* Right Column - Product Image */}
              {detail.image && (
                <div className="relative h-auto md:w-[500px] overflow-hidden rounded-[28px]">
                  <Image
                    src={detail.image.src}
                    alt={detail.image.alt}
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-contain h-auto"
                    fill
                    priority={false}
                  />
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* Modal with full features list */}
      <AnimatePresence>
        {expandedProduct && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedProduct(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl rounded-[32px] bg-white px-8 py-10 text-primary shadow-[0_45px_90px_rgba(0,0,0,0.45)] md:px-14 md:py-12"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setExpandedProduct(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
                aria-label="Zamknij"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>

              {(() => {
                const product = items.find((item) => item.slug === expandedProduct);
                if (!product) return null;

                return (
                  <>
                    <h2 className="pr-14 text-xl font-semibold text-primary md:text-2xl">{parse(product.title)}</h2>

                    {/* Product intro */}
                    {product.intro && (
                      <p className="mt-6 text-lg leading-relaxed text-primary font-bold">{parse(product.intro)}</p>
                    )}

                    {/* Additional description paragraphs */}
                    {product.description && product.description.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {product.description.map((paragraph, index) => (
                          <p key={index} className="text-base leading-relaxed text-primary/90">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Features section */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-primary">{product.featuresHeading}</h3>
                      <ul className="mt-4 space-y-3 text-sm text-primary/90 md:text-base">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductList;
