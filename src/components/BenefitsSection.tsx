'use client';

import { motion } from 'framer-motion';

const benefits = [
  { title: 'Co to oznacza w praktyce?' },
  { title: 'Brak przestojów i awarii' },
  { title: 'Oszczędność czasu przy instalacji' },
  { title: 'Proste zarządzanie dużymi zbiorami danych' },
  { title: 'Pełna kompatybilność i elastyczność' },
];

const BenefitIcon = () => (
  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-black/80 text-white shadow">
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6v12m6-6H6" />
    </svg>
  </div>
);

const BenefitsSection = () => {
  return (
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
              Rozwiązania Kayon są projektowane tak, by każdy uczestnik łańcucha interesariuszy — od dystrybutora, przez instalatora, po
              zarządcę i mieszkańca nieruchomości — zyskał realne oszczędności, zmniejszenie wydatków, mniej pracy operacyjnej i większą kontrolę.
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
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col rounded-[28px] bg-white/70 px-6 py-6 shadow">
                  <BenefitIcon />
                  <h3 className="text-base font-semibold text-black">{benefit.title}</h3>
                  <button className="mt-4 inline-flex w-max items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-black/80">
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
  );
};

export default BenefitsSection;
