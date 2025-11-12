'use client';

const ReferenceOffer = () => {
  const cards = [
    {
      title: 'Produkty, które działają na korzyść użytkownika',
      bullets: [
        'Każde nasze urządzenie zostało zaprojektowane, aby...',
        'Jakość i precyzja',
        'Instalacja i integracja',
        'Inteligentne funkcje',
      ],
    },
    {
      title: 'Jeden system — wszystkie elementy współpracują',
      bullets: [
        'Nasza infrastruktura kompletuje wszystko...',
        'Zdalny odczyt w czasie rzeczywistym',
        'Jeden interfejs dla wszystkich urządzeń',
        'Pełna kontrola i raportowanie',
      ],
    },
  ];

  return (
    <section className="w-[1920px] bg-blue py-24 text-white">
      <div className="mx-auto w-full max-w-[1440px] px-8">
        <div className="grid gap-12 lg:grid-cols-[0.67fr_1fr]">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-flex w-max items-center rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-semibold">
              Co oferujemy?
            </div>
            <h2 className="text-[40px] font-bold leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/80">
              Łączymy nowoczesne produkty z systemem zarządzania jednocześnie kompleksowych rozwiązaniach zapewniamy maksymalną wartość użytkowania.
            </p>
          </div>

          {/* Right Column - Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <div key={index} className="flex h-full flex-col gap-4 rounded-[32px] bg-white px-6 py-8 text-[#1D1D1B] shadow-lg">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <ul className="space-y-3 text-sm text-[#1D1D1B]/80">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-rounded text-2xl text-[#2CBCEB]">
                        check
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceOffer;
