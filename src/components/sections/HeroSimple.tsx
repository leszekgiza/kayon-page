import KayonLogo from "@/components/ui/KayonLogo";

const HeroSimple = ({ title, desc }: { title: string, desc: string }) => {
  return (
    <section className="relative h-[400px] overflow-hidden bg-[#343432] text-white md:min-h-[500px] lg:min-h-[600px]">
      {/* Decorative circle - left side, partially off-screen - hidden on mobile */}
      <div className="absolute lg:left-[-955px] xl:left-[-855px] 2xl:left-[-555px] top-[-29px] hidden h-[494px] w-[1420px] items-center justify-center lg:flex">
        <div className="rotate-180">
          <div className="relative h-[494px] w-[1420px] rounded-[247px] opacity-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[247px] border-2 border-solid border-[#eaeaea]"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-8 md:top-12 lg:left-[50px] 2xl:left-[450px] 2xl:-translate-x-1/2 lg:top-[285px] lg:translate-x-0">
        <KayonLogo className="h-[40px] w-auto md:h-[60px] lg:h-[76px]" />
      </div>

      {/* Content Frame - Desktop: left-[1085px] top-[218px], Mobile: centered */}
      <div className="absolute left-1/2 top-24 flex w-[90%] -translate-x-1/2 flex-col items-start gap-[40px] md:top-32 lg:left-[1085px] lg:top-[218px] lg:w-auto lg:translate-x-0">
        {/* Title */}
        <div className="flex flex-col justify-center font-['Montserrat'] font-bold leading-[0] text-white">
          <h1 className="whitespace-pre text-[26px] leading-[1.2] md:text-[32px] lg:text-[40px]">
            {title}
          </h1>
        </div>

        <p className="p-8 max-w-[600px] border-2 border-[#747171] rounded-3xl md:text-xl font-bold">
          {desc}
        </p>
      </div>

      {/* Scroll Down Icon - Centered bottom */}
      <button
        type="button"
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12"
        aria-label="Scroll down"
      >
        <div className="flex size-[50px] items-center justify-center rounded-[25px] bg-[#bcb7b7] md:size-[57px] md:rounded-[30px]">
          <span className="material-symbols-rounded text-[20px] leading-none text-white md:text-[24px]">
            arrow_cool_down
          </span>
        </div>
      </button>
    </section>
  )
};

export default HeroSimple;