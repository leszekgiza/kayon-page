'use client';

import { useState } from 'react';
import Link from 'next/link';
import KayonMark from '@/components/ui/KayonMark';
import MenuOverlay from '@/components/ui/MenuOverlay';
import { useContent } from '@/hooks/useContent';

interface NavigationProps {
  showCenterLinks?: boolean;
  isHomePage?: boolean;
}

const Navigation = ({ showCenterLinks = true, isHomePage = true }: NavigationProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { navigation } = useContent();

  return (
    <>
      {/* Desktop Navigation - Figma: MENU component, 1920x137px */}
      <nav className="absolute left-0 right-0 top-0 z-50 hidden h-[137px] w-full md:block">
        {/* Logo - Figma: left: 40px, top: 40px, 57x57px */}
        <Link
          href="/"
          className="absolute left-[40px] top-[40px] flex h-[57px] w-[57px] items-center justify-center rounded-[30px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)] transition-opacity duration-200 hover:opacity-80"
          aria-label={navigation.homeAriaLabel}
        >
          <KayonMark />
        </Link>

        {/* Center Labels - Figma: 3 labels with specific positions - only show on 2xl+ screens */}
        {showCenterLinks && (
          <>
            <div className="absolute left-[688px] top-[40px] hidden 2xl:inline-flex h-[57px] w-[186px] items-center justify-center gap-[10px] rounded-[30px] border border-[#BCB7B7] px-[30px] py-[20px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]">
              <Link href={`/${navigation.primaryLinks[0].href}`} className="font-['Montserrat'] text-[24px] font-bold leading-[120%] text-white whitespace-nowrap">
                {navigation.primaryLinks[0].label}
              </Link>
            </div>

            <div className="absolute left-[894px] top-[40px] hidden 2xl:inline-flex h-[57px] w-[141px] items-center justify-center gap-[10px] rounded-[30px] border border-[#BCB7B7] px-[30px] py-[20px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]">
              <Link href={`/${navigation.primaryLinks[1].href}`} className="font-['Montserrat'] text-[24px] font-bold leading-[120%] text-white">
                {navigation.primaryLinks[1].label}
              </Link>
            </div>

            <div className="absolute left-[1055px] top-[40px] hidden 2xl:inline-flex h-[57px] w-[177px] items-center justify-center gap-[10px] rounded-[30px] border border-[#BCB7B7] px-[30px] py-[20px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]">
              <Link href={`/${navigation.primaryLinks[2].href}`} className="font-['Montserrat'] text-[24px] font-bold leading-[120%] text-white">
                {navigation.primaryLinks[2].label}
              </Link>
            </div>
          </>
        )}

        {/* Right Icons - Figma: right: 40px, top: 40px, 3 icons with gap 20px */}
        <div className="absolute right-[40px] top-[40px] inline-flex h-[57px] items-start justify-end gap-[20px] w-[211px]">
          <>
            {/* KONTAKT - chat_bubble */}
            <Link
              href="/kontakt"
              className="flex h-[57px] w-[57px] items-center justify-center rounded-[30px] border border-[#BCB7B7] bg-[#050819]/50 transition-colors duration-200 hover:border-white"
              aria-label={navigation.actions.presentation.ariaLabel}
            >
              <span className="material-symbols-rounded text-[24px] leading-[100%] text-white">
                chat_bubble
              </span>
            </Link>

            {/* PLATFORMA - login */}
            <a
              href="https://openmetering.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[57px] w-[57px] items-center justify-center rounded-[30px] border border-[#BCB7B7] bg-[#050819]/50 transition-colors duration-200 hover:border-white"
              aria-label={navigation.actions.login.ariaLabel}
            >
              <span className="material-symbols-rounded text-[24px] leading-[100%] text-white">
                login
              </span>
            </a>
          </>

          {/* MENU - menu icon with black background - ALWAYS VISIBLE */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-[57px] w-[57px] items-center justify-center rounded-[30px] bg-[#1D1D1B] transition-colors duration-200 hover:bg-[#343432]"
            aria-label={navigation.actions.menu.ariaLabel}
          >
            <span className="material-symbols-rounded text-[24px] leading-[100%] text-white">
              menu
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - simplified for smaller screens */}
      <nav className="absolute left-0 right-0 top-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 shadow-lg"
            aria-label={navigation.homeAriaLabel}
          >
            <KayonMark />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D1D1B] shadow-lg"
            aria-label={navigation.actions.menu.ariaLabel}
          >
            <span className="material-symbols-rounded text-[24px] text-white">
              menu
            </span>
          </button>
        </div>
      </nav>

      <MenuOverlay open={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navigation;
