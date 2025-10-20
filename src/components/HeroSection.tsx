'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import KayonLogo from './KayonLogo';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="KAYON background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-16 hidden h-40 w-40 rotate-45 bg-accent-blue md:block" />
      <div className="pointer-events-none absolute -right-24 top-20 hidden h-40 w-40 -rotate-12 bg-accent-gold md:block" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 hidden h-[620px] w-[1200px] -translate-x-1/2 rounded-[300px] border border-white/20 md:block" />
      <div className="pointer-events-none absolute left-1/2 bottom-[24%] hidden h-32 w-6 -translate-x-1/2 rounded-full bg-accent-green md:block" />

      <div className="relative z-10 w-full py-24 md:py-32">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center text-white md:items-end md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-3xl rounded-[160px] border border-white/20 bg-white/10 px-10 py-12 backdrop-blur"
            >
              <div className="flex flex-col items-center gap-6 md:items-end">
                <KayonLogo className="h-12 w-auto" />
                <h1 className="text-2xl leading-snug md:text-3xl lg:text-[42px] lg:leading-tight">
                  W&nbsp;świecie, w&nbsp;którym technologia nadaje tempo zmianom, przewagę zyskują ci, którzy dysponują nią wcześniej.
                </h1>
                <div className="flex w-full flex-col gap-4 rounded-[36px] border border-white/40 bg-black/40 px-8 py-6 text-left md:max-w-md md:text-left">
                  <p className="text-sm leading-relaxed md:text-base">
                    Nasze systemy zdalnego odczytu już dziś spełniają unijne standardy, które staną się obowiązkiem dopiero w&nbsp;2027 roku.
                  </p>
                  <button className="inline-flex w-max items-center gap-3 rounded-full border border-white/50 px-5 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-white/10">
                    <span>Read more</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue text-white shadow-xl transition-colors duration-200 hover:bg-accent-blue/90"
              aria-label="Scroll down"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0-6-6m6 6 6-6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
