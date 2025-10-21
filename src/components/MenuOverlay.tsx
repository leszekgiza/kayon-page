'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import KayonLogo from './KayonLogo';
import { useContent } from '@/hooks/useContent';

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

const MenuOverlay = ({ open, onClose }: MenuOverlayProps) => {
  const { menuOverlay } = useContent();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1F1F1F] px-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            onClick={onClose}
            aria-label={menuOverlay.closeAria}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <motion.div
            className="grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative flex flex-col items-center justify-center gap-10 rounded-[280px] border border-white/20 bg-[#2A2A2A] px-12 py-16 text-center lg:px-20">
              <KayonLogo className="h-14 w-auto drop-shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:h-16" />
            </div>

            <div className="flex flex-col justify-center gap-10 lg:pl-16">
              <nav className="space-y-5">
                {menuOverlay.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center gap-4 text-xl font-semibold leading-tight lg:text-2xl"
                  >
                    <span className="inline-flex h-2 w-10 items-center rounded-full bg-accent-green transition-colors duration-200 group-hover:bg-accent-blue" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="h-px w-full bg-white/20" />

              <Link
                href={menuOverlay.cta.href}
                onClick={onClose}
                className="inline-flex w-max items-center gap-3 rounded-full bg-accent-blue px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-accent-blue/80"
              >
                {menuOverlay.cta.label}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
