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

      <main className='px-4 lg:px-10 xl:px-20 2xl:px-0 max-w-[1400px] mx-auto'>
        {/* 03 - Systems Details Section with Grid Overlay Layout */}
        <section className="bg-white py-12 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-[1520px] space-y-12 px-4 md:space-y-16 lg:space-y-20">
            {/* Walk-by System - Grid overlay: text and image in same grid cell */}
            <motion.div
              className="relative inline-grid w-full grid-cols-[max-content] grid-rows-[max-content] place-items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {/* Text content - [grid-area:1_/_1] means row 1, column 1 */}
              <div className="flex flex-col items-start gap-6 md:gap-[30px] lg:[grid-area:1_/_1]">
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
              {/* Image - [grid-area:1_/_1] overlays on same cell, ml-[529px] pushes it right on desktop */}
              <div className="relative mt-8 h-[300px] w-full rounded-[30px] md:h-[400px] md:rounded-[40px] lg:ml-[529px] lg:mt-0 lg:h-[510px] lg:w-[911px] lg:[grid-area:1_/_1]">
                <Image
                  src="/systemy-walkby.png"
                  alt="Walk-by system"
                  fill
                  className="rounded-[30px] object-cover md:rounded-[40px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 911px"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[30px] border-2 border-[#eaeaea] md:rounded-[40px]"
                />
              </div>
            </motion.div>

            {/* Fix (Star) System */}
            <motion.div
              className="relative inline-grid w-full grid-cols-[max-content] grid-rows-[max-content] place-items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-start gap-6 md:gap-[30px] lg:[grid-area:1_/_1]">
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
              <div className="relative mt-8 h-[300px] w-full rounded-[30px] md:h-[400px] md:rounded-[40px] lg:ml-[529px] lg:mt-0 lg:h-[510px] lg:w-[911px] lg:[grid-area:1_/_1]">
                <Image
                  src="/systemy-fix.png"
                  alt="Fix (Star) system"
                  fill
                  className="rounded-[30px] object-cover md:rounded-[40px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 911px"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[30px] border-2 border-[#eaeaea] md:rounded-[40px]"
                />
              </div>
            </motion.div>

            {/* MESH System */}
            <motion.div
              className="relative inline-grid w-full grid-cols-[max-content] grid-rows-[max-content] place-items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-start gap-6 md:gap-[30px] lg:[grid-area:1_/_1]">
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
              <div className="relative mt-8 h-[300px] w-full rounded-[30px] md:h-[400px] md:rounded-[40px] lg:ml-[529px] lg:mt-0 lg:h-[510px] lg:w-[911px] lg:[grid-area:1_/_1]">
                <Image
                  src="/systemy-mesh.png"
                  alt="MESH system"
                  fill
                  className="rounded-[30px] object-cover md:rounded-[40px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 911px"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[30px] border-2 border-[#eaeaea] md:rounded-[40px]"
                />
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <ProductsSection />
      <Footer />
    </>
  );
}
