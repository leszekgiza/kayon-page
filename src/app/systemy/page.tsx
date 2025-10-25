'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import KayonLogo from '@/components/KayonLogo';
import { useContent } from '@/hooks/useContent';

export default function SystemyPage() {
  const { systemsPage } = useContent();

  return (
    <>
      <Navigation />
      <main>
        {/* 01 TOP - Hero Section */}
        <section className="relative h-[600px] overflow-hidden bg-[#343432] text-white">
          {/* Decorative circle - left side, partially off-screen */}
          <div className="absolute left-[-555px] top-[-29px] flex h-[494px] w-[1420px] items-center justify-center">
            <div className="rotate-180">
              <div className="relative h-[494px] w-[1420px] rounded-[247px] opacity-20">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[247px] border-2 border-solid border-[#eaeaea]"
                />
              </div>
            </div>
          </div>

          {/* Content Frame */}
          <div className="absolute left-[1085px] top-[218px] flex flex-col items-start gap-10">
            <h1 className="whitespace-pre font-['Montserrat'] text-[40px] font-bold leading-[1.2] text-white">
              {systemsPage.hero.title}
            </h1>
            <div className="relative rounded-[30px] p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[30px] border-2 border-solid border-[#747171]"
              />
              <p className="w-[670px] font-['Montserrat'] text-[20px] font-bold leading-[1.2] text-white">
                {systemsPage.hero.description}
              </p>
            </div>
          </div>

          {/* KAYON Logotype - left side */}
          <div className="absolute left-[250px] top-[285px]">
            <KayonLogo className="h-[76px] w-auto" />
          </div>

          {/* Scroll Down Icon */}
          <button
            type="button"
            onClick={() => {
              const nextSection = document.querySelector('section:nth-of-type(2)');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute left-[931px] top-[503px] flex items-start"
            aria-label="Scroll down"
          >
            <div className="flex size-[57px] items-center justify-center rounded-[30px] bg-[#bcb7b7]">
              <span className="material-symbols-rounded text-[24px] leading-none text-white">
                arrow_cool_down
              </span>
            </div>
          </button>
        </section>

        {/* 02 - All in KAYON Description Section */}
        <section className="relative h-[623px] bg-[#eaeaea]">
          <div className="absolute left-[240px] top-1/2 w-[1000px] -translate-y-1/2">
            <div className="flex flex-col justify-center font-['Montserrat'] text-[#1d1d1b]">
              <p className="mb-0 text-[40px] font-bold leading-[1.2]">
                {systemsPage.allInKayon.heading}
              </p>
              <p className="mb-0 text-[40px] font-bold leading-[1.2]">&nbsp;</p>
              <p className="mb-0 text-[24px] font-bold leading-[1.2]">
                {systemsPage.allInKayon.subheading}
              </p>
              <p className="mb-0 text-[20px] leading-[1.2]">&nbsp;</p>
              <p className="font-['Montserrat'] text-[16px] font-normal leading-[1.4]">
                {systemsPage.allInKayon.description}
              </p>
            </div>
          </div>
        </section>

        {/* 03 - Systems Details Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto max-w-[1520px] space-y-20">
            {/* Walk-by System */}
            <motion.div
              className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-start gap-[30px]">
                <h2 className="whitespace-pre font-['Montserrat'] text-[40px] font-bold leading-[1.2] text-[#1d1d1b]">
                  {systemsPage.systems.walkby.title}
                </h2>
                <p className="w-[433px] font-['Montserrat'] text-[24px] font-normal leading-[1.2] text-[#1d1d1b]">
                  {systemsPage.systems.walkby.subtitle}
                </p>
                <div className="flex w-[492px] flex-col items-start gap-[30px]">
                  {systemsPage.systems.walkby.features.map((feature, index) => (
                    <div key={index} className="flex w-[386px] items-center gap-[10px]">
                      <span className="material-symbols-rounded shrink-0 text-[24px] leading-none text-[#77bb61]">
                        arrow_right
                      </span>
                      <p className="flex-1 font-['Montserrat'] text-[16px] font-normal leading-[1.4] text-[#1d1d1b]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative ml-[529px] mt-0 h-[510px] w-[911px] rounded-[40px]">
                <Image
                  src="/systemy-walkby.png"
                  alt="Walk-by system"
                  fill
                  className="rounded-[40px] object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[40px] border-2 border-[#eaeaea]"
                />
              </div>
            </motion.div>

            {/* Fix (Star) System */}
            <motion.div
              className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-start gap-[30px]">
                <h2 className="whitespace-pre font-['Montserrat'] text-[40px] font-bold leading-[1.2] text-[#1d1d1b]">
                  <span>{systemsPage.systems.fix.title}</span>
                  <span className="font-['Montserrat'] font-normal"> (Star)</span>
                </h2>
                <p className="w-[433px] font-['Montserrat'] text-[24px] font-normal leading-[1.2] text-[#1d1d1b]">
                  {systemsPage.systems.fix.subtitle}
                </p>
                <div className="flex w-[492px] flex-col items-start gap-[30px]">
                  {systemsPage.systems.fix.features.map((feature, index) => (
                    <div key={index} className="flex w-[386px] items-center gap-[10px]">
                      <span className="material-symbols-rounded shrink-0 text-[24px] leading-none text-[#77bb61]">
                        arrow_right
                      </span>
                      <p className="flex-1 font-['Montserrat'] text-[16px] font-normal leading-[1.4] text-[#1d1d1b]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative ml-[529px] mt-0 h-[510px] w-[911px] rounded-[40px]">
                <Image
                  src="/systemy-fix.png"
                  alt="Fix (Star) system"
                  fill
                  className="rounded-[40px] object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[40px] border-2 border-[#eaeaea]"
                />
              </div>
            </motion.div>

            {/* MESH System */}
            <motion.div
              className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-start gap-[30px]">
                <h2 className="whitespace-pre font-['Montserrat'] text-[40px] font-bold leading-[1.2] text-[#1d1d1b]">
                  {systemsPage.systems.mesh.title}
                </h2>
                <p className="w-[433px] font-['Montserrat'] text-[24px] font-normal leading-[1.2] text-[#1d1d1b]">
                  {systemsPage.systems.mesh.subtitle}
                </p>
                <div className="flex w-[492px] flex-col items-start gap-[30px]">
                  {systemsPage.systems.mesh.features.map((feature, index) => (
                    <div key={index} className="flex w-[386px] items-center gap-[10px]">
                      <span className="material-symbols-rounded shrink-0 text-[24px] leading-none text-[#77bb61]">
                        arrow_right
                      </span>
                      <p className="flex-1 font-['Montserrat'] text-[16px] font-normal leading-[1.4] text-[#1d1d1b]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative ml-[529px] mt-0 h-[510px] w-[911px] rounded-[40px]">
                <Image
                  src="/systemy-mesh.png"
                  alt="MESH system"
                  fill
                  className="rounded-[40px] object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[40px] border-2 border-[#eaeaea]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
