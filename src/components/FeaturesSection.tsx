'use client';

import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Doświadczenie, które buduje zaufanie',
    },
    {
      title: 'Technologia gotowa na przyszłość',
    },
    {
      title: 'Kayon zyskuje uznanie w całej Europie',
    },
  ];

  return (
    <section className="section-padding bg-neutral-gray-light" id="o-nas">
      <div className="container-custom">
        {/* Features Grid - 3 cols on desktop, 1 col on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-start"
            >
              {/* Icon - simple gray circle with checkmark */}
              <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center bg-neutral-gray rounded-full">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                {feature.title}
              </h3>

              {/* Button */}
              <button className="px-6 py-2.5 md:py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 font-bold text-sm">
                Read more
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
