'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const OfferSection = () => {
  const { offer } = useContent();

  return (
    <section className="bg-[#35A8DD] py-24 text-white" id="oferta">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-6">
            <div className="inline-flex w-max items-center rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-semibold">
              {offer.label}
            </div>
            <h2 className="text-3xl leading-tight md:text-[40px]">{offer.heading}</h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              {offer.description}
            </p>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {offer.cards.map((card) => (
              <div key={card.title} className="flex h-full flex-col gap-4 rounded-[32px] bg-white text-primary px-6 py-8 shadow-lg">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <ul className="space-y-3 text-sm text-primary/80">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#35A8DD]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
