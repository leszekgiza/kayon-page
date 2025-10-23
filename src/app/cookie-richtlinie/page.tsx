'use client';

import { useContent } from '@/hooks/useContent';
import Link from 'next/link';

export default function CookiePolicyPage() {
  const { cookiePolicy } = useContent();

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-16 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-primary/60 transition-colors hover:text-primary"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <article className="prose prose-lg max-w-4xl">
          <h1 className="text-3xl font-bold text-primary md:text-5xl">{cookiePolicy.title}</h1>

          {cookiePolicy.sections.map((section, index) => (
            <div key={index} className="mt-8">
              <h2 className="text-2xl font-semibold text-primary">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base leading-relaxed text-primary/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
