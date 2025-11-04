'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/sections/Footer';
import ProductsSection from '@/components/sections/ProductsSection';
import { useContent } from '@/hooks/useContent';
import parse from 'html-react-parser';
import HeroSimple from '@/components/sections/HeroSimple';

export default function SystemyPage() {
  const { systemsPage } = useContent();

  return (
    <>
      <Navigation showCenterLinks={false} isHomePage={false} />
      <HeroSimple title={systemsPage.hero.title} desc={systemsPage.hero.description} />

      <div className='bg-[#eaeaea]'>
        <section className="px-4 lg:px-10 xl:px-20 2xl:px-0 py-12 2xl:py-24 max-w-[1400px] mx-auto">
          <div className="flex flex-col justify-center text-[#1d1d1b]">
            <p className="mb-0 text-[28px] font-bold leading-[1.2] md:text-[34px] lg:text-[40px]">
              {parse(systemsPage.allInKayon.heading)}
            </p>
            <p className="mb-0 text-[28px] font-bold leading-[1.2] md:text-[34px] lg:text-[40px]">&nbsp;</p>
            <p className="mb-0 text-[18px] font-bold leading-[1.3] md:text-[22px] lg:text-[24px] lg:leading-[1.2]">
              {parse(systemsPage.allInKayon.subheading)}
            </p>
            <p className="mb-0 text-[16px] leading-[1.3] md:text-[18px] lg:text-[20px] lg:leading-[1.2]">&nbsp;</p>
            <p className="text-[14px] font-normal leading-[1.5] md:text-[15px] lg:text-[16px] lg:leading-[1.4]">
              {parse(systemsPage.allInKayon.description)}
            </p>
          </div>
        </section>
      </div>

      <main className='px-4 lg:px-10 xl:px-20 2xl:px-0 py-12 md:py-20 lg:py-24 max-w-[1400px] mx-auto space-y-12 md:space-y-16 lg:space-y-20'>

        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="xl:w-1/3 2xl:min-w-[530px] flex flex-col items-start gap-6 md:gap-[30px]">
            <h2 className="whitespace-pre text-[32px] font-bold leading-[1.2] text-[#1d1d1b] md:text-[36px] lg:text-[40px]">
              {parse(systemsPage.systems.walkby.title)}
            </h2>
            <p className="w-full text-[20px] font-normal leading-[1.3] text-[#1d1d1b] md:text-[22px] md:leading-[1.2] lg:w-[433px] lg:text-[24px]">
              {parse(systemsPage.systems.walkby.subtitle)}
            </p>
            <div className="flex w-full flex-col items-start gap-6 md:gap-[30px] lg:w-[492px]">
              {systemsPage.systems.walkby.features.map((feature, index) => (
                <div key={index} className="flex w-full items-start gap-[10px] lg:w-[386px]">
                  <span className="material-symbols-rounded mt-1 shrink-0 text-[20px] leading-none text-[#77bb61] md:text-[24px]">
                    arrow_right
                  </span>
                  <p className="flex-1 text-[14px] font-normal leading-[1.5] text-[#1d1d1b] md:text-[15px] lg:text-[16px] lg:leading-[1.4]">
                    {parse(feature)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Image
            src="/systemy-walkby.png"
            alt="Walk-by system"
            className="w-full h-auto xl:h-[510px] rounded-3xl border-2 border-[#eaeaea] object-cover"
            width={375}
            height={250}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 911px"
          />
        </motion.div>

        {/* Fix (Star) System */}
        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="xl:w-1/3 2xl:min-w-[530px] flex flex-col items-start gap-6 md:gap-[30px]">
            <h2 className="whitespace-pre text-[32px] font-bold leading-[1.2] text-[#1d1d1b] md:text-[36px] lg:text-[40px]">
              <span>{parse(systemsPage.systems.fix.title)}</span>
              <span className="font-normal"> (Star)</span>
            </h2>
            <p className="w-full text-[20px] font-normal leading-[1.3] text-[#1d1d1b] md:text-[22px] md:leading-[1.2] lg:w-[433px] lg:text-[24px]">
              {parse(systemsPage.systems.fix.subtitle)}
            </p>
            <div className="flex w-full flex-col items-start gap-6 md:gap-[30px] lg:w-[492px]">
              {systemsPage.systems.fix.features.map((feature, index) => (
                <div key={index} className="flex w-full items-start gap-[10px] lg:w-[386px]">
                  <span className="material-symbols-rounded mt-1 shrink-0 text-[20px] leading-none text-[#77bb61] md:text-[24px]">
                    arrow_right
                  </span>
                  <p className="flex-1 text-[14px] font-normal leading-[1.5] text-[#1d1d1b] md:text-[15px] lg:text-[16px] lg:leading-[1.4]">
                    {parse(feature)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Image
            src="/systemy-fix.png"
            alt="Fix (Star) system"
            width={375}
            height={250}
            className="w-full h-auto xl:h-[510px] rounded-3xl border-2 border-[#eaeaea] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 911px"
          />

        </motion.div>

        {/* MESH System */}
        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="xl:w-1/3 2xl:min-w-[530px] flex flex-col items-start gap-6 md:gap-[30px]">
            <h2 className="whitespace-pre text-[32px] font-bold leading-[1.2] text-[#1d1d1b] md:text-[36px] lg:text-[40px]">
              {parse(systemsPage.systems.mesh.title)}
            </h2>
            <p className="w-full text-[20px] font-normal leading-[1.3] text-[#1d1d1b] md:text-[22px] md:leading-[1.2] lg:w-[433px] lg:text-[24px]">
              {parse(systemsPage.systems.mesh.subtitle)}
            </p>
            <div className="flex w-full flex-col items-start gap-6 md:gap-[30px] lg:w-[492px]">
              {systemsPage.systems.mesh.features.map((feature, index) => (
                <div key={index} className="flex w-full items-start gap-[10px] lg:w-[386px]">
                  <span className="material-symbols-rounded mt-1 shrink-0 text-[20px] leading-none text-[#77bb61] md:text-[24px]">
                    arrow_right
                  </span>
                  <p className="flex-1 text-[14px] font-normal leading-[1.5] text-[#1d1d1b] md:text-[15px] lg:text-[16px] lg:leading-[1.4]">
                    {parse(feature)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Image
            src="/systemy-mesh.png"
            alt="MESH system"
            width={375}
            height={250}
            className="w-full h-auto xl:h-[510px] rounded-3xl border-2 border-[#eaeaea] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 911px"
          />
        </motion.div>
      </main>

      <ProductsSection />
      <Footer />
    </>
  );
}
