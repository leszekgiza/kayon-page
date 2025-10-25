'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import KayonLogo from '@/components/KayonLogo';
import { useContent } from '@/hooks/useContent';

export default function KontaktPage() {
  const { contact } = useContent();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section with dark background */}
        <section className="relative min-h-[60vh] overflow-hidden bg-[#2A2A2A] text-white">
          <div className="absolute inset-0">
            <Image
              src="/systems-diagram.png"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          </div>

          <div className="relative z-10 flex min-h-[60vh] items-center">
            <div className="container-custom w-full py-24">
              <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <KayonLogo className="mx-auto h-[60px] w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] lg:mx-0" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="max-w-lg rounded-[30px] border border-white/20 bg-white/10 p-8 backdrop-blur-md"
                >
                  <h1 className="text-3xl font-bold text-white md:text-4xl">{contact.heading}</h1>
                  <p className="mt-4 text-base leading-relaxed text-white/90">{contact.subtitle}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="bg-white py-24">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)]">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/60">
                    {contact.emailLabel}
                  </h3>
                  <a href="mailto:Welcome@kayon.pl" className="text-lg font-semibold text-primary hover:text-primary-light">
                    Welcome@kayon.pl
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/60">
                    {contact.carriersLabel}
                  </h3>
                  <a href="mailto:JoinUs@kayon.pl" className="text-lg font-semibold text-primary hover:text-primary-light">
                    JoinUs@kayon.pl
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/60">
                    {contact.businessLabel}
                  </h3>
                  <a href="mailto:Biz@kayon.pl" className="text-lg font-semibold text-primary hover:text-primary-light">
                    Biz@kayon.pl
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/60">
                    {contact.addressLabel}
                  </h3>
                  <p className="text-lg font-semibold text-primary">
                    ul. Gen. Józefa Fiszera 14
                    <br />
                    80-231 Gdańsk
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/60">
                    {contact.phoneLabel}
                  </h3>
                  <a href="tel:+48577570814" className="text-lg font-semibold text-primary hover:text-primary-light">
                    +48 577 570 814
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <motion.form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
                    {contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
                    {contact.emailInputLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-primary">
                    {contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
                    {contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                    {contact.successMessage}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
                    {contact.errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-primary-light disabled:opacity-50"
                >
                  {isSubmitting ? contact.sendingLabel : contact.submitLabel}
                </button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-neutral-gray-light py-16">
          <div className="container-custom">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-primary md:text-3xl">{contact.mapHeading}</h2>
                <p className="mt-2 text-base text-primary/70">{contact.mapSubheading}</p>
              </div>
              <a
                href="https://www.google.com/maps/dir//ul.+Gen.+J%C3%B3zefa+Fiszera+14,+80-231+Gda%C5%84sk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
              >
                {contact.directionsLabel}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.8406729794246!2d18.57169!3d54.37776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd749c0b8d3b33%3A0x8c8e8c8e8c8e8c8e!2sul.%20Gen.%20J%C3%B3zefa%20Fiszera%2014%2C%2080-231%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kayon Office Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
