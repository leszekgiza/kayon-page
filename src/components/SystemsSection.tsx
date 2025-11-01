'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import SectionLabel from './ui/SectionLabel';

const SystemsSection = () => {
  const { systems } = useContent();

  return (
    <section className="relative overflow-hidden bg-white py-24" id="rozwiazania-systemowe">
      <div className="px-4 md:px-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,672px)_minmax(0,1fr)]">
          <motion.div
            className="relative z-10 flex flex-col justify-center space-y-8 md:ml-[100px] md:pl-8 lg:-mt-[60px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel label={systems.label} bgClass="bg-[#EAEAEA]" />
            <h2 className="text-3xl font-semibold leading-tight text-primary md:text-[40px]">
              {systems.heading}
            </h2>
            <Link
              href="/systemy"
              className="inline-flex w-max items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
            >
              {systems.ctaLabel}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className="relative z-0 aspect-[4/3] overflow-visible lg:aspect-auto lg:h-full lg:min-h-[500px]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/systems-diagram.png"
              alt={systems.imageAlt}
              fill
              className="object-cover lg:scale-[1.4] lg:origin-left lg:-translate-x-[120px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
