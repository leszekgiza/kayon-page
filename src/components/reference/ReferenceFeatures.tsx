'use client';

const ReferenceFeatures = () => {
  const cards = [
    {
      bg: '#D9D9D9',
      title: 'Doświadczenie, które buduje zaufanie',
    },
    {
      bg: '#CBCBCB',
      title: 'Technologia gotowa na przyszłość',
    },
    {
      bg: '#BCBCBC',
      title: 'Kayon zyskuje w całej Europie',
    },
  ];

  return (
    <section className="flex h-[500px] w-[1920px] shadow-[0_40px_40px_0_rgba(0,0,0,0.02)]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex h-full flex-1"
          style={{ backgroundColor: card.bg }}
        >
          {/* Content positioned: ml-[100px] mt-[45px] pb-[155px] */}
          <div className="ml-[100px] mt-[45px] flex h-full flex-col justify-between pb-[155px]">
            {/* Icon - 57x57px, radius: 30px */}
            <div className="flex h-[57px] w-[57px] items-center justify-center rounded-[30px] bg-[#747171]">
              <span className="material-symbols-rounded text-[24px] text-white">
                check
              </span>
            </div>

            {/* Title - w: 364px, font-size: 32px */}
            <p className="w-[364px] font-['Montserrat'] text-[32px] font-bold leading-[1.2] text-[#1D1D1B]">
              {card.title}
            </p>

            {/* Button - px: 30px, py: 20px, radius: 30px */}
            <button className="inline-flex w-max items-center gap-[10px] rounded-[30px] bg-[#1D1D1B] px-[30px] py-[20px] font-['Montserrat'] text-[16px] font-bold text-white">
              Więcej
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReferenceFeatures;
