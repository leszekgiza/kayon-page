'use client';

import { motion } from 'framer-motion';

const GreenSection = () => {
  return (
    <section className="section-padding bg-accent-green">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
          {/* Left Column */}
          <div>
            {/* Label */}
            <div className="inline-block px-6 py-2 bg-white/30 rounded-full mb-8">
              <span className="text-primary font-bold text-sm">Nasi Klienci</span>
            </div>

            {/* Title */}
            <h2 className="text-[40px] leading-[1.2] font-bold text-primary">
              Kayon oferuje, konkretną odpowiedź na kluczowe wymagania wszystkich grup klientów
            </h2>
          </div>

          {/* Right Column - White Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Produkty, które działają na korzyść użytkownika
              </h3>
              <p className="text-primary mb-6">
                Każde nasze urządzenie zostało zaprojektowane tak, aby:
              </p>
              <ul className="space-y-3">
                {[
                  { text: 'działało długo', detail: '(do 15 lat na baterii),' },
                  { text: 'działało niezawodnie', detail: '(także w warunkach wilgoci, kurzu czy różnic temperatur),' },
                  { text: 'było łatwe w montażu i konfiguracji', detail: '(bez narzędzi specjalistycznych),' },
                  { text: 'było odporne na błędy instalacyjne', detail: '(np. błędne podłączenie nie powoduje uszkodzeń).' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary">
                      <strong>{item.text}</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Jeden system — wszystkie elementy współpracują
              </h3>
              <p className="text-primary mb-6">
                Nasze rozwiązania tworzą kompletny ekosystem: od czujnika, przez koncentrator, aż po aplikacje i dane w chmurze. To oznacza:
              </p>
              <ul className="space-y-3">
                {[
                  { text: 'zdalny odczyt w czasie rzeczywistym', detail: ', bez wizyt na miejscu,' },
                  { text: 'automatyczne alerty i raporty', detail: ', które oszczędzają czas,' },
                  { text: 'pełną kontrolę przez OTA', detail: ' (Over-the-air updates),' },
                  { text: 'mniej stresu i mniej pracy', detail: ' dla instalatorów, administratorów i użytkowników.' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-green flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-primary">
                      <strong>{item.text}</strong>{item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
