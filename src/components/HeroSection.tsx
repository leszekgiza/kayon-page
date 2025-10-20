'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import KayonLogo from './KayonLogo';

const headline =
  'W świecie, w którym technologia nadaje tempo zmianom, przewagę zyskują ci, którzy dysponują nią wcześniej.';
const bodyCopy =
  'Nasze systemy zdalnego odczytu już dziś spełniają unijne standardy, które staną się obowiązkiem dopiero w 2027 roku.';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-top.png"
          alt="Panorama farmy wiatrowej"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/45 to-black/15" />
      </div>

      <Image
        src="/hero-pattern.svg"
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 object-cover object-center opacity-65 mix-blend-soft-light"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute left-1/2 top-28 hidden h-[520px] w-[1400px] -translate-x-1/2 rounded-[260px] border border-white/25 md:block" />
      <span className="pointer-events-none absolute left-[7%] top-10 hidden h-28 w-8 rotate-45 rounded-full bg-accent-blue md:block" />
      <span className="pointer-events-none absolute right-[9%] top-12 hidden h-28 w-8 -rotate-45 rounded-full bg-accent-gold md:block" />
      <span className="pointer-events-none absolute left-1/2 bottom-24 hidden h-32 w-6 -translate-x-1/2 rounded-full bg-accent-green md:block" />

      <div className="relative z-10 flex min-h-screen items-end">
        <div className="container-custom w-full pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="ml-auto flex max-w-xl flex-col items-end gap-7 text-right">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-end gap-6"
            >
              <KayonLogo className="h-12 w-auto drop-shadow-[0_12px_45px_rgba(0,0,0,0.35)] md:h-14" />
              <h1 className="text-3xl font-semibold leading-snug md:text-[42px] md:leading-tight">{headline}</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="w-full rounded-[36px] border border-white/35 bg-black/40 px-8 py-6 backdrop-blur-md md:px-10 md:py-7"
            >
              <p className="text-sm leading-relaxed text-white/90 md:text-base">{bodyCopy}</p>
              <button
                type="button"
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/50 px-5 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-white/15"
              >
                Read more
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="pointer-events-none absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-primary shadow-lg">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0-6-6m6 6 6-6" />
          </svg>
        </div>
        <div className="h-16 w-2 rounded-full border border-white/40 bg-white/10">
          <span className="mx-auto mt-1 block h-8 w-1 rounded-full bg-accent-blue" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
