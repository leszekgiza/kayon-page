'use client';

import { motion } from 'framer-motion';
import { useContent } from '@/hooks/useContent';
import { useState } from 'react';

const ContactSection = () => {
  const { contact } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getCardIcon = (type: 'email' | 'phone' | 'address') => {
    switch (type) {
      case 'email':
        return (
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
        );
      case 'phone':
        return (
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
        );
      case 'address':
        return (
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
        );
    }
  };

  return (
    <section className="bg-neutral-gray-light py-24" id="kontakt">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
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

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contact.cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 rounded-[24px] border border-neutral-gray-light/70 bg-white px-6 py-6 shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      {getCardIcon(card.type)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-base font-semibold text-primary">
                        {card.title}
                      </h3>
                      {card.type === 'email' ? (
                        <a
                          href={`mailto:${card.value}`}
                          className="break-words text-sm text-primary-lighter transition-colors hover:text-primary"
                        >
                          {card.value}
                        </a>
                      ) : card.type === 'phone' ? (
                        <a
                          href={`tel:${card.value.replace(/\s/g, '')}`}
                          className="text-sm text-primary-lighter transition-colors hover:text-primary"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <address className="whitespace-pre-line text-sm not-italic text-primary-lighter">
                          {card.value}
                        </address>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="rounded-[24px] border border-neutral-gray-light/70 bg-white p-8 shadow-md"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-primary"
                    >
                      {contact.form.nameLabel} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contact.form.namePlaceholder}
                      required
                      className="w-full rounded-lg border border-neutral-gray-light/70 bg-neutral-gray-light/30 px-4 py-3 text-sm text-primary placeholder:text-primary-lighter/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-primary"
                    >
                      {contact.form.emailLabel} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contact.form.emailPlaceholder}
                      required
                      className="w-full rounded-lg border border-neutral-gray-light/70 bg-neutral-gray-light/30 px-4 py-3 text-sm text-primary placeholder:text-primary-lighter/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-primary"
                    >
                      {contact.form.subjectLabel}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={contact.form.subjectPlaceholder}
                      className="w-full rounded-lg border border-neutral-gray-light/70 bg-neutral-gray-light/30 px-4 py-3 text-sm text-primary placeholder:text-primary-lighter/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-primary"
                    >
                      {contact.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={contact.form.messagePlaceholder}
                      rows={6}
                      className="w-full resize-none rounded-lg border border-neutral-gray-light/70 bg-neutral-gray-light/30 px-4 py-3 text-sm text-primary placeholder:text-primary-lighter/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    {contact.form.submitButton}
                  </button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
