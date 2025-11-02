'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionDescription from '@/components/ui/SectionDescription';

const OfferSection = () => {
  const { offer } = useContent();

  return (
    <section id="oferta" className="bg-[#2cbceb] text-white">
      <div className="mx-auto px-8 md:px-0 py-12 md:py-24 max-w-[1660px] lg:min-h-[800px] flex flex-col md:flex-row justify-between gap-8 md:gap-28">
        <div className="max-w-[510px] flex flex-col gap-8 md:gap-y-16 text-primary">
          <SectionLabel label={offer.label} bgClass="bg-[#96def6]" />
          <h2 className="text-3xl leading-[1.3] md:text-[40px]">{parse(offer.heading)}</h2>
          <SectionDescription text={offer.description} textColorClass="text-[#1D1D1B]" />
        </div>

        <motion.div
          className="md:w-[55%] flex flex-wrap md:flex-nowrap justify-between md:justify-normal gap-8 md:gap-x-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {offer.cards.map((card) => (
            <div key={card.title} className="px-6 py-8 md:w-[410px] flex h-full flex-col gap-4 rounded-[32px] bg-white text-primary shadow-lg">
              <h3 className="text-2xl font-semibold">{parse(card.title)}</h3>
              <p className="my-2"><strong>{parse(card.textBeforeBullets)}</strong></p>
              <ul className="space-y-3 text-sm text-primary/80">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-5">
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
    </section>
  );
};

export default OfferSection;
