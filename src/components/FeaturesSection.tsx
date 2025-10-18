'use client';

import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Doświadczenie, które buduje zaufanie',
      description: 'Od 2017 roku dostarczamy sprawdzone rozwiązania, które działają w Polsce, Czechach, Ukrainie oraz krajach Europy Zachodniej.',
    },
    {
      icon: '🚀',
      title: 'Technologia gotowa na przyszłość',
      description: 'Nasze systemy już dziś spełniają wymogi dyrektywy EED 2023/1791, która stanie się obowiązkowa w 2027 roku.',
    },
    {
      icon: '🌍',
      title: 'Kayon zyskuje uznanie w całej Europie',
      description: 'Współpracujemy ze szwajcarską firmą GWF - liderem na rynku systemów pomiarowych w Europie.',
    },
  ];

  return (
    <section className="section-padding bg-neutral-white" id="o-nas">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-2 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">
            Dlaczego KAYON?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-6 mb-4">
            Kayon oferuje konkretną odpowiedź na kluczowe wymagania wszystkich grup klientów
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl border border-neutral-gray-light hover:border-accent-blue hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary-lighter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
