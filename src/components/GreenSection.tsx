'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const clientCards = [
  {
    title: 'Dystrybutorzy',
    description:
      'Cenią nas za elastyczność w dopasowaniu technologii do lokalnych standardów oraz prosty model integracji systemu ALL in KAYON z innymi platformami dystrybucyjnymi, które oferowali wcześniej. Mogą sprzedawać produkt kompletny, skalowalny i gotowy do wdrożenia bez kosztownych modyfikacji.',
  },
  {
    title: 'Firmy instalatorskie',
    description:
      'Doceniają intuicyjny montaż, pełną kompatybilność komponentów i wysoką odporność sprzętu na błędy montażowe. Instalacja przebiega szybko, bez specjalistycznych narzędzi, a konfiguracja sprowadzona jest do kilku logicznych kroków.',
  },
  {
    title: 'Administratorzy budynków',
    description:
      'Otrzymują pełną kontrolę nad infrastrukturą w jednym miejscu. ALL in KAYON łączy dane z wielu obiektów w jeden system – wszystko, od liczników po alerty i koszty, dostępne jest w czasie rzeczywistym i zawsze pod ręką.',
  },
  {
    title: 'Zarządcy nieruchomości',
    description:
      'Mają pewność nieprzerwanych odczytów i zdalny dostęp do uporządkowanych danych. System umożliwia błyskawiczne raportowanie zużycia, identyfikację nieprawidłowości oraz natychmiastowy dostęp do historii pomiarów – bez ryzyka utraty informacji.',
  },
  {
    title: 'Wspólnoty i spółdzielnie mieszkaniowe',
    description:
      'Zyskują przejrzystość rozliczeń i łatwość weryfikacji zużycia wśród mieszkańców. Każdy lokator ma dostęp do danych o własnym zużyciu, co odciąża obsługę i ogranicza liczbę zapytań.',
  },
];

const GreenSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const prevCard = () => {
    setActiveCard((prev) => (prev === 0 ? clientCards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setActiveCard((prev) => (prev === clientCards.length - 1 ? 0 : prev + 1));
  };

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
            <motion.div
              key={clientCards[activeCard].title}
              className="rounded-[32px] bg-white text-primary shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-5 px-8 py-10">
                <h3 className="text-lg font-semibold">{clientCards[activeCard].title}</h3>
                <p className="text-sm leading-relaxed text-primary/80 md:text-base">{clientCards[activeCard].description}</p>
              </div>
            </motion.div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {clientCards.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveCard(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${index === activeCard ? 'bg-white' : 'bg-white/40'}`}
                    aria-label={`Pokaż grupę klientów ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevCard}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:bg-white/10"
                  aria-label="Poprzednia grupa klientów"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 6 9 12l6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextCard}
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
