'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Licznik ciepła KAYON',
      category: 'Pomiary ciepła',
      description: 'Precyzyjny pomiar zużycia ciepła z możliwością zdalnego odczytu. Spełnia wszystkie normy europejskie.',
      features: ['Zdalny odczyt', 'Długa żywotność baterii', 'Łatwy montaż', 'Zgodność z EED 2023/1791'],
      icon: '🌡️',
    },
    {
      id: 2,
      name: 'Licznik wody KAYON',
      category: 'Pomiary wody',
      description: 'Nowoczesny system pomiaru zużycia wody z funkcją wykrywania wycieków i anomalii.',
      features: ['Wykrywanie wycieków', 'Precyzja pomiarów', 'Bezprzewodowa komunikacja', 'Długoterminowa niezawodność'],
      icon: '💧',
    },
    {
      id: 3,
      name: 'Koncentrator danych',
      category: 'Infrastruktura',
      description: 'Centralny punkt zbierający dane ze wszystkich liczników w budynku.',
      features: ['Bezpieczna transmisja', 'Obsługa wielu urządzeń', 'Cloud connectivity', 'Automatyczne aktualizacje'],
      icon: '📡',
    },
    {
      id: 4,
      name: 'Platforma ALL in KAYON',
      category: 'Oprogramowanie',
      description: 'Kompletne rozwiązanie do zarządzania danymi pomiarowymi z intuicyjnym interfejsem.',
      features: ['Dashboard w czasie rzeczywistym', 'Raporty i analizy', 'Alerty i powiadomienia', 'API dla integracji'],
      icon: '💻',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="section-padding bg-primary text-white relative overflow-hidden" id="produkty">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium">
            Nasze produkty
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
            Produkty wyznaczające nowy standard pomiarów
          </h2>
          <p className="text-lg text-white/80 mt-6">
            Oferujemy nie tylko technologię — oferujemy realne narzędzia do oszczędności, automatyzacji i kontroli.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Product Icon/Visual */}
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-full">
                  <span className="text-8xl">{products[currentIndex].icon}</span>
                </div>
              </div>

              {/* Product Details */}
              <div>
                <span className="text-accent-blue text-sm font-medium uppercase tracking-wider">
                  {products[currentIndex].category}
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4">
                  {products[currentIndex].name}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {products[currentIndex].description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {products[currentIndex].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-accent-green flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors duration-200 font-medium">
                  Dowiedz się więcej
                </button>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-200"
              aria-label="Previous product"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'w-8 bg-accent-blue' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-200"
              aria-label="Next product"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
