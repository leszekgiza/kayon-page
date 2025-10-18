'use client';

import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    { name: 'Partner 1', logo: '🏢' },
    { name: 'Partner 2', logo: '🏭' },
    { name: 'Partner 3', logo: '🏗️' },
    { name: 'Partner 4', logo: '🏛️' },
    { name: 'Partner 5', logo: '🏪' },
    { name: 'Partner 6', logo: '🏬' },
  ];

  return (
    <section className="py-16 bg-neutral-gray-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-lighter text-sm font-medium uppercase tracking-wider">
            Zaufali nam
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="w-full aspect-square flex items-center justify-center bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <span className="text-4xl">{partner.logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
