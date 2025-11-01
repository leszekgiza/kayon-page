'use client';

import { useContent } from '@/hooks/useContent';
import Link from 'next/link';
import parse from 'html-react-parser';

export default function PrivacyPolicyPage() {
  const { privacyPolicy } = useContent();

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
          <h1 className="text-3xl font-bold text-primary md:text-5xl">{privacyPolicy.title}</h1>
          <div className="mt-8 space-y-4">
            {parse(privacyPolicy.content)}
          </div>
        </article>
      </div>
    </div>
  );
}
