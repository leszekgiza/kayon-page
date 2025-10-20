'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import KayonLogo from './KayonLogo';

const headline =
  'W \u015bwiecie, w kt\u00f3rym technologia nadaje tempo zmianom, przewag\u0119 zyskuj\u0105 ci, kt\u00f3rzy dysponuj\u0105 ni\u0105 wcze\u015bniej.';
const bodyCopy =
  'Nasze systemy zdalnego odczytu ju\u017c dzi\u015b spe\u0142niaj\u0105 unijne standardy, kt\u00f3re stan\u0105 si\u0119 obowi\u0105zkiem dopiero w 2027 roku.';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-top.png"
          alt="Panorama farmy wiatrowej"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-pattern.svg"
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 w-full py-20 md:py-32">
        <div className="container-custom">
          <div className="flex flex-col items-center gap-12 text-center text-white md:items-end md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex w-full max-w-3xl flex-col items-center gap-8 md:items-end"
            >
              <KayonLogo className="h-14 w-auto drop-shadow-lg" />
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-[46px] lg:leading-snug">{headline}</h1>
              <div className="w-full max-w-lg rounded-[48px] border border-white/45 bg-black/40 px-10 py-8 text-left backdrop-blur-md md:text-right">
                <p className="text-base leading-relaxed md:text-lg">{bodyCopy}</p>
                <button
                  className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/60 px-6 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-white/20"
                  type="button"
                >
                  Read more
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col items-center gap-3"
              aria-hidden
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-primary shadow-lg backdrop-blur">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0-6-6m6 6 6-6" />
                </svg>
              </div>
              <div className="flex h-20 w-3 items-end justify-center rounded-full border border-white/55 bg-black/40">
                <span className="block h-3/4 w-full rounded-full bg-accent-green" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
