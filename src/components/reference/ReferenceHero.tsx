'use client';

import Image from 'next/image';
import KayonLogo from '../KayonLogo';

const ReferenceHero = () => {
  return (
    <section className="relative h-[900px] w-[1920px] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-top.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/45 to-black/15" />
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-1/2 top-32 h-[626px] w-[1799px] -translate-x-1/2 rounded-[313px] border border-white/25" />
      
      <div className="pointer-events-none absolute z-10" style={{ left: '335px', top: '-49px', width: '1250px', height: '1041.295px' }}>
        <Image
          src="/aim-target.svg"
          alt=""
          width={1250}
          height={1041.295}
          priority
          className="opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1440px] px-8">
          <div className="ml-auto flex w-full max-w-[693px] translate-x-[10px] flex-col items-start gap-[80px]">
            {/* Logo - 300.9x50px */}
            <KayonLogo className="h-[50px] w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]" />

            {/* Content Frame - gap: 40px */}
            <div className="flex w-full flex-col gap-[40px]">
              {/* Headline */}
              <h1 className="text-[40px] font-bold leading-[1.2] text-white">
                W świecie, w którym technologia nadaje tempo zmianom, przewaga zyskują ci, którzy dysponują nią wcześniej.
              </h1>

              {/* Box with text + CTA - radius: 30px, padding: 40px, gap: 40px */}
              <div className="flex w-full flex-col gap-[40px] rounded-[30px] border border-white/20 bg-white/10 p-[40px] backdrop-blur-md lg:flex-row lg:items-center">
                <p className="flex-1 text-[20px] leading-[1.2] text-white/90">
                  Nasze systemy w odległym odszycie są dzisiaj wymagane przez unijne standardy, które wchodzą w życie już za półtora roku!
                </p>

                {/* CTA - radius: 30px, padding: 20px 30px */}
                <button className="inline-flex shrink-0 items-center gap-[10px] rounded-[30px] bg-[#1D1D1B] px-[30px] py-[20px] font-['Montserrat'] text-[16px] font-bold text-white">
                  Więcej
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Icon - 57x57px, bottom center */}
        <div className="absolute bottom-[48px] left-1/2 z-30 -translate-x-1/2">
          <Image
            src="/scroll-down-icon.svg"
            alt=""
            width={57}
            height={57}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ReferenceHero;
