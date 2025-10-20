'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Produkty, które działają na korzyść użytkownika',
    bullets: [
      'działają długo – nawet 15 lat na baterii,',
      'są niezawodne w trudnych warunkach,',
      'są łatwe w montażu i konfiguracji (bez użycia specjalistycznych narzędzi),',
      'są odporne na błędy instalacyjne.',
    ],
  },
  {
    title: 'Jeden system ALL in KAYON – współpraca wszystkich elementów',
    bullets: [
      'zdalny odczyt w czasie rzeczywistym, bez wizyt na miejscu,',
      'automatyczne alerty i raporty, które oszczędzają czas,',
      'pełna kontrola i zdalne aktualizacje oprogramowania (OTA – Over-the-Air updates),',
      'mniej stresu i mniej pracy dla instalatorów, administratorów i użytkowników.',
    ],
  },
];

const OfferSection = () => {
  return (
    <section className="bg-[#35A8DD] py-24 text-white" id="oferta-szczegoly">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-6">
            <div className="inline-flex w-max items-center rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-semibold">
              Co oferujemy?
            </div>
            <h2 className="text-3xl leading-tight md:text-[40px]">Łączymy nowoczesne produkty z systemowym podejściem</h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              Usprawniamy codzienne funkcjonowanie i gwarantujemy zadowolenie wszystkim zaangażowanym stronom – od dystrybutora po
              użytkownika końcowego.
            </p>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card) => (
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
