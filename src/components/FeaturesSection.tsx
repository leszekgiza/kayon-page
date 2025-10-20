'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
  detail: string[];
};

const features: Feature[] = [
  {
    title: 'Doświadczenie, które buduje zaufanie',
    description: 'Setki wdrożeń, które pozwoliły nam dopracować technologię na miarę oczekiwań rynku.',
    detail: [
      'Kayon to polska firma technologiczna. Dysponujemy wieloletnim doświadczeniem w projektowaniu i produkcji nowoczesnych urządzeń oraz systemów do zdalnego odczytu wody i ciepła.',
      'Nasz zespół tworzą inżynierowie i specjaliści z ponad dwudziestoletnim doświadczeniem w branży pomiarowej – ludzie, którzy współtworzyli obowiązujące dziś standardy.',
      'Dzięki temu nasze rozwiązania są nie tylko dopracowane technicznie, ale też trwałe, sprawdzone i przyjazne w obsłudze – gotowe na wyzwania przyszłości.',
    ],
  },
  {
    title: 'Technologia gotowa na przyszłość',
    description: 'Urządzenia spełniające normy, które staną się obowiązkowe dopiero w nadchodzących latach.',
    detail: [
      'Przewaga naszych rozwiązań wynika nie tylko z jakości urządzeń, ale także z oprogramowania. System ALL in KAYON umożliwia zarządzanie i raportowanie danych z tysięcy liczników jednocześnie.',
      'Zastępuje czasochłonne papierowe raporty, rozbudowane tabele Excel i inne programy jednym, prostym środowiskiem pracy dla wszystkich interesariuszy. Interfejs jest przejrzysty i intuicyjny, dzięki czemu administratorzy, zarządcy i instalatorzy mogą łatwo kontrolować zużycie, generować raporty i komunikować się z lokatorami.',
      'ALL in KAYON umożliwia korzystanie z dowolnych urządzeń pomiarowych dowolnych producentów, dzięki czemu nasi klienci otrzymują swobodę w doborze urządzeń i niezależność od zamkniętych systemów.',
    ],
  },
  {
    title: 'Kayon zyskuje uznanie w całej Europie',
    description: 'Partnerzy z wielu krajów wybierają KAYON jako standard pomiarów i zarządzania energią.',
    detail: [
      'Nasze rozwiązania z powodzeniem działają w Polsce, a także w Czechach, na Ukrainie i na rynkach Europy Zachodniej.',
      'Od 2025 roku są dostępne w Niemczech i całej Europie za pośrednictwem firmy GWF AG – renomowanego szwajcarskiego dostawcy precyzyjnych technologii pomiarowych.',
      'Obecnie Kayon jest już obecny na rynku niemieckim samodzielnie, rozwijając własną sieć partnerów i dystrybucji.',
    ],
  },
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  useEffect(() => {
    if (activeFeature === null) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveFeature(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeFeature]);

  return (
    <>
      <section id="dla-kogo" className="relative bg-gradient-to-r from-[#F2F2F2] via-[#EAEAEA] to-[#F2F2F2] py-20 md:py-28">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative flex h-full flex-col justify-between rounded-[48px] border border-white/40 bg-white/60 px-10 py-12 shadow-sm backdrop-blur"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/80 text-white shadow-lg">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-primary md:text-2xl">{feature.title}</h3>
                  <p className="text-sm text-primary/80 md:text-base">{feature.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveFeature(index)}
                  className="mt-10 inline-flex w-max items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black/80"
                >
                  Read more
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeFeature !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveFeature(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="features-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl rounded-[32px] bg-white px-8 py-10 text-primary shadow-[0_45px_90px_rgba(0,0,0,0.45)] md:px-14 md:py-12"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveFeature(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
                aria-label="Zamknij"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
              <h2 id="features-modal-title" className="text-xl font-semibold text-primary md:text-2xl">
                {features[activeFeature].title}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-primary/90 md:text-base">
                {features[activeFeature].detail.map((paragraph) => (
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

export default FeaturesSection;
