'use client';

import { useState } from 'react';
import Link from 'next/link';
import KayonMark from '@/components/ui/KayonMark';
import FullScreenMenu from '@/components/ui/FullScreenMenu';
import { useContent } from '@/hooks/useContent';
import useDetectScroll, {
  Axis,
  Direction
} from '@smakss/react-scroll-direction';
import ToTopButton from './ToTopButton';

interface NavigationProps {
  showCenterLinks?: boolean;
  isHomePage?: boolean;
}

const Navigation = ({ showCenterLinks = true, isHomePage = true }: NavigationProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { navigation } = useContent();
  const { scrollDir, scrollPosition } = useDetectScroll();

  return (
    <>
      {/* Desktop Navigation - Figma: MENU component, 1920x137px */}
      <nav
        className={`px-[40px] pt-4 pb-2 w-screen fixed top-0 z-50 flex justify-between delay-300 transition-opacity duration-300 ease-in-out
          ${scrollDir === 'still' || scrollPosition.top === 0 ? ' opacity-100 backdrop-blur-none' : 'backdrop-blur-xl'}
          ${scrollDir === 'down' && scrollPosition.top > 500 ? ' hidden opacity-0' : 'opacity-100'}
          `}
      >
        {/* Logo - Figma: left: 40px, top: 40px, 57x57px */}
        <Link
          href="/"
          className="flex h-[57px] w-[57px] items-center justify-center rounded-[30px] shadow-[0_10px_40px_0_rgba(0,0,0,0.15)] transition-opacity duration-200 hover:opacity-80"
          aria-label={navigation.homeAriaLabel}
        >
          <KayonMark />
        </Link>

        {/* Center Labels - Figma: 3 labels with specific positions - only show on 2xl+ screens */}
        {showCenterLinks && (
          <div id='nav-central-links' className="hidden opacity-0 lg:opacity-100 lg:flex gap-4">
            <Link href={`/${navigation.primaryLinks[0].href}`} className="kayon-text-shadow px-6 h-[57px] w-max min-w-[186px] flex justify-center items-center text-[24px] font-bold border border-[#BCB7B7] rounded-full leading-[120%] text-white whitespace-nowrap hover:bg-[#76bb60] transition-all dutation-300 ease-in-out">
              {navigation.primaryLinks[0].label}
            </Link>

            <Link href={`/${navigation.primaryLinks[1].href}`} className="kayon-text-shadow px-6 h-[57px] w-max min-w-[186px] flex justify-center items-center text-[24px] font-bold border border-[#BCB7B7] rounded-full leading-[120%] text-white whitespace-nowrap hover:bg-[#2bbceb] transition-all dutation-300 ease-in-out">
              {navigation.primaryLinks[1].label}
            </Link>

            <Link href={`/${navigation.primaryLinks[2].href}`} className="kayon-text-shadow px-6 h-[57px] w-max min-w-[186px] flex justify-center items-center text-[24px] font-bold border border-[#BCB7B7] rounded-full leading-[120%] text-white whitespace-nowrap hover:bg-[#484848] transition-all dutation-300 ease-in-out">
              {navigation.primaryLinks[2].label}
            </Link>
          </div >
        )}

        {/* Right Icons - Figma: right: 40px, top: 40px, 3 icons with gap 20px */}
        <div className="inline-flex h-[57px] items-start justify-end gap-[20px] w-[211px]">
          <>
            {/* KONTAKT - chat_bubble */}
            <Link
              href="/kontakt"
              className="flex h-[57px] w-[57px] items-center justify-center rounded-full border border-white hover:border-green transition-all duration-300 ease-in-out"
              aria-label={navigation.actions.presentation.ariaLabel}
            >
              <span className="material-symbols-rounded text-[24px] leading-[100%] text-gray-300">
                chat_bubble
              </span>
            </Link>

            {/* PLATFORMA - login */}
            <a
              href="https://openmetering.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[57px] w-[57px] items-center justify-center rounded-full border border-white hover:border-green transition-all duration-300 ease-in-out"
              aria-label={navigation.actions.login.ariaLabel}
            >
              <span className="material-symbols-rounded text-[24px] leading-[100%] text-white">
                login
              </span>
            </a>
          </>

          {/* HAMBURGER ICON */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-[#1D1D1B] hover:bg-[#1D1D1B]/0 border border-green/0 hover:border-green/100 transition-all duration-300 ease-in-out"
            aria-label={navigation.actions.menu.ariaLabel}
          >
            <span className="material-symbols-rounded text-[24px] leading-[100%] text-white">
              menu
            </span>
          </button>
        </div>
      </nav >
      {scrollPosition.top > 600 && <ToTopButton />}
      <FullScreenMenu open={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navigation;
