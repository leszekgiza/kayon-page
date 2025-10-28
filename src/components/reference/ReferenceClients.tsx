'use client';

const ReferenceClients = () => {
  return (
    <section className="flex h-[800px] w-[1920px] items-center justify-center bg-[#53923F] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-max items-center rounded-full border border-white/40 bg-white/10 px-6 py-2 text-sm font-semibold">
              Nasi Klienci
            </div>
            <h2 className="text-[40px] font-bold leading-tight">
              Kayon oferuje, konkretną odpowiedź na kluczowe wymagania dla różnych grup klientów
            </h2>
            <div className="max-w-xl rounded-[40px] border border-white/30 bg-white/10 px-8 py-6 text-base leading-relaxed">
              Tu właściciele nieruchomości i zarządzający znajdą świetne narzędzia obniżenia kosztów oraz zdalnego raportowania zużycia mediów liczących wzrost oszczędności i minimalizację wydatków, oraz pełny serwis kontroli.
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="flex items-center gap-6">
            <div className="flex-1 rounded-[32px] bg-white px-6 py-8 text-[#1D1D1B] shadow-lg">
              <h3 className="text-lg font-semibold">Dystrybutorzy</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#1D1D1B]/80">
                Jeśli nie są najważniejsze, to dysponowanie ofertą dostosowaniem rozwiązaniami technologicznymi daje lepszą pozycję rynku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceClients;
