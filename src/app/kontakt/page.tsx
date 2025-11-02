'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/sections/Footer';
import KayonLogo from '@/components/ui/KayonLogo';
import { useContent } from '@/hooks/useContent';
import HeroSimple from '@/components/sections/HeroSimple';

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
      <Navigation showCenterLinks={false} isHomePage />
      <main>
        <HeroSimple title={contact.heading} desc={contact.subtitle} />

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
                    KAYON Sp. z o.o.
                    <br />
                    Aleja Zwycięstwa 96/98
                    <br />
                    81-451 Gdynia, PL
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
              </div>
              <a
                href="https://www.google.com/maps/dir//Aleja+Zwyci%C4%99stwa+96%2F98,+81-451+Gdynia"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2321.123!2d18.5395!3d54.5186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDMxJzA3LjAiTiAxOMKwMzInMjIuMiJF!5e0!3m2!1spl!2spl!4v1234567890"
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
