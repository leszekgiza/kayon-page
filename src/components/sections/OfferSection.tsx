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
      <div className="lg:px-10 xl:px-20 2xl:px-0 py-12 2xl:py-24 max-w-[1400px] mx-auto lg:min-h-[800px] flex flex-col 2xl:flex-row justify-between gap-8 2xl:gap-28">
        <div id='offersection-left-col' className="2xl:max-w-[600px] flex flex-col gap-8 md:gap-y-8 2xl:gap-y-16 justify-center text-primary">
          <SectionLabel label={offer.label} bgClass="bg-[#96def6]" />
          <h2 className="text-3xl leading-[1.3] md:text-[40px]">{parse(offer.heading)}</h2>
          <SectionDescription text={offer.description} textColorClass="text-[#1D1D1B]" />
        </div>

        <motion.div
          className="2xl:w-[55%] flex flex-wrap md:flex-nowrap justify-between md:justify-normal gap-8 md:gap-x-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {offer.cards.map((card) => (
            <div key={card.title} className="px-6 py-8 md:w-1/2 xl:w-[410px] md:min-h-[600px] xl:min-h-[600px] flex flex-col gap-4 rounded-[32px] bg-white text-primary shadow-lg">
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
