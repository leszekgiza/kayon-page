'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import SectionLabel from '../ui/SectionLabel';
import parse from 'html-react-parser';

const SystemsSection = () => {
  const { systems } = useContent();

  return (
    <section id="rozwiazania-systemowe" className="mx-auto px-4 py-8 2xl:py-0 max-w-[1400px] lg:min-h-[800px] flex flex-col 2xl:flex-row justify-between items-center 2xl:gap-28">
      <motion.div
        className="2xl:w-[50%] 2xl:max-w-[600px] flex flex-col gap-8 md:gap-y-16 items-center 2xl:items-start text-center 2xl:text-left text-primary"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel label={systems.label} bgClass="bg-[#EAEAEA]" />
        <h2 className="font-semibold leading-tight text-primary text-3xl md:text-[40px]">
          {parse(systems.heading)}
        </h2>
        <Link
          href="/systemy"
          className="min-h-[51px] inline-flex w-max items-center gap-2 rounded-full bg-primary px-8 font-bold text-white transition-colors duration-200 hover:bg-primary-light"
        >
          {systems.ctaLabel}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </motion.div>

      <motion.div
        className="2xl:w-[50%]"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Image
          src="/systems-diagram.webp"
          alt={systems.imageAlt}
          className="md:h-[400px] 2xl:h-[800px] w-auto object-contain"
          width="400"
          height="280"
          priority
        />
      </motion.div>
    </section>
  );
};

export default SystemsSection;
