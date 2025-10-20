'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Doświadczenie, które buduje zaufanie',
    description: 'Setki wdrożeń, które pozwoliły nam dopracować technologię na miarę oczekiwań rynku.',
  },
  {
    title: 'Technologia gotowa na przyszłość',
    description: 'Urządzenia spełniające normy, które staną się obowiązkowe dopiero w nadchodzących latach.',
  },
  {
    title: 'Kayon zyskuje uznanie w całej Europie',
    description: 'Partnerzy z wielu krajów wybierają KAYON jako standard pomiarów i zarządzania energią.',
  },
];

const FeaturesSection = () => {
  return (
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
              <button className="mt-10 inline-flex w-max items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black/80">
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
  );
};

export default FeaturesSection;
