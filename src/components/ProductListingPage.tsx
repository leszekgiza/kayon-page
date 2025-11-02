'use client';

import Link from 'next/link';
import { useContent } from '@/hooks/useContent';

const isInteractiveHref = (href: string | undefined) =>
  href !== undefined && href.trim() !== '' && href !== '#';

const ProductListingPage = () => {
  const { productPage } = useContent();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom space-y-12 md:space-y-16">
        {productPage.cards.map((card) => (
          <article
            key={card.title + (card.subtitle ?? '')}
            className="grid gap-8 rounded-[36px] border border-neutral-gray-light/60 bg-white p-8 shadow-[0_18px_45px_-28px_rgba(16,16,16,0.25)] md:grid-cols-[minmax(0,230px)_minmax(0,1fr)_minmax(0,260px)] md:items-stretch md:gap-10 md:p-10"
          >
            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-primary md:text-[28px]">{card.title}</h1>
                {card.subtitle ? (
                  <p className="text-lg font-medium text-primary-lighter">{card.subtitle}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-3">
                {card.downloads.map((download) => {
                  const interactive = isInteractiveHref(download.href);
                  const baseClasses =
                    'inline-flex w-max items-center rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wide';
                  const sharedClasses = `${baseClasses} ${interactive
                    ? 'bg-primary text-white transition hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                    : 'cursor-not-allowed bg-neutral-gray-light/80 text-primary-light'
                    }`;

                  return interactive ? (
                    <Link key={download.label} href={download.href} className={sharedClasses}>
                      {download.label}
                    </Link>
                  ) : (
                    <span key={download.label} className={sharedClasses} aria-disabled>
                      {download.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-[32px] border border-neutral-gray-light/50 bg-neutral-white px-8 py-10">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-primary md:text-xl">{card.description}</h2>
                <ul className="space-y-3 text-sm text-primary-lighter md:text-base">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-accent-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {(() => {
                const resolvedHref =
                  !card.readMoreHref || card.readMoreHref.trim() === '#'
                    ? card.slug
                      ? `/produkty/${card.slug}`
                      : '#'
                    : card.readMoreHref;
                const interactive = isInteractiveHref(resolvedHref);
                if (!interactive) {
                  return (
                    <span className="inline-flex w-max items-center gap-2 rounded-full bg-primary/70 px-6 py-2 text-sm font-semibold text-white opacity-70">
                      {card.readMoreLabel}
                    </span>
                  );
                }

                return (
                  <Link
                    href={resolvedHref}
                    className="inline-flex w-max items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {card.readMoreLabel}
                  </Link>
                );
              })()}
            </div>

            <div className="hidden min-h-[220px] rounded-[32px] bg-neutral-gray-light/80 md:block" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductListingPage;
