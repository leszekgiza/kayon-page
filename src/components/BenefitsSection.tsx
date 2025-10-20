'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Benefit = {
  title: string;
  detail: string[];
};

const benefits: Benefit[] = [
  {
    title: 'Opłaty wyłącznie za realne zużycie',
    detail: [
      'Dokładne i stabilne pomiary eliminują szacowanie oraz niedoszacowania.',
      'To przejrzyste, sprawiedliwe rozliczenia, które budują zaufanie i długoterminową współpracę.',
    ],
  },
  {
    title: 'Brak przestojów i awarii',
    detail: [
      'Urządzenia działają do 15 lat na jednej baterii.',
      'Dzięki temu użytkownicy – od instalatora po administratora – mogą skupić się na zarządzaniu, a nie na naprawianiu.',
    ],
  },
  {
    title: 'Oszczędność czasu przy instalacji',
    detail: [
      'Sprzęt typu „plug & play” można szybko zamontować nawet w trudnych warunkach.',
      'Konfiguracja sprowadza się do kilku prostych kroków i może być wykonana zdalnie, bez fizycznego dostępu do urządzenia.',
    ],
  },
  {
    title: 'Proste zarządzanie dużymi zbiorami danych',
    detail: [
      'Aplikacje mobilne i webowe są intuicyjne, przejrzyste i dostępne z każdego miejsca.',
      'Odczyty, historia, raporty i alarmy – wszystko zorganizowane tak, by maksymalnie ułatwić życie zarządcom i wspólnotom.',
    ],
  },
  {
    title: 'Pełna kompatybilność i elastyczność',
    detail: [
      'Nasze urządzenia obsługują najpopularniejsze protokoły (MBus, wMBus, LoRaWAN, NB-IoT, LTE, Bluetooth).',
      'Klient decyduje, z jakiego sprzętu chce korzystać, zachowując pełną niezależność od pojedynczych producentów.',
    ],
  },
];

const BenefitIcon = () => (
  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-black/80 text-white shadow">
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6v12m6-6H6" />
    </svg>
  </div>
);

const BenefitsSection = () => {
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);

  useEffect(() => {
    if (activeBenefit === null) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveBenefit(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeBenefit]);

  return (
    <>
      <section className="bg-[#E8A33C] py-24 text-primary" id="jak-dzialamy">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-6 text-black">
              <div className="inline-flex w-max items-center rounded-full border border-black/20 bg-white/40 px-6 py-2 text-sm font-semibold">
                Jak działamy?
              </div>
              <h2 className="text-3xl leading-tight md:text-[40px]">
                Dostarczamy urządzenia i serwis, które minimalizują koszty
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-black/70 md:text-base">
                Rozwiązania Kayon są projektowane tak, by każdy uczestnik łańcucha interesariuszy – od dystrybutora, przez instalatora, po
                zarządcę i mieszkańca nieruchomości – zyskał realne oszczędności, zmniejszenie wydatków, mniej pracy operacyjnej i większą kontrolę.
              </p>
            </div>
            <div>
              <motion.div
                className="grid gap-6 md:grid-cols-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex flex-col rounded-[28px] bg-white/70 px-6 py-6 shadow">
                    <BenefitIcon />
                    <h3 className="text-base font-semibold text-black">{benefit.title}</h3>
                    <button
                      type="button"
                      onClick={() => setActiveBenefit(index)}
                      className="mt-4 inline-flex w-max items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-black/80"
                    >
                      Read more
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeBenefit !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveBenefit(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="benefits-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl rounded-[32px] bg-white px-8 py-10 text-primary shadow-[0_45px_90px_rgba(0,0,0,0.45)] md:px-14 md:py-12"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveBenefit(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
                aria-label="Zamknij"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
              <h2 id="benefits-modal-title" className="text-xl font-semibold text-primary md:text-2xl">
                {benefits[activeBenefit].title}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-primary/90 md:text-base">
                {benefits[activeBenefit].detail.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BenefitsSection;
