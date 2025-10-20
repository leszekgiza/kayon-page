'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const clientCards = [
  {
    title: 'Dystrybutorzy',
    description:
      'Cenią nas za elastyczność w dopasowaniu technologii do lokalnych standardów oraz prosty model integracji systemu ALL in KAYON z innymi platformami dystrybucyjnymi. Mogą sprzedawać rozwiązanie kompletne, skalowalne i gotowe do wdrożenia bez kosztownych modyfikacji.',
  },
  {
    title: 'Firmy instalatorskie',
    description:
      'Doceniają intuicyjny montaż, pełną kompatybilność komponentów i odporność sprzętu na błędy instalacyjne. Instalacja przebiega szybko, bez specjalistycznych narzędzi, a konfiguracja sprowadza się do kilku logicznych kroków.',
  },
  {
    title: 'Administratorzy budynków',
    description:
      'Otrzymują pełną kontrolę nad infrastrukturą w jednym miejscu. ALL in KAYON łączy dane z wielu obiektów – wszystko, od liczników po alerty i koszty, dostępne jest w czasie rzeczywistym i zawsze pod ręką.',
  },
  {
    title: 'Zarządcy nieruchomości',
    description:
      'Mają pewność nieprzerwanych odczytów i zdalny dostęp do uporządkowanych danych. System umożliwia błyskawiczne raportowanie zużycia, identyfikację nieprawidłowości oraz natychmiastowy dostęp do historii pomiarów.',
  },
  {
    title: 'Wspólnoty i spółdzielnie',
    description:
      'Zyskują przejrzystość rozliczeń i łatwość weryfikacji zużycia wśród mieszkańców. Każdy lokator ma dostęp do danych o własnym zużyciu, co odciąża administrację i redukuje liczbę zapytań.',
  },
];

const GreenSection = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const baseCards = useMemo(() => clientCards, []);
  const baseLength = baseCards.length;
  const extendedCards = useMemo(() => [...baseCards, ...baseCards, ...baseCards], [baseCards]);
  const extendedLength = extendedCards.length;
  const [index, setIndex] = useState(baseLength);
  const [animateTransition, setAnimateTransition] = useState(true);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    const needsReset =
      index >= baseLength * 2 ? -baseLength : index < baseLength ? baseLength : 0;

    if (needsReset !== 0) {
      const timeout = setTimeout(() => {
        setAnimateTransition(false);
        setIndex((prev) => prev + needsReset);
      }, 450);
      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [index, baseLength]);

  useEffect(() => {
    if (!animateTransition) {
      const raf = requestAnimationFrame(() => setAnimateTransition(true));
      return () => cancelAnimationFrame(raf);
    }
    return undefined;
  }, [animateTransition]);

  const trackStyle = useMemo(() => {
    const translatePercent = (index * 100) / extendedLength;
    return {
      width: `${(extendedLength * 100) / visibleCount}%`,
      transform: `translateX(-${translatePercent}%)`,
    };
  }, [index, extendedLength, visibleCount]);

  const cardStyle = useMemo(() => ({ width: `${100 / extendedLength}%` }), [extendedLength]);

  const activeDot = useMemo(() => {
    const normalized = (index - baseLength) % baseLength;
    return (normalized + baseLength) % baseLength;
  }, [index, baseLength]);

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);
  const handleDot = (dotIndex: number) => setIndex(baseLength + dotIndex);

  return (
    <section id="oferta" className="relative overflow-hidden bg-gradient-to-r from-[#2F8E5C] via-[#2F8E5C] to-[#4ABF73] py-24 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="mx-auto h-full w-full max-w-5xl rounded-full border border-white/20 blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-max items-center rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-semibold">
              Nasi klienci
            </div>
            <h2 className="text-3xl leading-tight md:text-[40px]">
              Kayon oferuje konkretną odpowiedź na kluczowe wymagania wszystkich grup klientów
            </h2>
            <div className="w-full max-w-xl rounded-[40px] border border-white/30 bg-white/10 px-8 py-6 text-sm leading-relaxed md:text-base">
              To wszystko realizujemy z zachowaniem wysokiej efektywności energetycznej i minimalnego wpływu na środowisko. Dobrze
              zaprojektowane urządzenia muszą działać oszczędnie i bezawaryjnie – z korzyścią dla ludzi i planety.
            </div>
          </div>
          <div className="space-y-8">
            <div className="overflow-hidden">
              <motion.div
                style={trackStyle}
                className="flex gap-6"
                initial={false}
                animate={{ transform: trackStyle.transform }}
                transition={
                  animateTransition
                    ? { duration: 0.45, ease: 'easeInOut' }
                    : { duration: 0 }
                }
              >
                {extendedCards.map((card, cardIndex) => (
                  <div
                    key={card.title}
                    style={cardStyle}
                    className="flex-shrink-0 rounded-[32px] bg-white px-6 py-8 text-primary shadow-lg"
                  >
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-primary/80 md:text-base">{card.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {clientCards.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    onClick={() => handleDot(dotIndex)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      dotIndex === activeDot ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Pokaż grupę ${dotIndex + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:bg-white/10"
                  aria-label="Poprzednia grupa klientów"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 6 9 12l6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-primary transition-colors duration-200 hover:bg-white/80"
                  aria-label="Następna grupa klientów"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m9 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
