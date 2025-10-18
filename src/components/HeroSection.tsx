'use client';

import { motion } from 'framer-motion';
import KayonLogo from './KayonLogo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-white overflow-hidden">
      {/* Background decorative circles - large subtle circles */}
      <div className="hidden lg:block absolute -left-64 top-16 w-[1420px] h-[494px] rounded-[247px] border-2 border-neutral-gray-light opacity-40 transform -rotate-3" />
      <div className="hidden lg:block absolute left-1/4 top-1/3 w-[800px] h-[350px] rounded-[175px] border-2 border-neutral-gray-light opacity-30" />

      {/* Decorative colored bars (AIM instance from Figma) */}
      {/* Blue bar - top left corner (148x147) */}
      <div className="hidden lg:block absolute -left-8 -top-8 w-36 h-36 bg-accent-blue rounded-[50px] opacity-90" />

      {/* Orange bar - top right corner (147x147) */}
      <div className="hidden lg:block absolute right-4 -top-8 w-36 h-36 bg-accent-gold rounded-[50px] opacity-90" />

      {/* Green vertical bar - bottom left (44x159) */}
      <div className="hidden lg:block absolute left-1/4 bottom-32 w-11 h-40 bg-accent-green rounded-[20px]" />

      <div className="container-custom relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
          {/* Logo - only on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex justify-center items-center"
          >
            <KayonLogo className="h-20 w-auto" />
          </motion.div>

          {/* Content - full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Label tag */}
            <div className="inline-block px-6 py-2 bg-neutral-gray-light rounded-full">
              <span className="text-primary font-bold text-xs md:text-sm">Dlaczego KAYON?</span>
            </div>

            {/* Main heading */}
            <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-[1.2] font-bold text-primary">
              W świecie, w którym technologia nadaje tempo zmianom, przewagę zyskują ci, którzy dysponują nią wcześniej.
            </h1>

            {/* White card with text and button - exact Figma dimensions */}
            <div className="bg-white border border-neutral-gray-light rounded-[30px] p-6 md:p-8 max-w-2xl">
              <p className="text-sm md:text-base text-primary mb-6 leading-relaxed">
                Nasze systemy zdalnego odczytu już dziś spełniają unijne standardy, które staną się obowiązkiem dopiero w 2027 roku.
              </p>

              <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-200 font-bold text-xs md:text-sm">
                Read more
              </button>
            </div>

            {/* Scroll button - exact 57x57px from Figma */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <button
                className="w-14 h-14 bg-accent-blue rounded-full flex items-center justify-center text-white hover:bg-accent-blue/90 transition-colors shadow-md"
                aria-label="Scroll down"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
