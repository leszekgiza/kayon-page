'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const OfferSection = () => {
  const { offer } = useContent();

  return (
    <section className="bg-[#2cbceb] py-[165px] text-white" id="oferta">
      <div className="px-4 md:px-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,575px)_minmax(0,1fr)]">
          <div className="space-y-6 text-black md:ml-[100px] md:pl-8">
            <div className="inline-flex w-max items-center rounded-[30px] bg-white/50 px-[30px] py-5 text-2xl font-bold">
              {offer.label}
            </div>
            <h2 className="text-3xl leading-[1.3] md:text-[40px]">{offer.heading}</h2>
            <div className="max-w-xl rounded-[30px] border-2 border-white/30 px-10 py-10 text-xl leading-[1.3] text-black">
              {offer.description}
            </div>
          </div>
          <motion.div
            className="grid gap-10 md:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {offer.cards.map((card) => (
              <div key={card.title} className="flex h-full flex-col justify-between rounded-[20px] bg-white text-primary px-[30px] py-10 shadow-lg">
                <h3 className="text-2xl font-bold leading-[1.2]">{card.title}</h3>
                <ul className="space-y-[18px] text-base leading-[1.4] text-primary/80">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-5">
                      <span className="material-symbols-rounded text-2xl text-[#2cbceb]" aria-hidden="true">
                        check
                      </span>
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
