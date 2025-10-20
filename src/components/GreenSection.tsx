'use client';

import { motion } from 'framer-motion';

const clientCards = [
  {
    title: 'Dystrybutorzy',
    description:
      'Cenią nas za elastyczność w dopasowaniu technologii do lokalnych standardów oraz prosty model współpracy. Wspieramy platformami i materiałami, których oczekiwali wcześniej.',
  },
  {
    title: 'Firmy instalatorskie',
    description:
      'Znały intuicyjny montaż, pełną kompatybilność i minimalną awaryjność. Mogą liczyć na szybkie wdrożenie bez konieczności czasochłonnych modyfikacji.',
  },
  {
    title: 'Administratorzy budynków',
    description:
      'Doceniają systemowe rozwiązania Kayon. Oferujemy jeden ekosystem, który automatyzuje raportowanie i monitoruje kluczowe wskaźniki w czasie rzeczywistym.',
  },
];

const GreenSection = () => {
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
              className="grid gap-6 md:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {clientCards.map((card) => (
                <div key={card.title} className="flex h-full flex-col justify-between rounded-[32px] bg-white text-primary shadow-lg">
                  <div className="space-y-5 px-6 py-8">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-primary/80">{card.description}</p>
                  </div>
                  <button className="m-6 inline-flex w-max items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-primary/80">
                    Read more
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              ))}
            </motion.div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    className={`h-2 w-2 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white/40'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:bg-white/10"
                  aria-label="Poprzedni slajd"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 6 9 12l6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-primary transition-colors duration-200 hover:bg-white/80"
                  aria-label="Następny slajd"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 6l6 6-6 6" />
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
