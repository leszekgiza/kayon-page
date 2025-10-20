'use client';

import { useState } from 'react';
import Link from 'next/link';
import KayonLogo from './KayonLogo';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { label: 'Dla kogo?', href: '#dla-kogo' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'Produkty', href: '#produkty' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-6">
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg font-bold text-white">
              Y
            </div>
            <Link href="/" className="hidden md:flex">
              <KayonLogo className="h-10 w-auto text-white" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Kontakt"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 8a2 2 0 0 1-2 2h-4l-3 3-3-3H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Platforma"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6v12m6-6H6" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <LanguageSwitcher variant="inline" />
                <button
                  type="button"
                  aria-label="Menu"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white transition-colors duration-200 hover:bg-black"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden space-y-4 rounded-3xl border border-white/20 bg-black/70 p-6 text-white backdrop-blur">
            <div className="flex items-center justify-between">
              <KayonLogo className="h-10 w-auto text-white" />
              <LanguageSwitcher variant="menu" />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-full border border-white/30 px-4 py-3 text-center text-sm font-semibold hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex h-12 items-center justify-center rounded-full border border-white/30 text-sm font-semibold hover:bg-white/10"
              >
                Kontakt
              </button>
              <button
                type="button"
                className="flex h-12 items-center justify-center rounded-full border border-white/30 text-sm font-semibold hover:bg-white/10"
              >
                Platforma
              </button>
              <button
                type="button"
                className="flex h-12 items-center justify-center rounded-full bg-black text-sm font-semibold"
              >
                Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
