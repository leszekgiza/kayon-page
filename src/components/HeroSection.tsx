'use client';

import { motion } from 'framer-motion';
import KayonLogo from './KayonLogo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-white overflow-hidden">
      {/* Decorative elements - exact from Figma */}
      <div className="absolute top-20 left-32">
        <div className="w-32 h-8 bg-accent-blue rounded-full transform -rotate-45" />
      </div>
      <div className="absolute top-20 right-32">
        <div className="w-32 h-8 bg-accent-gold rounded-full transform rotate-45" />
      </div>
      <div className="absolute bottom-1/3 left-1/4">
        <div className="w-12 h-48 bg-accent-green rounded-full" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <KayonLogo className="h-24 w-auto" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-[40px] leading-[1.2] font-bold text-primary mb-6">
              W świecie, w którym technologia nadaje tempo zmianom, przewagę zyskują ci, którzy dysponują nią wcześniej.
            </h1>

            <p className="text-base text-primary mb-8 leading-relaxed">
              Nasze systemy zdalnego odczytu już dziś spełniają unijne standardy, które staną się obowiązkiem dopiero w 2027 roku.
            </p>

            <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 font-bold text-sm">
              Read more
            </button>
          </motion.div>
        </div>

        {/* Scroll button - bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 right-12"
        >
          <button className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center text-white hover:bg-accent-blue/90 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
