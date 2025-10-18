'use client';

import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    { title: 'Co to oznacza w praktyce?' },
    { title: 'Brak przestojów i awarii' },
    { title: 'Oszczędność czasu przy instalacji' },
    { title: 'Proste zarządzanie dużymi zbiorami danych' },
    { title: 'Pełna kompatybilność i elastyczność' },
  ];

  return (
    <section className="section-padding bg-accent-gold" id="korzysci">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            {/* Label */}
            <div className="inline-block px-6 py-2 bg-white/30 rounded-full mb-8">
              <span className="text-primary font-bold text-sm">Jak działamy?</span>
            </div>

            {/* Title */}
            <h2 className="text-[40px] leading-[1.2] font-bold text-primary mb-8">
              Dostarczamy urządzenia i serwis, które minimalizują koszty
            </h2>

            {/* Description Box */}
            <div className="bg-white/20 border-2 border-white/40 rounded-3xl p-8">
              <p className="text-primary leading-relaxed">
                Rozwiązania Kayon są projektowane tak, by każdy uczestnik łańcucha interesariuszy — od dystrybutora, przez instalatora, po zarządcę i mieszkańca nieruchomości — zyskał realne oszczędności, zmniejszenie wydatków, mniej pracy operacyjnej i większą kontrolę.
              </p>
            </div>
          </div>

          {/* Right Column - Benefits Cards */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-start"
              >
                {/* Icon */}
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-neutral-gray rounded-full">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-4">
                  {benefit.title}
                </h3>

                {/* Button */}
                <button className="px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 font-bold text-sm">
                  Read more
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
