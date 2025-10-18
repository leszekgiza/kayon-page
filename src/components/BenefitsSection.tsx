'use client';

import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Minimalizacja kosztów',
      description: 'Zmniejszenie wydatków operacyjnych i inwestycyjnych.',
    },
    {
      icon: '⚡',
      title: 'Szybka instalacja',
      description: 'Prosty montaż bez skomplikowanej infrastruktury.',
    },
    {
      icon: '📊',
      title: 'Pełna kontrola',
      description: 'Dostęp do danych w czasie rzeczywistym.',
    },
    {
      icon: '🔒',
      title: 'Bezpieczeństwo danych',
      description: 'Szyfrowane połączenia i bezpieczna chmura.',
    },
    {
      icon: '🛠️',
      title: 'Wsparcie techniczne',
      description: 'Kompleksowy serwis i pomoc techniczna.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-gray-light to-neutral-white" id="korzysci">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 bg-accent-yellow/10 text-accent-yellow rounded-full text-sm font-medium">
            Korzyści
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-6 mb-4">
            Dostarczamy urządzenia i serwis, które minimalizują koszty
          </h2>
          <p className="text-lg text-primary-lighter mt-6">
            Rozwiązania Kayon są projektowane tak, by każdy uczestnik łańcucha interesariuszy — od dystrybutora, przez instalatora, po zarządcę i mieszkańca nieruchomości — zyskał realne oszczędności, zmniejszenie wydatków, mniej pracy operacyjnej i większą kontrolę.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-accent-blue/10 rounded-lg">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-lighter">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Key Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent-blue to-accent-purple p-12 rounded-3xl text-white"
          >
            <h3 className="text-2xl font-bold mb-6">
              Produkty, które działają na korzyść użytkownika
            </h3>
            <p className="mb-8 opacity-90">
              Każde nasze urządzenie zostało zaprojektowane tak, aby:
            </p>
            <ul className="space-y-4">
              {[
                'Działało niezawodnie przez lata',
                'Było łatwe w instalacji i obsłudze',
                'Generowało oszczędności od pierwszego dnia',
                'Spełniało obecne i przyszłe normy',
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <svg
                    className="w-6 h-6 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
