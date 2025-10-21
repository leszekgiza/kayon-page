'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useContent';

interface ProductDetailPageProps {
  slug: string;
}

const ProductDetailPage = ({ slug }: ProductDetailPageProps) => {
  const { productDetails, products } = useContent();
  const detail = productDetails?.[slug];

  if (!detail) {
    return (
      <section className="bg-white py-16 md:py-24">
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
          <h1 className="text-3xl font-bold text-primary md:text-[44px]">{detail.title}</h1>
          <p className="text-lg leading-relaxed text-primary-lighter md:text-xl">{detail.intro}</p>
          {detail.description.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-primary-lighter md:text-lg">
              {paragraph}
            </p>
          ))}
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

          <div className="hidden rounded-[36px] border border-neutral-gray-light/60 bg-neutral-gray-light/60 lg:block" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
