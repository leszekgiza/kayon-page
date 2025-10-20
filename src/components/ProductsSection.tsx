'use client';

import { motion } from 'framer-motion';

const productGroups = [
  {
    title: 'Wodomierze',
    items: ['Wehrle', 'Maddalena', 'Wassergeräte', 'SonicoNano (GWF)', 'Apator Smart'],
  },
  {
    title: 'Ciepłomierze',
    items: ['Engelman SensoStar', 'Maddalena MicroClima', 'RC12 PloMeter'],
  },
  {
    title: 'Moduły komunikacyjne',
    items: ['Modularis One', 'wMBus Smart+', 'MBus Smart+', 'wMBus MicroClima', 'wMBus RC12'],
  },
  {
    title: 'Systemy i platformy',
    items: [
      'Aplikacja mobilna Route One',
      'Platforma OpenMetering (2WayCom, FOTA)',
      'Portal dystrybutora',
      'Dashboard technologiczny',
    ],
  },
  {
    title: 'Infrastruktura',
    items: ['Range One', 'Koncentrator AC', 'Koncentrator BAT', 'Repeater'],
  },
];

const ProductsSection = () => {
  return (
    <section id="produkty" className="bg-[#1F1F1F] py-24 text-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <div className="inline-flex w-max items-center rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-white/80">
              Produkty
            </div>
            <h2 className="text-3xl leading-tight md:text-[40px]">Produkty wyznaczające nowy standard pomiarów</h2>
            <p className="max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
              Oferujemy nie tylko technologię – dostarczamy narzędzia do oszczędności, automatyzacji i kontroli. Nasze produkty tworzą spójny
              system ALL in KAYON, w którym każdy element współpracuje z pozostałymi.
            </p>
            <p className="text-xs uppercase tracking-wide text-white/50">
              Produkcja wszystkich urządzeń Kayon odbywa się w 100% na terenie Unii Europejskiej, zgodnie z normami CE, RED i EMC.
            </p>
          </div>
          <div className="space-y-6">
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {productGroups.map((group) => (
                <div key={group.title} className="flex h-full flex-col justify-between rounded-[32px] bg-[#2A2A2A] px-6 py-8 shadow-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="inline-flex h-2 w-2 rounded-full bg-white/60" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-6 inline-flex w-max items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-white/10">
                    Dowiedz się więcej
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              ))}
            </motion.div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <span key={dot} className={`h-2 w-2 rounded-full ${dot === 2 ? 'bg-white' : 'bg-white/30'}`} aria-hidden />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white/10"
                  aria-label="Poprzedni"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 6 9 12l6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-primary transition-colors duration-200 hover:bg-white/80"
                  aria-label="Następny"
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

export default ProductsSection;
