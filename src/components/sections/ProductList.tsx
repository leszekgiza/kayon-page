'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContent } from '@/hooks/useContent';
import HeroSimple from '@/components/sections/HeroSimple';
import parse from 'html-react-parser';
import ProductDetailsModal from '../ui/ProductDetailsModal';
import DownloadButton from '../ui/DownloadButton';

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

          return (
            <article key={detail.slug} className="py-16 last:pb-0 flex justify-between lg:gap-12 border-b-2 last:border-none">

              {/* Left Column - Product Name and Buttons */}
              <div className="md:min-w-[400px] flex flex-col justify-between">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{parse(detail.title)}</h2>
                <div className="flex flex-col gap-3">
                  {hasDownloads ? (
                    <>
                      {detail.downloads!.map((download) => (
                        <DownloadButton key={download.href} href={download.href} text={download.label} />
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
                <p className="mt-2 text-xl font-bold">{parse(detail.intro)}</p>
                <ul className="mt-5 space-y-3 text-sm md:text-base">
                  {visibleFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="material-symbols-rounded mt-0.5 text-[20px] leading-none text-[#77bb61]">
                        arrow_right
                      </span>
                      <span>{parse(feature)}</span>
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

      <ProductDetailsModal
        items={items}
        expandedProduct={expandedProduct}
        setExpandedProduct={setExpandedProduct}
      />

    </>
  );
};

export default ProductList;
