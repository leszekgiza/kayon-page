'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';
import SectionLabel from './ui/SectionLabel';
import SectionDescription from './ui/SectionDescription';

const OfferSection = () => {
  const { offer } = useContent();

  return (
    <section id="oferta" className="bg-[#2cbceb] py-[165px] text-white">
      <div className="px-4 md:px-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,575px)_minmax(0,1fr)]">
          <div className="space-y-6 text-black md:ml-[100px] md:pl-8">
            <SectionLabel label={offer.label} bgClass="bg-[#96def6]" />
            <h2 className="text-3xl leading-[1.3] md:text-[40px]">{offer.heading}</h2>
            <SectionDescription text={offer.description} textColorClass="text-[#1D1D1B]" />
          </div>
          <motion.div
            className="grid gap-10 md:grid-cols-2"
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
      </div>
    </section>
  );
};

export default OfferSection;
