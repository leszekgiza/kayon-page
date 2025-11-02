'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import KayonLogo from '@/components/ui/KayonLogo';
import ProductsSection from '@/components/ProductsSection';
import { useContent } from '@/hooks/useContent';

export default function SystemyPage() {
  const { systemsPage } = useContent();

  return (
    <>
      <Navigation showCenterLinks={false} isHomePage={false} />
      <main>
        {/* 01 TOP - Hero Section - Desktop: 1920x600px, exact Figma positioning */}
        <section className="relative h-[400px] overflow-hidden bg-[#343432] text-white md:h-[500px] lg:h-[600px]">
          {/* Decorative circle - left side, partially off-screen - hidden on mobile */}
          <div className="absolute left-[-555px] top-[-29px] hidden h-[494px] w-[1420px] items-center justify-center lg:flex">
            <div className="rotate-180">
              <div className="relative h-[494px] w-[1420px] rounded-[247px] opacity-20">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[247px] border-2 border-solid border-[#eaeaea]"
                />
              </div>
            </div>
          </div>

          {/* KAYON Logotype - Desktop: left-[250px] top-[285px], Mobile: centered top */}
          <div className="absolute left-1/2 top-8 -translate-x-1/2 md:top-12 lg:left-[250px] lg:top-[285px] lg:translate-x-0">
            <KayonLogo className="h-[40px] w-auto md:h-[60px] lg:h-[76px]" />
          </div>

          {/* Content Frame - Desktop: left-[1055px] top-[218px], Mobile: centered */}
          <div className="absolute left-1/2 top-24 flex w-[90%] -translate-x-1/2 flex-col items-start gap-[40px] md:top-32 lg:left-[1055px] lg:top-[218px] lg:w-auto lg:translate-x-0">
            {/* Title */}
            <div className="flex flex-col justify-center font-['Montserrat'] font-bold leading-[0] text-white">
              <h1 className="whitespace-pre text-[26px] leading-[1.2] md:text-[32px] lg:text-[38px]">
                {systemsPage.hero.title}
              </h1>
            </div>
            {/* Frame1 - Box with border and padding */}
            <div className="relative box-border flex items-center justify-center gap-[40px] rounded-[20px] p-6 md:rounded-[30px] md:p-8 lg:rounded-[30px] lg:p-[40px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-solid border-[#747171] md:rounded-[30px]"
              />
              <div className="relative flex shrink-0 flex-col justify-center font-['Montserrat'] font-bold leading-[0] text-[14px] text-white md:text-[16px] lg:w-[670px] lg:text-[18px]">
                <p className="leading-[1.2]">{systemsPage.hero.description}</p>
              </div>
            </div>
          </div>

          {/* Scroll Down Icon - Centered bottom */}
          <button
            type="button"
            onClick={() => {
              const nextSection = document.querySelector('section:nth-of-type(2)');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12"
            aria-label="Scroll down"
          >
            <div className="flex size-[50px] items-center justify-center rounded-[25px] bg-[#bcb7b7] md:size-[57px] md:rounded-[30px]">
              <span className="material-symbols-rounded text-[20px] leading-none text-white md:text-[24px]">
                arrow_cool_down
              </span>
            </div>
          </button>
        </section>

        {/* 02 - All in KAYON Description Section - Desktop: 1920x623px */}
        <section className="relative bg-[#eaeaea] py-16 md:h-[500px] lg:h-[623px]">
          <div className="container mx-auto px-6 md:absolute md:left-[240px] md:top-1/2 md:w-[1000px] md:-translate-y-1/2 md:px-0">
            <div className="flex flex-col justify-center font-['Montserrat'] text-[#1d1d1b]">
              <p className="mb-0 text-[28px] font-bold leading-[1.2] md:text-[34px] lg:text-[40px]">
                {systemsPage.allInKayon.heading}
              </p>
              <p className="mb-0 text-[28px] font-bold leading-[1.2] md:text-[34px] lg:text-[40px]">&nbsp;</p>
              <p className="mb-0 text-[18px] font-bold leading-[1.3] md:text-[22px] lg:text-[24px] lg:leading-[1.2]">
                {systemsPage.allInKayon.subheading}
              </p>
              <p className="mb-0 text-[16px] leading-[1.3] md:text-[18px] lg:text-[20px] lg:leading-[1.2]">&nbsp;</p>
              <p className="font-['Montserrat'] text-[14px] font-normal leading-[1.5] md:text-[15px] lg:text-[16px] lg:leading-[1.4]">
                {systemsPage.allInKayon.description}
              </p>
            </div>
          </div>
        </section>

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
                <h2 className="whitespace-pre font-['Montserrat'] text-[32px] font-bold leading-[1.2] text-[#1d1d1b] md:text-[36px] lg:text-[40px]">
                  {systemsPage.systems.walkby.title}
                </h2>
                <p className="w-full font-['Montserrat'] text-[20px] font-normal leading-[1.3] text-[#1d1d1b] md:text-[22px] md:leading-[1.2] lg:w-[433px] lg:text-[24px]">
                  {systemsPage.systems.walkby.subtitle}
                </p>
                <div className="flex w-full flex-col items-start gap-6 md:gap-[30px] lg:w-[492px]">
                  {systemsPage.systems.walkby.features.map((feature, index) => (
                    <div key={index} className="flex w-full items-start gap-[10px] lg:w-[386px]">
                      <span className="material-symbols-rounded mt-1 shrink-0 text-[20px] leading-none text-[#77bb61] md:text-[24px]">
                        arrow_right
                      </span>
                      <p className="flex-1 font-['Montserrat'] text-[14px] font-normal leading-[1.5] text-[#1d1d1b] md:text-[15px] lg:text-[16px] lg:leading-[1.4]">
                        {feature}
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
                <h2 className="whitespace-pre font-['Montserrat'] text-[32px] font-bold leading-[1.2] text-[#1d1d1b] md:text-[36px] lg:text-[40px]">
                  <span>{systemsPage.systems.fix.title}</span>
                  <span className="font-['Montserrat'] font-normal"> (Star)</span>
                </h2>
                <p className="w-full font-['Montserrat'] text-[20px] font-normal leading-[1.3] text-[#1d1d1b] md:text-[22px] md:leading-[1.2] lg:w-[433px] lg:text-[24px]">
                  {systemsPage.systems.fix.subtitle}
                </p>
                <div className="flex w-full flex-col items-start gap-6 md:gap-[30px] lg:w-[492px]">
                  {systemsPage.systems.fix.features.map((feature, index) => (
                    <div key={index} className="flex w-full items-start gap-[10px] lg:w-[386px]">
                      <span className="material-symbols-rounded mt-1 shrink-0 text-[20px] leading-none text-[#77bb61] md:text-[24px]">
                        arrow_right
                      </span>
                      <p className="flex-1 font-['Montserrat'] text-[14px] font-normal leading-[1.5] text-[#1d1d1b] md:text-[15px] lg:text-[16px] lg:leading-[1.4]">
                        {feature}
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
                <h2 className="whitespace-pre font-['Montserrat'] text-[32px] font-bold leading-[1.2] text-[#1d1d1b] md:text-[36px] lg:text-[40px]">
                  {systemsPage.systems.mesh.title}
                </h2>
                <p className="w-full font-['Montserrat'] text-[20px] font-normal leading-[1.3] text-[#1d1d1b] md:text-[22px] md:leading-[1.2] lg:w-[433px] lg:text-[24px]">
                  {systemsPage.systems.mesh.subtitle}
                </p>
                <div className="flex w-full flex-col items-start gap-6 md:gap-[30px] lg:w-[492px]">
                  {systemsPage.systems.mesh.features.map((feature, index) => (
                    <div key={index} className="flex w-full items-start gap-[10px] lg:w-[386px]">
                      <span className="material-symbols-rounded mt-1 shrink-0 text-[20px] leading-none text-[#77bb61] md:text-[24px]">
                        arrow_right
                      </span>
                      <p className="flex-1 font-['Montserrat'] text-[14px] font-normal leading-[1.5] text-[#1d1d1b] md:text-[15px] lg:text-[16px] lg:leading-[1.4]">
                        {feature}
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

        {/* Products Section */}
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}
