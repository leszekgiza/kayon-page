'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';

const OfferSection = () => {
  const { offer } = useContent();

  return (
    <section className="bg-[#2cbceb] py-24 text-white" id="oferta">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.67fr_1fr]">
          <div className="space-y-6 text-black">
            <div className="inline-flex w-max items-center rounded-full border border-black/20 bg-white/40 px-6 py-2 text-sm font-semibold">
              {offer.label}
            </div>
            <h2 className="text-3xl leading-tight md:text-[40px]">{offer.heading}</h2>
            <div className="max-w-xl rounded-[40px] border-2 border-white/30 bg-white/10 px-10 py-10 text-sm leading-relaxed text-black md:text-base">
              {offer.description}
            </div>
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
                <h3 className="text-lg font-semibold">{parse(card.title)}</h3>
                <p className="my-2"><strong>{parse(card.textBeforeBullets)}</strong></p>
                <ul className="space-y-3 text-sm text-primary/80">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="material-symbols-rounded text-2xl text-[#2cbceb]" aria-hidden="true">
                        check
                      </span>
                      <span>{parse(bullet)}</span>
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
