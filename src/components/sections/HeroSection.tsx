'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import KayonLogo from '@/components/ui/KayonLogo';
import { useContent } from '@/hooks/useContent';
import ButtonSimple from '@/components/ui/ButtonSimple';
import ScrollDownButton from '@/components/ui/ScrollDownButton';
import KayonTopShapes from '@/components/ui/KayonTopShapes';
import ModalSimpleText from '@/components/ui/ModalSimpleText';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { hero } = useContent();

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
    <section
      className="relative max-md:pt-8 flex flex-col lg:flex-row items-center bg-black text-white"
      style={{ background: 'url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <KayonTopShapes />
      <div className="z-10 px-4 lg:px-10 xl:px-20 2xl:px-0 max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:gap-4">
        <div className="lg:w-1/2"></div>

        <div className="pt-32 lg:pt-10 xl:pt-20 lg:min-h-[550px] max-lg:order-last mx-2 xl:mx-24 flex flex-col justify-end">
          <ScrollDownButton />
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <KayonLogo className="h-[50px] w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]" />
          </motion.div>
          <h1 className="mt-12 text-lg lg:text-4xl font-bold text-left text-pretty text-white">
            {hero.headline}
          </h1>
          <div className="mt-6 p-6 flex flex-col items-start gap-2 rounded-3xl border-2 border-[#484848] lg:flex-row lg:justify-between lg:items-center">
            <p className="lg:text-xl font-bold text-white text-pretty">
              {hero.body}
            </p>
            <ButtonSimple text={hero.ctaLabel} bgClass="bg-[#1d1d1b]" callbackFunction={() => setIsModalOpen(true)} />
          </div>
        </div>

      </div>

      {/* <HeroSimpleCircle /> */}

      <AnimatePresence initial={false}>
        {isModalOpen && (
          <ModalSimpleText
            setIsModalOpen={setIsModalOpen}
            title={hero.modalTitle}
            intro={hero.modalLead}
            content={hero.body}
            buttonAriaLabel={hero.modalCloseAria}
          />
        )}
      </AnimatePresence>

    </section>
  );
};

export default HeroSection;
