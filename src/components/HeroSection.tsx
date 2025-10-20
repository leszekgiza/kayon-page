'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import KayonLogo from './KayonLogo';

const headline =
  'W \u015bwiecie, w kt\u00f3rym technologia nadaje tempo zmianom, przewag\u0119 zyskuj\u0105 ci, kt\u00f3rzy dysponuj\u0105 ni\u0105 wcze\u015bniej.';
const bodyCopy =
  'Nasze systemy zdalnego odczytu ju\u017c dzi\u015b spe\u0142niaj\u0105 unijne standardy, kt\u00f3re stan\u0105 si\u0119 obowi\u0105zkiem dopiero w 2027 roku.';
const modalLead =
  'Projektujemy i produkujemy nowoczesne systemy pomiarowe, kt\u00f3re wyprzedzaj\u0105 zmiany technologiczne i regulacyjne. Ju\u017c teraz spe\u0142niamy wymogi dyrektywy EED 2023/1791, zobowi\u0105zuj\u0105cej administrator\u00f3w, zarz\u0105dc\u00f3w i wsp\u00f3lnoty do zdalnego odczytu licznik\u00f3w.';
const modalCopyOne =
  'Nasze rozwi\u0105zania ju\u017c od 2017 roku dzia\u0142aj\u0105 z powodzeniem w Polsce, od kilku lat w Czechach, Ukrainie oraz w krajach Europy Zachodniej, gdzie dost\u0119pne s\u0105 dzi\u0119ki szwajcarskiej firmie GWF AG \u2013 liderowi technologii pomiarowych.';
const modalCopyTwo =
  'Sprawdzaj\u0105 si\u0119 wsz\u0119dzie tam, gdzie liczy si\u0119 precyzja, prostota instalacji i niezawodno\u015b\u0107. To technologia, kt\u00f3ra daje realne oszcz\u0119dno\u015bci: wody, ciep\u0142a, czasu i oczywi\u015bcie pieni\u0119dzy, ale te\u017c pewno\u015b\u0107, \u017ce swoj\u0105 przysz\u0142o\u015b\u0107 masz ju\u017c dzi\u015b pod kontrol\u0105.';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

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

      <div className="pointer-events-none absolute inset-0 hidden items-start justify-center md:flex">
        <Image
          src="/hero-pattern.svg"
          alt=""
          width={1120}
          height={933}
          priority
          className="mt-10 w-[90vw] max-w-[1120px] opacity-85"
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-32 hidden h-[520px] w-[1120px] -translate-x-1/2 rounded-[260px] border border-white/25 md:block" />

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
                onClick={() => setIsModalOpen(true)}
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

      <AnimatePresence initial={false}>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-12 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="hero-modal-title"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl rounded-[36px] bg-white px-10 py-12 text-primary shadow-[0_40px_80px_rgba(0,0,0,0.45)] md:px-16 md:py-14"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-primary-light"
                aria-label="Zamknij okno"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
              <h2 id="hero-modal-title" className="text-2xl font-semibold text-primary">
                Rozwinięcie
              </h2>
              <p className="mt-6 text-base font-semibold leading-relaxed text-primary">{modalLead}</p>
              <p className="mt-6 text-base leading-relaxed text-primary">{modalCopyOne}</p>
              <p className="mt-4 text-base leading-relaxed text-primary">{modalCopyTwo}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
