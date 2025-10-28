'use client';

const ReferenceProducts = () => {
  const products = [
    {
      title: 'System',
      items: ['Aplikacja mobilna', 'Smart Data', 'Rozliczenie grupowe', 'Transmisja WMDN'],
    },
    {
      title: 'Wodomierze',
      items: ['Wodomierze', 'Podzielacze', 'Sprzedawcy (EWT)'],
    },
    {
      title: 'Ciepłomierze',
      items: ['Energomierz BeamGRILL', 'Stojlomierz Hitrodlow', 'EWT/Systemy'],
    },
  ];

  return (
    <section className="flex h-[800px] w-[1920px] items-center bg-[#474747] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-8">
        <div className="grid gap-12 lg:grid-cols-[477px_minmax(0,1fr)]">
          {/* Left Column - 477px width */}
          <div className="flex h-[631px] w-[477px] flex-col justify-between">
            <div className="inline-flex w-max items-center rounded-full bg-[#EAEAEA] px-[30px] py-5 text-2xl font-bold text-[#1D1D1B]">
              Produkty
            </div>
            
            <h2 className="text-[40px] font-bold leading-[52px]">
              Produkty wyznaczające nowy standard pomiarów
            </h2>
            
            <div className="w-[467px] rounded-[30px] border-2 border-[#747171] p-10">
              <p className="text-[20px] leading-[26px]">
                Oferujemy jak tylko technologie — oferujemy modny standard pomiarów oszczędności, automatyzacji
              </p>
            </div>
            
            <p className="w-[437px] text-base font-bold leading-[22.4px]">
              Produkty wszystkie realizują wzorce EED 2023/1791, standardy ALL IN KAYON, to również wolność wyboru danych urządzeń własnych.
            </p>
          </div>

          {/* Right Column - Product Cards */}
          <div className="flex gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex h-[441px] w-[310px] flex-shrink-0 flex-col justify-between rounded-[20px] bg-white px-6 py-8 text-[#1D1D1B]"
              >
                <div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <ul className="mt-4 flex flex-col gap-[10px]">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-[10px]">
                        <span className="material-symbols-rounded text-2xl text-[#2CBCEB]">
                          arrow_right
                        </span>
                        <span className="text-base font-bold leading-[22.4px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-[#1D1D1B] px-6 py-2.5 text-xs font-semibold text-white">
                  Zobacz
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceProducts;
