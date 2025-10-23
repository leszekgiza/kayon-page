'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

interface ProductCategoryPageProps {
  slug: string;
}

const ProductCategoryPage = ({ slug }: ProductCategoryPageProps) => {
  const { productCategories, productDetails } = useContent();
  const category = productCategories?.find((item) => item.slug === slug);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  if (!category) {
    return null;
  }

  const items = category.items
    .map((itemSlug) => productDetails?.[itemSlug])
    .filter((detail): detail is NonNullable<typeof detail> => Boolean(detail));

  const extractDownloadLink = (description: string[]) => {
    for (const para of description) {
      const match = para.match(/https?:\/\/[^\s]+/);
      if (match) return match[0];
    }
    return null;
  };

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom space-y-12 md:space-y-16">
          <div className="space-y-4 text-primary">
            <span className="inline-flex w-max items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary/70">
              {category.title}
            </span>
            <h1 className="text-3xl font-bold md:text-[44px]">{category.title}</h1>
            <p className="text-base text-primary-lighter md:text-lg">{category.description}</p>
          </div>

          <div className="space-y-12">
            {items.map((detail) => {
              const downloadLink = extractDownloadLink(detail.description);
              const visibleFeatures = detail.features.slice(0, 3);
              const hasMoreFeatures = detail.features.length > 3;

              return (
                <article
                  key={detail.slug}
                  className="rounded-[36px] border border-neutral-gray-light/70 bg-neutral-white px-8 py-10 shadow-[0_24px_60px_-35px_rgba(16,16,16,0.35)] md:px-12 md:py-12"
                >
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-primary md:text-[30px]">{detail.title}</h2>
                        <p className="text-base text-primary-lighter md:text-lg">{detail.intro}</p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary md:text-xl">{detail.featuresHeading}</h3>
                        <ul className="space-y-3 text-sm text-primary-lighter md:text-base">
                          {visibleFeatures.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-accent-green" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {hasMoreFeatures && (
                          <button
                            type="button"
                            onClick={() => setExpandedProduct(detail.slug)}
                            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
                          >
                            Czytaj więcej
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/produkty/${detail.slug}`}
                          className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                          {detail.title}
                        </Link>
                        {downloadLink && (
                          <a
                            href={downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-2 text-sm font-semibold text-accent-green transition hover:bg-accent-green/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Pobierz kartę katalogową
                          </a>
                        )}
                      </div>
                    </div>

                    {detail.image && (
                      <div className="relative min-h-[280px] overflow-hidden rounded-[28px] border border-neutral-gray-light/60 bg-white shadow-[0_16px_40px_-25px_rgba(16,16,16,0.25)] sm:min-h-[320px] lg:min-h-[360px]">
                        <Image
                          src={detail.image.src}
                          alt={detail.image.alt}
                          fill
                          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 90vw"
                          className="object-contain p-6 lg:p-8"
                          priority={false}
                        />
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
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
                    <h2 className="text-xl font-semibold text-primary md:text-2xl">{product.title}</h2>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-primary">{product.featuresHeading}</h3>
                      <ul className="mt-4 space-y-3 text-sm text-primary/90 md:text-base">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-accent-green" />
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

export default ProductCategoryPage;
