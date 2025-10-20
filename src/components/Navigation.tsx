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
          <Link
            href="/"
            className="hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:flex"
            aria-label="KAYON strona główna"
          >
            <KayonMark className="h-10 w-10" />
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full border border-white/35 bg-black/35 px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/15"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Prezentacja"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white transition-colors duration-200 hover:bg-white/15"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth="1.6" />
                <path d="M9.5 10.5h5v5h-5z" strokeWidth="1.6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Logowanie"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-transparent text-white transition-colors duration-200 hover:border-white"
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M14.8 6h3.2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12h9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 9.5 15 12l-2.5 2.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="rounded-full border border-white/35 bg-black/45 px-1 py-1">
              <LanguageSwitcher variant="inline" />
            </div>
            <button
              type="button"
              aria-label="Menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-black/80 text-white transition-colors duration-200 hover:bg-black"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white md:hidden"
            aria-label="Przełącz menu"
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
