'use client';

const ReferenceBenefits = () => {
  const benefits = [
    'Brak przestojów i awarii',
    'Rzetelne zarządzanie danymi zbiorcami',
    'Pełna kompetencyjność i transparentność',
    'Prosty zarządzenie grubymi zbiorami',
    'Oszczędność czasu przy instalacji',
  ];

  return (
    <section className="w-[1920px] bg-[#F4B250] py-24 text-[#1D1D1B]">
      <div className="mx-auto w-full max-w-[1440px] px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-flex w-max items-center rounded-full border border-black/20 bg-white/40 px-6 py-2 text-sm font-semibold">
              Jak działamy?
            </div>
            <h2 className="text-[40px] font-bold leading-tight">
              Dostarczamy urządzenia i serwis, które minimalizują koszty
            </h2>
            <div className="max-w-xl rounded-[40px] border border-black/30 bg-black/10 px-8 py-6 text-base leading-relaxed">
              Rozwiązania Kayon są projektowane tak, by były sczególnie łatwe w instalacji, w procesach minimalizują wydatki, mniej pracy serwisowej i mniejsze koszty.
            </div>
          </div>

          {/* Right Column - Grid of benefits */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20">
                  <span className="material-symbols-rounded text-2xl text-black">
                    check
                  </span>
                </div>
                <h3 className="text-base font-semibold">{benefit}</h3>
                <button className="inline-flex w-max items-center gap-2 rounded-full bg-black px-6 py-2.5 text-xs font-semibold text-white">
                  Więcej
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceBenefits;
