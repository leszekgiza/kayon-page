'use client';

import { useState } from 'react';
import Link from 'next/link';
import KayonLogo from './KayonLogo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-white/95 backdrop-blur-sm border-b border-neutral-gray-light">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <KayonLogo className="h-8" />
          </Link>

          {/* Desktop Menu - exact Figma dimensions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Why button - 119x57px */}
            <Link
              href="#why"
              className="w-[119px] h-[57px] flex items-center justify-center bg-neutral-gray text-primary hover:bg-neutral-gray/80 transition-colors duration-200 text-sm font-bold rounded-[30px]"
            >
              Why
            </Link>
            {/* What button - 130x57px */}
            <Link
              href="#what"
              className="w-[130px] h-[57px] flex items-center justify-center bg-neutral-gray text-primary hover:bg-neutral-gray/80 transition-colors duration-200 text-sm font-bold rounded-[30px]"
            >
              What
            </Link>
            {/* How button - 118x57px */}
            <Link
              href="#how"
              className="w-[118px] h-[57px] flex items-center justify-center bg-neutral-gray text-primary hover:bg-neutral-gray/80 transition-colors duration-200 text-sm font-bold rounded-[30px]"
            >
              How
            </Link>
            {/* Contact button - 160x57px gold */}
            <button className="w-[160px] h-[57px] flex items-center justify-center bg-accent-gold text-white hover:bg-accent-gold/90 transition-colors duration-200 font-bold text-sm rounded-[30px]">
              Contact
            </button>
            {/* Platforma button - 186x57px green */}
            <button className="w-[186px] h-[57px] flex items-center justify-center bg-accent-green text-white hover:bg-accent-green/90 transition-colors duration-200 font-bold text-sm rounded-[30px]">
              Platforma
            </button>
            {/* Hamburger Menu Icon - 57x57px */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-[57px] h-[57px] bg-primary rounded-[30px] flex items-center justify-center text-white hover:bg-primary-light transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button - 57x57px */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-[57px] h-[57px] bg-primary rounded-[30px] flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-gray-light space-y-2">
            <Link
              href="#why"
              className="block py-3 px-4 text-primary font-bold hover:bg-neutral-gray-light rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Why
            </Link>
            <Link
              href="#what"
              className="block py-3 px-4 text-primary font-bold hover:bg-neutral-gray-light rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              What
            </Link>
            <Link
              href="#how"
              className="block py-3 px-4 text-primary font-bold hover:bg-neutral-gray-light rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              How
            </Link>
            <button className="w-full px-6 py-3 bg-accent-gold text-white rounded-[30px] hover:bg-accent-gold/90 transition-colors duration-200 font-bold text-sm">
              Contact
            </button>
            <button className="w-full px-6 py-3 bg-accent-green text-white rounded-[30px] hover:bg-accent-green/90 transition-colors duration-200 font-bold text-sm">
              Platforma
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
