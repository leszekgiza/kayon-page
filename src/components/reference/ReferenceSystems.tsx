'use client';

import Image from 'next/image';

const ReferenceSystems = () => {
  return (
    <section className="flex h-[800px] w-[1920px] items-center bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex w-max items-center rounded-full border border-[#1D1D1B]/20 bg-[#EAEAEA] px-6 py-2 text-sm font-semibold text-[#1D1D1B]">
              Rozwiązania systemowe
            </div>
            <h2 className="text-[40px] font-bold leading-tight text-[#1D1D1B]">
              Systemy All in KAYON to inteligentne rozwiązania integrujące wiele urządzeń oraz wszystkie istotne dane i procesy.
            </h2>
            <button className="inline-flex w-max items-center gap-2 rounded-full bg-[#1D1D1B] px-8 py-4 text-sm font-semibold text-white">
              Nasze rozwiązania
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[500px] w-full">
              <Image
                src="/systems-diagram.png"
                alt="Systems Diagram"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceSystems;
