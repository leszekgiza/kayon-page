'use client';

import Link from 'next/link';
import KayonMark from '../KayonMark';

const ReferenceNavigation = () => {
  return (
    <div className="relative h-[137px] w-[1920px] flex-shrink-0">
      {/* Logo - Figma: left: 40px, top: 40px, 57x57px */}
      <Link
        href="/"
        className="absolute left-[40px] top-[40px] flex h-[57px] w-[57px] items-center justify-center rounded-[30px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]"
      >
        <KayonMark />
      </Link>

      {/* Center Labels - Figma specs */}
      <div className="absolute left-[688px] top-[40px] inline-flex h-[57px] w-[186px] items-center justify-center gap-[10px] rounded-[30px] border border-[#BCB7B7] px-[30px] py-[20px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]">
        <span className="font-['Montserrat'] text-[24px] font-bold leading-[120%] text-white">
          Dla kogo?
        </span>
      </div>

      <div className="absolute left-[894px] top-[40px] inline-flex h-[57px] w-[141px] items-center justify-center gap-[10px] rounded-[30px] border border-[#BCB7B7] px-[30px] py-[20px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]">
        <span className="font-['Montserrat'] text-[24px] font-bold leading-[120%] text-white">
          Oferta
        </span>
      </div>

      <div className="absolute left-[1055px] top-[40px] inline-flex h-[57px] w-[177px] items-center justify-center gap-[10px] rounded-[30px] border border-[#BCB7B7] px-[30px] py-[20px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]">
        <span className="font-['Montserrat'] text-[24px] font-bold leading-[120%] text-white">
          Produkty
        </span>
      </div>

      {/* Right Icons - Figma: right: 40px, top: 40px, gap: 20px */}
      <div className="absolute right-[40px] top-[40px] inline-flex h-[57px] w-[211px] items-start justify-end gap-[20px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]">
        {/* KONTAKT */}
        <div className="flex h-[57px] w-[57px] items-center justify-center rounded-[30px] border border-[#BCB7B7]">
          <span className="material-symbols-rounded text-[24px] leading-[100%] text-white">
            chat_bubble
          </span>
        </div>

        {/* PLATFORMA */}
        <div className="flex h-[57px] w-[57px] items-center justify-center rounded-[30px] border border-[#BCB7B7]">
          <span className="material-symbols-rounded text-[24px] leading-[100%] text-white">
            login
          </span>
        </div>

        {/* MENU */}
        <div className="flex h-[57px] w-[57px] items-center justify-center rounded-[30px] bg-[#1D1D1B]">
          <span className="material-symbols-rounded text-[24px] leading-[100%] text-white">
            menu
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReferenceNavigation;
