'use client';

import { useState } from 'react';
import Link from 'next/link';
import KayonLogo from './KayonLogo';
import KayonMark from './KayonMark';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { label: 'Dla kogo?', href: '#dla-kogo' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'Produkty', href: '#produkty' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4 py-6">
          <Link href="/" className="hidden rounded-full bg-white/90 p-1 shadow-md md:flex">
            <KayonMark className="h-12 w-12" />
          </Link>

          <div className="hidden items-center gap-3 rounded-full border border-white/30 bg-black/40 px-4 py-2 backdrop-blur md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-5 py-2 text-sm font-semibold text-white/90 transition-colors duration-200 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Prezentacja"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition-colors duration-200 hover:bg-white/10"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.7" />
                <path d="M9 9h6v6H9z" strokeWidth="1.7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Logowanie"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition-colors duration-200 hover:bg-white/10"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12H5m0 0 3-3m-3 3 3 3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <LanguageSwitcher variant="inline" />
            <button
              type="button"
              aria-label="Menu"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black/80 text-white transition-colors duration-200 hover:bg-black"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
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
          <div className="space-y-4 rounded-3xl border border-white/20 bg-black/75 p-6 text-white backdrop-blur md:hidden">
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
                Prezentacja
              </button>
              <button
                type="button"
                className="flex h-12 items-center justify-center rounded-full border border-white/30 text-sm font-semibold hover:bg-white/10"
              >
                Logowanie
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
