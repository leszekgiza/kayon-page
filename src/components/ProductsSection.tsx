'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const ProductsSection = () => {
  const { products } = useContent();

  return (
    <section id="produkty" className="bg-[#1F1F1F] py-24 text-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <div className="inline-flex w-max items-center rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-white/80">
              {products.label}
            </div>
            <h2 className="text-3xl leading-tight md:text-[40px]">{products.heading}</h2>
            <div className="max-w-lg rounded-[30px] border-2 border-white/30 px-8 py-8 md:px-10 md:py-10">
              <p className="text-sm leading-relaxed text-white/90 md:text-base">
                {products.description}
              </p>
            </div>
            <p className="text-xs uppercase tracking-wide text-white/50">{products.footnote}</p>
          </div>
          <div className="space-y-6">
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {products.groups.map((group) => {
                const targetHref = group.slug ? `/produkty/${group.slug}` : '/produkty';

                return (
                  <div key={group.title} className="flex h-full flex-col justify-between rounded-[32px] bg-[#2A2A2A] px-6 py-8 shadow-lg">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                      <ul className="mt-4 space-y-2 text-sm text-white/70">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="inline-flex h-2 w-2 rounded-full bg-white/60" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={targetHref}
                      className="mt-6 inline-flex w-max items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                    >
                      {products.ctaLabel}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
