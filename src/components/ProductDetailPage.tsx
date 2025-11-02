'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';

interface ProductDetailPageProps {
  slug: string;
}

const ProductDetailPage = ({ slug }: ProductDetailPageProps) => {
  const { productDetails, products } = useContent();
  const detail = productDetails?.[slug];

  if (!detail) {
    return (
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="rounded-[28px] border border-neutral-gray-light/60 bg-neutral-gray-light/20 px-6 py-10 text-primary-lighter md:px-10">
            <p className="text-lg font-semibold">Ten produkt jest w przygotowaniu.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span className="inline-flex w-max items-center rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-primary/80">
            {detail.heading}
          </span>
          <Link
            href="/produkty"
            className="inline-flex w-max items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span aria-hidden>←</span>
            {products.label}
          </Link>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-primary md:text-[44px]">{parse(detail.title)}</h1>
          <p className="text-lg leading-relaxed text-primary-lighter md:text-xl">{detail.intro}</p>
          {detail.description.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-primary-lighter md:text-lg">
              {paragraph}
            </p>
          ))}

          {detail.downloads && detail.downloads.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-4">
              {detail.downloads.map((download) => (
                <a
                  key={download.href}
                  href={download.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {download.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
          <div className="space-y-6 rounded-[36px] border border-neutral-gray-light/70 bg-neutral-white px-10 py-12 shadow-[0_24px_60px_-35px_rgba(16,16,16,0.35)]">
            <h2 className="text-xl font-semibold text-primary md:text-[26px]">{detail.featuresHeading}</h2>
            <ul className="space-y-4 text-base text-primary-lighter md:text-lg">
              {detail.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-accent-green" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {detail.image ? (
            <div className="relative min-h-[260px] overflow-hidden rounded-[36px] border border-neutral-gray-light/60 bg-neutral-gray-light/40 shadow-[0_24px_60px_-35px_rgba(16,16,16,0.28)] sm:min-h-[320px] lg:min-h-[360px]">
              <Image
                src={detail.image.src}
                alt={detail.image.alt}
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 60vw, 90vw"
                className="object-contain p-6 lg:p-8"
                priority={false}
              />
            </div>
          ) : (
            <div className="hidden rounded-[36px] border border-neutral-gray-light/60 bg-neutral-gray-light/60 lg:block" />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
