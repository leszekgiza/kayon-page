export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KAYON",
    "url": "https://kayon-page-9ggodaet3-leszekgs-projects.vercel.app",
    "logo": "https://kayon-page-9ggodaet3-leszekgs-projects.vercel.app/logo.png",
    "description": "Nowoczesne systemy pomiarowe - liczniki ciepła i wody z zdalnym odczytem. Spełniamy standardy EED 2023/1791.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL",
      "addressLocality": "Warszawa"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "kontakt@kayon.pl",
      "telephone": "+48-123-456-789"
    },
    "sameAs": [
      "https://www.linkedin.com/company/kayon",
      "https://www.facebook.com/kayon"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
