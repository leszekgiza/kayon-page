'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import KayonLogo from './KayonLogo';

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
      // Match both absolute URLs (http://, https://) and relative paths starting with /
      const match = para.match(/(https?:\/\/|\/)[^\s]+\.(pdf|PDF)/);
      if (match) return match[0];
    }
    return null;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] overflow-hidden bg-[#3C3C3C] text-white">
        {/* Decorative circle elements */}
        <div className="pointer-events-none absolute left-[15%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-[10%] top-1/2 h-[120px] w-[120px] -translate-y-1/2 rounded-full bg-white/5" />

        <div className="container-custom relative z-10 flex min-h-[400px] items-center py-20">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[auto_1fr]">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <KayonLogo className="h-16 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] md:h-20 lg:h-24" />
            </div>

            {/* Title and Description - stacked vertically */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">{category.title}</h1>
              <div className="max-w-md rounded-[28px] border border-white/25 bg-white/10 px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">
                <p className="text-sm leading-relaxed text-white/90 md:text-base">{category.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom space-y-16 md:space-y-20">
          {items.map((detail) => {
            const downloadLink = extractDownloadLink(detail.description);
            const visibleFeatures = detail.features.slice(0, 3);
            const hasMoreFeatures = detail.features.length > 3;

            return (
              <article key={detail.slug} className="grid gap-8 lg:grid-cols-[280px_1fr_auto] lg:gap-12">
                {/* Left Column - Product Name and Buttons */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-primary md:text-4xl">{detail.title}</h2>
                    <p className="mt-2 text-base text-primary-lighter">{detail.intro}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {slug !== 'cieplomierze' && (
                      <Link
                        href={`/produkty/${detail.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Więcej
                      </Link>
                    )}
                    {downloadLink && (
                      <a
                        href={downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Pobierz PDF
                      </a>
                    )}
                  </div>
                </div>

                {/* Center Column - Description Card */}
                <div className="rounded-[32px] bg-neutral-gray-light/30 px-8 py-8 md:px-10 md:py-10">
                  <h3 className="text-base font-semibold text-primary md:text-lg">{detail.featuresHeading}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-primary-lighter md:text-base">
                    {visibleFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary" />
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
                      Więcej
                    </button>
                  )}
                </div>

                {/* Right Column - Product Image */}
                {detail.image && (
                  <div className="relative h-[280px] w-full overflow-hidden rounded-[28px] bg-neutral-gray-light/30 lg:h-auto lg:w-[320px]">
                    <Image
                      src={detail.image.src}
                      alt={detail.image.alt}
                      fill
                      sizes="(min-width: 1024px) 320px, 100vw"
                      className="object-contain p-6 lg:p-8"
                      priority={false}
                    />
                  </div>
                )}
              </article>
            );
          })}
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
                    <h2 className="pr-14 text-xl font-semibold text-primary md:text-2xl">{product.title}</h2>

                    {/* Product intro */}
                    {product.intro && (
                      <p className="mt-6 text-base leading-relaxed text-primary">{product.intro}</p>
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

export default ProductCategoryPage;
