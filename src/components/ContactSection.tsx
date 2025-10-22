'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';

const ContactSection = () => {
  const { contact } = useContent();

  return (
    <section className="bg-neutral-gray-light py-24" id="kontakt">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-center">
              <div className="inline-flex w-max items-center rounded-full border border-primary/40 bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
                {contact.label}
              </div>
              <h2 className="text-3xl font-semibold text-primary md:text-[40px]">
                {contact.heading}
              </h2>
              <p className="mx-auto max-w-2xl text-base text-primary-lighter md:text-lg">
                {contact.description}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center gap-4 rounded-[32px] border border-neutral-gray-light/70 bg-white px-6 py-8 text-center shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-7 w-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-primary">Email</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-primary-lighter transition-colors hover:text-primary"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-[32px] border border-neutral-gray-light/70 bg-white px-6 py-8 text-center shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-7 w-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-primary">Telefon</h3>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-sm text-primary-lighter transition-colors hover:text-primary"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-[32px] border border-neutral-gray-light/70 bg-white px-6 py-8 text-center shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-7 w-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-primary">Adres</h3>
                  <address className="text-sm not-italic text-primary-lighter">
                    {contact.address.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </address>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
