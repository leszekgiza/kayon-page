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
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-top.png"
          alt="Panorama farmy wiatrowej"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/65 to-primary/30" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
        <Image src="/hero-pattern.svg" alt="" fill priority className="object-cover object-top" sizes="100vw" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-24 hidden h-[520px] w-[82%] -translate-x-1/2 rounded-[260px] border border-white/25 md:block" />
      <span className="pointer-events-none absolute left-12 top-16 hidden h-28 w-8 rotate-45 rounded-full bg-accent-blue md:block" />
      <span className="pointer-events-none absolute right-16 top-14 hidden h-28 w-8 -rotate-45 rounded-full bg-accent-gold md:block" />
      <span className="pointer-events-none absolute left-1/2 bottom-28 hidden h-40 w-8 -translate-x-1/2 rounded-full bg-accent-green md:block" />

      <div className="relative z-10">
        <div className="container-custom">
          <div className="flex min-h-screen flex-col justify-end gap-16 pb-20 pt-40 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pb-32 lg:pt-48">
            <div className="relative flex w-full max-w-3xl flex-col items-center gap-10 text-center lg:items-start lg:text-left">
              <div className="relative w-full overflow-visible">
                <div className="mx-auto w-full max-w-[760px] rounded-[260px] border border-white/25 bg-black/20 p-6 backdrop-blur-md lg:p-10">
                  <div className="rounded-[220px] border border-white/15 px-10 py-14 lg:px-20 lg:py-16">
                    <KayonLogo className="mx-auto h-16 w-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)] lg:h-20" />
                  </div>
                </div>
                <span className="pointer-events-none absolute -right-20 bottom-[-72px] hidden h-20 w-6 rounded-full bg-accent-green lg:block" />
              </div>
            </div>

            <div className="flex w-full max-w-xl flex-col gap-6 rounded-[48px] bg-black/30 px-8 py-10 backdrop-blur-md lg:bg-transparent lg:px-0 lg:py-0">
              <div className="hidden lg:block">
                <KayonLogo className="h-12 w-auto text-white" />
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold leading-tight md:text-[40px] md:leading-tight"
              >
                {headline}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="rounded-[36px] border border-white/35 bg-black/45 px-8 py-6 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.65)]"
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

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 flex items-center gap-4 text-white/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-primary shadow-lg">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0-6-6m6 6 6-6" />
                  </svg>
                </div>
                <span className="text-sm uppercase tracking-[0.3em] text-white/70">Scroll</span>
                <div className="h-14 w-2 rounded-full border border-white/40 bg-white/10">
                  <span className="mx-auto mt-1 block h-7 w-1 rounded-full bg-accent-blue" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
