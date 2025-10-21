'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useContent';

interface ProductCategoryPageProps {
  slug: string;
}

const ProductCategoryPage = ({ slug }: ProductCategoryPageProps) => {
  const { productCategories, productDetails } = useContent();
  const category = productCategories?.find((item) => item.slug === slug);

  if (!category) {
    return null;
  }

  const items = category.items
    .map((itemSlug) => productDetails?.[itemSlug])
    .filter((detail): detail is NonNullable<typeof detail> => Boolean(detail));

  return (
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
          {items.map((detail) => (
            <article
              key={detail.slug}
              className="space-y-8 rounded-[36px] border border-neutral-gray-light/70 bg-neutral-white px-8 py-10 shadow-[0_24px_60px_-35px_rgba(16,16,16,0.35)] md:px-12 md:py-12"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary md:text-[30px]">{detail.title}</h2>
                <p className="text-base text-primary-lighter md:text-lg">{detail.intro}</p>
                {detail.description.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-primary-lighter md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary md:text-xl">{detail.featuresHeading}</h3>
                <ul className="space-y-3 text-sm text-primary-lighter md:text-base">
                  {detail.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-accent-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={`/produkty/${detail.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {detail.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryPage;
